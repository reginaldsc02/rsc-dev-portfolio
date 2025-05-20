import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { PrimaryButton } from "../ui/Buttons";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
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
    <section
      id="contact"
      className="mt-16 p-5 border-t-[1px] border-solid border-t-gray-50/10"
    >
      <div className="p-5 border-[1px] border-solid border-gray-50/10 rounded-lg">
        <div>
          <div className="flex items-center gap-1.5 capitalize text-4xl font-bold">
            <span>
              <FaPhoneAlt />
            </span>

            <span className="font-medium text-balance">
              The Connection Code
            </span>
          </div>

          <p className="text-gray-50/50">
            Whispers of Code, Calls of Collaboration
          </p>
        </div>

        <hr className="my-5" />

        <p className="tracking-wide">
          Whether your thoughts are tangled in code or dancing on the edge of a
          dream, my inbox is a soft place to land - a haven for ideas waiting to
          bloom. Send me your sparks, your half-built hopes, your backend blues
          or frontend fire - I’ll meet you there, with fingers poised like a
          pianist at dusk, ready to build, to solve, to create something that
          hums with meaning. This isn’t just contact - it’s communion. So
          whisper into the wires, and I’ll answer with heart. Let’s not just
          connect. Let’s compose.
        </p>

        <div className="mt-5">
          <p className="mb-5 p-5 flex items-center gap-2 text-2xl border-y-[1px] border-solid border-y-gray-50/10">
            <span>
              <FaMailBulk />
            </span>
            <span>
              Email Me:{" "}
              <Link
                href={"mailto: reginaldsc02@gmail.com"}
                target="_blank"
                rel="noreferrer"
                className="underline font-bold text-gray-50/50 inline-block transition-all duration-200 ease-linear hover:text-gray-50 active:scale-95"
              >
                reginaldsc02@gmail.com
              </Link>
            </span>
          </p>

          <div
            onClick={copyEmailToClipboard}
            aria-label="Copy email to clipboard"
          >
            <PrimaryButton
              buttonText={"Let’s Build Something"}
              buttonIcon={<FaMailBulk />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
