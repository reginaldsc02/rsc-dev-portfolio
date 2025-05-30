import { BiError } from "react-icons/bi";

export const LabeledIcon = ({
  icon,
  label,
  animateIcon = false,
  isLargeIcon = false,
}: {
  icon: React.ReactNode;
  label: string;
  animateIcon?: boolean;
  isLargeIcon?: boolean;
}) => {
  const iconClass = `max-[375px]:hidden ${
    animateIcon ? "animate-pulse" : "animate-none"
  } ${isLargeIcon ? "text-2xl" : "text-inherit"}`;

  return (
    <div className="flex items-center gap-spacing-default-6px">
      <div className={iconClass}>{icon || <BiError />}</div>
      <div>{label || "Icon Label"}</div>
    </div>
  );
};
