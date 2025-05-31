import Link from "next/link";
import { ButtonType } from "@/custom_types/ButtonType";
import { buttonStyle } from "@/styles/buttonStyle";

export const LinkButton = ({
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
      {text || "Button Text"}
    </Link>
  );
};
