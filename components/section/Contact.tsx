import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { Paragraph } from "../ui/Paragraph";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionParagraph } from "../ui/SectionParagraph";

export const Contact = () => {
  const [, setCopied] = useState(false);
  const email = "reginaldsc02@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);
      toast.success("Email copied to clipboard 🥰");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy email 😓");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="mt-16 p-2.5 border-t-default">
      <div className="p-5 border-full-default rounded-lg">
        <SectionHeader
          icon={<FaPhoneAlt />}
          title="The Connection Code"
          subtitle="Whispers of Code, Calls of Collaboration"
        />

        <hr className="my-5" />

        <SectionParagraph>
          <Paragraph
            paragraph="Whether your thoughts are tangled in code or dancing on the edge of a
          dream, my inbox is a soft place to land - a haven for ideas waiting to
          bloom. Send me your sparks, your half-built hopes, your backend blues
          or frontend fire - I'll meet you there, with fingers poised like
          a pianist at dusk, ready to build, to solve, to create something that
          hums with meaning. This isn't just contact - it's communion.
          So whisper into the wires, and I'll answer with heart. Let's
          not just connect. Let's compose."
          />
        </SectionParagraph>

        <div className="mt-5">
          <div className="mb-5 p-5 flex items-center gap-2 sm:text-2xl border-y-default">
            <FaMailBulk className="hidden sm:block" />

            <div>
              Email Me:{" "}
              <Link
                href={"mailto: reginaldsc02@gmail.com"}
                target="_blank"
                rel="noreferrer"
                className="underline font-bold text-gray-50/50 inline-block transition-all duration-200 ease-linear hover:text-gray-50 rounded-md"
              >
                reginaldsc02@gmail.com
              </Link>
            </div>
          </div>

          <Button
            buttonIcon={<FaMailBulk />}
            buttonText={"Let's Build Something"}
            onClick={copyEmailToClipboard}
          />
        </div>
      </div>
    </section>
  );
};
