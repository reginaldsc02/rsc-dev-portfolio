/**
 * @param url Url for your audio that needs to be played.
 */
export const playNotificationAudio = async (url: string) => {
  try {
    const audioCtx = new window.AudioContext();

    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;

    source.connect(audioCtx.destination);

    source.start();

    source.stop(audioCtx.currentTime + audioBuffer.duration);

    source.onended = () => {
      source.disconnect();
    };
  } catch (error) {
    throw error;
  }
};
