import { TextType } from "../lib/types/TextType";

export const DisplayText = ({ text }: TextType) => {
  return (
    <div className="max-w-[70rem] text-3xl md:text-5xl text-center">{text}</div>
  );
};
