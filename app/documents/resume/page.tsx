import { LabeledIcon } from "@/components/ui/LabeledIcon";
import { PaddingInner } from "@/components/ui/PaddingInner";
import { PaddingOuter } from "@/components/ui/PaddingOuter";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ResumePreview() {
  return (
    <main className="w-full min-h-screen">
      <PaddingOuter>
        <Link
          href={"/"}
          className="w-full mb-2.5 block text-gray-50/50 hover:text-gray-50 transition-colors duration-200 ease-linear group border-full-default rounded-lg"
        >
          <PaddingInner>
            <LabeledIcon icon={<FaArrowLeft />} label="Back to home" />
          </PaddingInner>
        </Link>

        <iframe
          src="/documents/resume-reginald-chand.pdf"
          className="w-full h-screen rounded-lg"
        ></iframe>
      </PaddingOuter>
    </main>
  );
}
