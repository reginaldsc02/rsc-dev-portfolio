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
    <div className="flex items-center gap-1.5">
      <div className={iconClass}>{icon}</div>
      <div>{label}</div>
    </div>
  );
};
