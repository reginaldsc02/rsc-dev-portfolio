import { TextType } from "../lib/types/TextType";
import { Paragraph } from "./Paragraph";

export const NotFound = ({ text }: TextType) => {
  return (
    <div className="p-5 font-bold border border-error rounded-lg">
      <Paragraph text={text} />
    </div>
  );
};
