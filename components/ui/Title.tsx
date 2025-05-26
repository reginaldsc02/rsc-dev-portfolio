import { BiError } from "react-icons/bi";
import { LabeledIcon } from "./LabeledIcon";

export const Title = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <h2 className="font-medium text-balance capitalize text-4xl">
      <LabeledIcon icon={icon || <BiError />} label={title || "Title"} />
    </h2>
  );
};
