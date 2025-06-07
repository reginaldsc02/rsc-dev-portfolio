"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Section } from "@/components/shared/ui/Section";
import { Heading } from "@/components/shared/ui/Heading";
import { Paragraph } from "@/components/shared/ui/Paragraph";
import { Button } from "@/components/shared/ui/Button";

export const Contact = () => {
  const [, setCopied] = useState(false);
  const email = "reginaldsc02@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy email");
      console.error(error);
    }
  };

  return (
    <Section>
      <Heading text="Start a Conversation" />
      <Paragraph text="Whether you're looking to collaborate, have a question, or just want to say hi, I'd love to hear from you. I'm always open to new opportunities, meaningful conversations, or simply connecting with like minded creatives and devs. Don't be shy, drop me a message and let's build something beautiful together." />
      <Button text="Let's build something" onClick={copyEmailToClipboard} />
    </Section>
  );
};
