import { Button } from "../ui/Button";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { Paragraph } from "../ui/Paragraph";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionParagraph } from "../ui/SectionParagraph";
import { PaddingOuter } from "../ui/PaddingOuter";
import { PaddingInner } from "../ui/PaddingInner";
import { BorderControl } from "../ui/BorderControl";
import { LabeledIcon } from "../ui/LabeledIcon";
import { BiSolidEnvelope, BiSolidPhone } from "react-icons/bi";

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
    <section id="contact" className="mt-16">
      <BorderControl borderTop>
        <PaddingOuter>
          <BorderControl borderFull isRounded>
            <PaddingInner>
              <SectionHeader
                icon={<BiSolidPhone />}
                title="The Connection Code"
                subtitle="Whispers of Code, Calls of Collaboration"
              />

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
                <div className="mb-5">
                  <BorderControl borderY>
                    <PaddingInner>
                      <div className="sm:text-2xl">
                        <Link
                          href={`mailto: ${email}`}
                          rel="noreferrer"
                          className="text-gray-50/50 inline-block transition-all duration-200 ease-linear hover:text-gray-50 rounded-md"
                        >
                          <LabeledIcon
                            icon={<BiSolidEnvelope />}
                            label={email}
                          />
                        </Link>
                      </div>
                    </PaddingInner>
                  </BorderControl>
                </div>

                <Button
                  icon={<BiSolidEnvelope />}
                  text={"Let's Build Something"}
                  onClick={copyEmailToClipboard}
                />
              </div>
            </PaddingInner>
          </BorderControl>
        </PaddingOuter>
      </BorderControl>
    </section>
  );
};
