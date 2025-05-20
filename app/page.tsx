import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <MainLayout />
    </>
  );
}
