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
      <Toaster position="top-center" reverseOrder={false} />
      <CustomCursor />
      <MainLayout />
    </Suspense>
  );
};
