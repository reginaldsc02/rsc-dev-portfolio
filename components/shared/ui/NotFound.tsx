import { Paragraph } from "./Paragraph";

export const NotFound = ({ text }: { text: string }) => {
  return (
    <div className="p-5 font-bold border border-error rounded-lg">
      <Paragraph text={text} />
    </div>
  );
};
