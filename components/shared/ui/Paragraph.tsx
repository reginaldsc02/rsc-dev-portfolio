import { TextType } from "../lib/types/TextType";

export const Paragraph = ({ text }: TextType) => {
  return <p className="max-w-[60rem] text-center">{text}</p>;
};
