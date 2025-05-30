import Image from "next/image";
import { LinkButton } from "../ui/LinkButton";
import { Paragraph } from "../ui/Paragraph";
import { SectionHeader } from "../ui/SectionHeader";
import { BiDownload, BiSolidFilePdf, BiSolidUser } from "react-icons/bi";

export const About = () => {
  return (
    <section
      id="about"
      className="grid lg:grid-cols-2 gap-spacing-default-10px p-spacing-default-10px"
    >
      <div className="p-spacing-default-20px border-full-default rounded-default-8px">
        <SectionHeader
          icon={<BiSolidUser />}
          title="Between Logic & Lore"
          subtitle="The Brain Behind the Backend"
        />

        <div className="xl:w-[500px] grid gap-spacing-default-10px">
          <Paragraph
            paragraph="I'm a backend focused but full-stack developer with a poetic
            heart and a strategic mind. Someone who finds beauty in clean
            architecture, scalable microservices, and code that does its job so
            flawlessly, no one notices it's even there."
          />

          <Paragraph
            paragraph="I specialize in building the sturdy skeletons of modern applications
            such as Notification Management System, File Handling Mcroservices,
            and Content Management Backends that hum like well-tuned machines."
            isImportant
          />

          <Paragraph
            paragraph="When I'm not orchestrating logic flows and designing robust
            APIs, you'll find me soaking in sad songs, stargazing with
            sci-fi classics, or leveling up in fantasy realms."
          />

          <Paragraph
            paragraph="My work is deeply intentional - I don't just write code, I
            craft systems with purpose. I believe in the quiet power of
            infrastructure: invisible, essential, and always evolving."
          />
        </div>

        <div className="mt-spacing-default-20px flex flex-col sm:flex-row sm:items-center gap-spacing-default-20px">
          <LinkButton
            icon={<BiDownload />}
            text="Download Resume"
            href="/documents/resume-reginald-chand.pdf"
            download
          />

          <LinkButton
            icon={<BiSolidFilePdf />}
            text="Preview Resume"
            href="/documents/resume/"
            isPrimary={false}
            target="_self"
          />
        </div>
      </div>

      <div className="h-[594px]">
        <Image
          src={"/images/personal/personal-pic.jpg"}
          alt="Reginald Sahil Chand"
          width={500}
          height={500}
          className="w-full h-full object-center object-cover filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all rounded-default-8px"
        />
      </div>
    </section>
  );
};
