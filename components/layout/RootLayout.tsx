"use client";

import { useState, useEffect, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { CustomCursor } from "../ui/CustomCursor";
import { Loader } from "../ui/Loader";
import { MainLayout } from "./MainLayout";

export const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const timeoutIsTwoSeconds = 2000;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, timeoutIsTwoSeconds);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <div className="w-full h-screen fixed bg-[url('/images/backgrounds/ai-gen-background-body.jpg')] bg-top bg-cover bg-no-repeat -z-10 opacity-5 blur-xl"></div>

      <Toaster position="top-center" reverseOrder={false} />
      <CustomCursor />
      <MainLayout />
    </Suspense>
  );
};
