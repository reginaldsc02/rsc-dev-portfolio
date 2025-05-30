import toast from "react-hot-toast";

type UseServerToastHandlerType<T = void> = {
  asyncFunction: () => Promise<T>;
  message: {
    loading: string;
    success: string;
    error: string;
  };
};

export const useServerToastHandler = async <T>({
  asyncFunction,
  message,
}: UseServerToastHandlerType<T>) => {
  return toast.promise(asyncFunction(), {
    loading: message.loading || "Processing: Please wait",
    success: message.success || "Process: Successful",
    error: message.error || "Process: Unsuccessful",
  });
};
