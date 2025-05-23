import Link from "next/link";
import { BiError } from "react-icons/bi";

type LinkButtonProps = {
  buttonIsLink: true;
  buttonHref: string;
  buttonOnClickFunction?: never;
} & React.ComponentProps<"a">;

type NormalButtonProps = {
  buttonIsLink?: false;
  buttonHref?: never;
  buttonOnClickFunction?: () => void;
};

type ButtonProps = {
  buttonIcon: React.ReactNode;
  buttonText: string;
  buttonIsPrimary?: boolean;
} & (LinkButtonProps | NormalButtonProps);

export const Button = ({
  buttonIcon = <BiError />,
  buttonText = "Button Text",

  buttonIsLink,
  buttonHref = "/",

  buttonIsPrimary = true,
  buttonOnClickFunction,
  ...rest
}: ButtonProps) => {
  const safeHref = buttonHref ?? "/";

  const primaryButtonStyle =
    "text-gray-50 bg-primary hover:bg-gray-50 hover:text-gray-950 border-transparent";

  const secondaryButtonStyle =
    "text-gray-50/50 bg-transparent hover:border-gray-50 hover:text-gray-50 border-gray-50/50";

  const buttonClass = `p-5 flex items-center justify-center gap-1.5 font-medium text-xl lowercase border-2 border-solid rounded-full transition-all duration-200 ease-linear cursor-pointer active:scale-95 ${
    buttonIsPrimary ? primaryButtonStyle : secondaryButtonStyle
  }`;

  const buttonIconClass = "max-[375px]:hidden animate-pulse";

  return buttonIsLink ? (
    <Link
      href={safeHref}
      target="_blank"
      rel="noreferrer"
      className={`w-fit ${buttonClass}`}
      {...rest}
    >
      <div className={buttonIconClass}>{buttonIcon}</div>
      {buttonText}
    </Link>
  ) : (
    <button
      type="button"
      onClick={buttonOnClickFunction}
      className={buttonClass}
    >
      <div className={buttonIconClass}>{buttonIcon}</div>
      {buttonText}
    </button>
  );
};
