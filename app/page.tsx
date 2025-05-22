"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const customCursorRef = useRef<HTMLDivElement>(null);
  const [customCursorClicked, setCustomCursorClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e: any) => {
      if (customCursorRef.current) {
        customCursorRef.current.style.left = `${e.pageX}px`;
        customCursorRef.current.style.top = `${e.pageY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full h-screen fixed bg-[url('/images/backgrounds/ai-gen-background-body.jpg')] bg-top bg-cover bg-no-repeat -z-10 opacity-5 blur-xl"></div>

      <div
        ref={customCursorRef}
        className="hidden md:block w-5 h-5 absolute bg-gray-600 rounded-full transition-all duration-200 ease-linear animate-bounce -z-10"
      >
        <div className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-ping"></div>
      </div>

      <MainLayout />
    </>
  );
}
