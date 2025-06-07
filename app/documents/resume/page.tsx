import { Container } from "@/components/shared/ui/Container";

export default function ResumePreview() {
  return (
    <Container>
      <iframe
        src="/documents/resume-reginald-chand.pdf"
        className="w-full h-screen rounded-lg"
      ></iframe>
    </Container>
  );
}
