import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full h-screen fixed bg-[url('/images/backgrounds/ai-gen-background-body.jpg')] bg-top bg-cover bg-no-repeat -z-10 opacity-5 blur-xl"></div>
      <MainLayout />
    </>
  );
}
