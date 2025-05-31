import Link from "next/link";
import { LabeledIcon } from "./LabeledIcon";
import { BiError } from "react-icons/bi";
import { ButtonType } from "@/custom_types/ButtonType";
import { buttonStyle } from "@/styles/buttonStyle";

export const LinkButton = ({
  icon,
  text,
  href,
  isPill = false,
  isPrimary = true,
  ...rest
}: ButtonType & { href: string } & React.ComponentProps<"a">) => {
  const buttonIsMain = buttonStyle.global.main.concat(
    isPrimary ? buttonStyle.primary : buttonStyle.secondary
  );

  const buttonIsPill = buttonStyle.global.pill.concat(
    isPrimary ? buttonStyle.primary : buttonStyle.secondary
  );

  const buttonClass = isPill ? buttonIsPill : buttonIsMain;
  return (
    <Link
      href={href || "/"}
      target="_blank"
      rel="noreferrer"
      className={buttonClass}
      {...rest}
    >
      <LabeledIcon
        icon={icon || <BiError />}
        label={text || "Button Text"}
        animateIcon
      />
    </Link>
  );
};
