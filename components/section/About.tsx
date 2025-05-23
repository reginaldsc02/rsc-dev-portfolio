import Image from "next/image";
import { FaDownload, FaFilePdf, FaUser } from "react-icons/fa";
import { LinkButton } from "../ui/LinkButton";

export const About = () => {
  return (
    <section
      id="about"
      className="my-5 p-2.5 flex flex-col lg:flex-row lg:items-start justify-between gap-2.5 border-y-[1px] border-solid border-y-gray-50/10"
    >
      <div className="lg:w-1/2 lg:min-h-[600px] p-5 border-[1px] border-solid border-gray-50/10 rounded-lg">
        <div className="mb-2.5 flex items-center gap-1.5 text-balance capitalize text-4xl font-bold">
          <FaUser className="hidden md:block" />
          <div className="font-medium">Between Logic & Lore</div>
        </div>

        <p className="mb-5 tracking-wide text-gray-50/50">
          The Brain Behind the Backend
        </p>

        <div className="xl:w-[500px] text-gray-50/50 tracking-wide grid gap-2.5">
          <p>
            I&apos;m a backend focused but full-stack developer with a poetic
            heart and a strategic mind. Someone who finds beauty in clean
            architecture, scalable microservices, and code that does its job so
            flawlessly, no one notices it&apos;s even there.
          </p>

          <p className="text-gray-50">
            I specialize in building the sturdy skeletons of modern applications
            such as Notification Management System, File Handling Mcroservices,
            and Content Management Backends that hum like well-tuned machines.
          </p>

          <p className="text-gray-50/30">
            When I&apos;m not orchestrating logic flows and designing robust
            APIs, you&apos;ll find me soaking in sad songs, stargazing with
            sci-fi classics, or leveling up in fantasy realms.
          </p>

          <p>
            My work is deeply intentional - I don&apos;t just write code, I
            craft systems with purpose.{" "}
            <i>
              I believe in the quiet power of infrastructure: invisible,
              essential, and always evolving.
            </i>
          </p>
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
          />
        </div>
      </div>

      <div className="lg:w-1/2 h-[600px] p-1 border-[1px] border-solid border-gray-50/10 rounded-lg">
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
