import { LabeledIcon } from "@/components/ui/LabeledIcon";
import { MainContainer } from "@/components/ui/MainContainer";
import { PaddingInner } from "@/components/ui/PaddingInner";
import { PaddingOuter } from "@/components/ui/PaddingOuter";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

export default function ResumePreview() {
  return (
    <MainContainer>
      <PaddingOuter>
        <Link
          href={"/"}
          className="w-full mb-2.5 block text-gray-50/50 hover:text-gray-50 transition-colors duration-200 ease-linear group border-full-default rounded-lg"
        >
          <PaddingInner>
            <LabeledIcon icon={<BiLeftArrow />} label="Back to home" />
          </PaddingInner>
        </Link>

        <iframe
          src="/documents/resume-reginald-chand.pdf"
          className="w-full h-screen rounded-lg"
        ></iframe>
      </PaddingOuter>
    </MainContainer>
  );
}
