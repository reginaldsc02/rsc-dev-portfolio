import { HeaderAndLink } from "@/components/ui/HeaderAndLink";
import { MainContainer } from "@/components/ui/MainContainer";

export default function ResumePreview() {
  return (
    <>
      <HeaderAndLink href={"/"} title={"Home"} />

      <MainContainer>
        <div className="p-spacing-default-10px grid gap-spacing-default-10px">
          <iframe
            src="/documents/resume-reginald-chand.pdf"
            className="w-full h-screen rounded-default-8px"
          ></iframe>
        </div>
      </MainContainer>
    </>
  );
}
