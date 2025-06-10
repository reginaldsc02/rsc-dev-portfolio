import { TextType } from "../lib/types/TextType";

export const Subheading = ({ text }: TextType) => {
  return <h2 className="text-xl font-semibold text-center">{text}</h2>;
};
