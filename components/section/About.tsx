import Image from "next/image";
import { FaDownload, FaFilePdf, FaUser } from "react-icons/fa";
import { LinkButton } from "../ui/LinkButton";
import { Title } from "../ui/Title";
import { Subtitle } from "../ui/Subtitle";
import { Paragraph } from "../ui/Paragraph";
import { Divider } from "../ui/Divider";

export const About = () => {
  return (
    <section
      id="about"
      className="my-5 p-2.5 flex flex-col lg:flex-row lg:items-start justify-between gap-2.5 border-y-default"
    >
      <div className="lg:w-1/2 lg:min-h-[600px] p-5 border-full-default rounded-lg">
        <Title icon={<FaUser />} title="Between Logic & Lore" />
        <Divider mb={8} />
        <Subtitle subtitle="The Brain Behind the Backend" />
        <Divider my={20} />

        <div className="xl:w-[500px] grid gap-2.5">
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
            paragraph="  When I'm not orchestrating logic flows and designing robust
            APIs, you'll find me soaking in sad songs, stargazing with
            sci-fi classics, or leveling up in fantasy realms."
          />

          <Paragraph
            paragraph="My work is deeply intentional - I don't just write code, I
            craft systems with purpose. I believe in the quiet power of
            infrastructure: invisible, essential, and always evolving."
          />
        </div>

        <div className="mt-5 lg:mt-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <LinkButton
            buttonIcon={<FaDownload />}
            buttonText="Download Resume"
            buttonHref="/documents/resume-reginald-chand.pdf"
            download
          />

          <LinkButton
            buttonIcon={<FaFilePdf />}
            buttonText="Preview Resume"
            buttonHref="/documents/resume/"
            buttonIsPrimary={false}
            target="_self"
          />
        </div>
      </div>

      <div className="lg:w-1/2 h-[600px] p-1 border-full-default rounded-lg">
        <Image
          src={"/images/personal/personal-pic.jpg"}
          alt="Reginald Sahil Chand"
          width={500}
          height={500}
          className="w-full h-full object-center object-cover filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-200 ease-linear rounded-md"
        />
      </div>
    </section>
  );
};
