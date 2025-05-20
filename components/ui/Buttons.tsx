import { BiError } from "react-icons/bi";

export const PrimaryButton = ({
  buttonText,
  buttonIcon,
}: {
  buttonText: string;
  buttonIcon: React.ReactNode;
}) => {
  return (
    <button className="min-w-[200px] min-h-[60px] p-5 flex items-center justify-center gap-1.5 font-medium text-xl lowercase bg-primary rounded-full hover:bg-gray-50 hover:text-gray-950 transition-all duration-200 ease-linear cursor-pointer active:scale-95">
      <span className="animate-pulse">{buttonIcon || <BiError />}</span>
      {buttonText || "Button Text"}
    </button>
  );
};
