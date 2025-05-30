import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const customCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (customCursorRef.current) {
        customCursorRef.current.style.left = `${e.pageX}px`;
        customCursorRef.current.style.top = `${e.pageY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={customCursorRef}
      className="hidden md:block w-5 h-5 absolute bg-gray-600 rounded-full transition-all animate-bounce -z-10"
    >
      <div className="w-spacing-default-10px h-spacing-default-10px bg-gray-500 rounded-full animate-ping"></div>
    </div>
  );
};
