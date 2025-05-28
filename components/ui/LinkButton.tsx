import Link from "next/link";
import { LabeledIcon } from "./LabeledIcon";
import { BiError } from "react-icons/bi";

type LinkButtonProps = {
  buttonIcon: React.ReactNode;
  buttonText: string;
  buttonHref: string;
  buttonIsPrimary?: boolean;
} & React.ComponentProps<"a">;

export const LinkButton = ({
  buttonIcon,
  buttonText,
  buttonHref,
  buttonIsPrimary = true,
  ...rest
}: LinkButtonProps) => {
  const primaryButtonStyle =
    "text-gray-50 bg-primary hover:bg-gray-50 hover:text-gray-950 border-transparent";

  const secondaryButtonStyle =
    "text-gray-50/50 bg-transparent hover:border-gray-50 hover:text-gray-50 border-gray-50/50";

  const buttonClass = `p-5 text-xl lowercase border-2 border-solid rounded-full transition-all duration-200 ease-linear cursor-pointer disabled:pointer-events-none disabled:opacity-25 ${
    buttonIsPrimary ? primaryButtonStyle : secondaryButtonStyle
  }`;

  return (
    <Link
      href={buttonHref || "/"}
      target="_blank"
      rel="noreferrer"
      className={`w-fit ${buttonClass}`}
      {...rest}
    >
      <LabeledIcon
        icon={buttonIcon || <BiError />}
        label={buttonText || "Button Text"}
        animateIcon
      />
    </Link>
  );
};
