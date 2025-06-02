"use client";

import { useState, useEffect, Suspense } from "react";
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
      <MainLayout />
    </Suspense>
  );
};
