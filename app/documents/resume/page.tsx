import { LabeledIcon } from "@/components/ui/LabeledIcon";
import { MainContainer } from "@/components/ui/MainContainer";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

export default function ResumePreview() {
  return (
    <MainContainer>
      <div className="p-spacing-default-10px grid gap-spacing-default-10px">
        <Link
          href={"/"}
          className="w-full p-spacing-default-20px block text-default-opacity-50 hover:text-default transition-colors group border-full-default rounded-default-8px"
        >
          <LabeledIcon icon={<BiLeftArrow />} label="Back to home" />
        </Link>

        <iframe
          src="/documents/resume-reginald-chand.pdf"
          className="w-full h-screen rounded-default-8px"
        ></iframe>
      </div>
    </MainContainer>
  );
}
