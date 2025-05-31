import { BiError } from "react-icons/bi";

export const LabeledIcon = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-spacing-default-6px">
      <div className="max-[375px]:hidden">{icon || <BiError />}</div>
      <div>{label || "Icon Label"}</div>
    </div>
  );
};
