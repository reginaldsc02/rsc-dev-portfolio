import { BiError } from "react-icons/bi";
import { LabeledIcon } from "./LabeledIcon";

type ButtonProps = {
  buttonIcon: React.ReactNode;
  buttonText: string;
  buttonIsPrimary?: boolean;
} & React.ComponentProps<"button">;

export const Button = ({
  buttonIcon,
  buttonText,
  buttonIsPrimary = true,
  ...rest
}: ButtonProps) => {
  const primaryButtonStyle =
    "text-gray-50 bg-primary hover:bg-gray-50 hover:text-gray-950 border-transparent";

  const secondaryButtonStyle =
    "text-gray-50/50 bg-transparent hover:border-gray-50 hover:text-gray-50 border-gray-50/50";

  const buttonClass = `p-5 text-xl lowercase border-2 border-solid rounded-full transition-all duration-200 ease-linear cursor-pointer ${
    buttonIsPrimary ? primaryButtonStyle : secondaryButtonStyle
  }`;

  return (
    <button type="button" className={`w-fit ${buttonClass}`} {...rest}>
      <LabeledIcon
        icon={buttonIcon || <BiError />}
        label={buttonText || "Button Text"}
        animateIcon
      />
    </button>
  );
};
