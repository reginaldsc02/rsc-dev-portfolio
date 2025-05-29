import Link from "next/link";
import { LabeledIcon } from "./LabeledIcon";
import { BiError } from "react-icons/bi";
import { ButtonType } from "@/types/buttonType";
import { buttonStyle } from "@/styles/buttonStyle";

export const LinkButton = ({
  buttonIcon,
  buttonText,
  buttonHref,
  buttonIsPrimary = true,
  ...rest
}: ButtonType & React.ComponentProps<"a">) => {
  const buttonClass = buttonStyle.global.concat(
    buttonIsPrimary ? buttonStyle.primary : buttonStyle.secondary
  );

  return (
    <Link
      href={buttonHref || "/"}
      target="_blank"
      rel="noreferrer"
      className={buttonClass}
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
