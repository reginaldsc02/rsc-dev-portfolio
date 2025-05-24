import { MainLayout } from "@/components/layout/MainLayout";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Loader } from "@/components/ui/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full h-screen fixed bg-[url('/images/backgrounds/ai-gen-background-body.jpg')] bg-top bg-cover bg-no-repeat -z-10 opacity-5 blur-xl"></div>

      <Toaster position="top-center" reverseOrder={false} />
      <CustomCursor />
      <MainLayout />
    </Suspense>
  );
}
