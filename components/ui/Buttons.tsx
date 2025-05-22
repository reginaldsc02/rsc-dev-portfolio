// ! NO NEED TO - Create seperate function for styling. #dontoverengineer :)

import { BiError } from "react-icons/bi";

export const Buttons = ({
  buttonText,
  buttonIcon,
  isPrimary = true,
}: {
  buttonText: string;
  buttonIcon: React.ReactNode;
  isPrimary?: boolean;
}) => {
  return (
    <button
      className={`min-w-[200px] min-h-[60px] p-5 flex items-center justify-center gap-1.5 font-medium text-xl lowercase border-2 border-solid ${
        isPrimary ? "text-gray-50" : "text-gray-50/50"
      } ${isPrimary ? "bg-primary" : "bg-transparent"} rounded-full ${
        isPrimary
          ? "hover:bg-gray-50 hover:text-gray-950"
          : "hover:border-gray-50 hover:text-gray-50"
      } ${
        isPrimary ? "border-transparent" : "border-gray-50/50"
      } transition-all duration-200 ease-linear cursor-pointer active:scale-95`}
    >
      <span className="max-[375px]:hidden animate-pulse">
        {buttonIcon || <BiError />}
      </span>
      {buttonText || "Button Text"}
    </button>
  );
};
