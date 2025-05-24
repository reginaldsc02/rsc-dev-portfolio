import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ResumePreview() {
  return (
    <main className="w-full p-1.5 min-h-screen">
      <Link
        href={"/"}
        className="w-full mb-1.5 p-5 flex items-center gap-2.5 text-gray-50/50 hover:text-gray-50 transition-colors duration-200 ease-linear group border-full-default rounded-lg"
      >
        <span>
          <FaArrowLeft />
        </span>
        <span className="group-active:scale-95">Back to home</span>
      </Link>

      <iframe
        src="/documents/resume-reginald-chand.pdf"
        className="w-full h-screen rounded-lg"
      ></iframe>
    </main>
  );
}
