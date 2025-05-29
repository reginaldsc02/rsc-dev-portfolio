import { BiError } from "react-icons/bi";
import { LabeledIcon } from "./LabeledIcon";
import { ButtonType } from "@/types/buttonType";
import { buttonStyle } from "@/styles/buttonStyle";

export const Button = ({
  icon,
  text,
  isPill = false,
  isPrimary = true,
  ...rest
}: ButtonType & React.ComponentProps<"button">) => {
  const buttonIsMain = buttonStyle.global.main.concat(
    isPrimary ? buttonStyle.primary : buttonStyle.secondary
  );

  const buttonIsPill = buttonStyle.global.pill.concat(
    isPrimary ? buttonStyle.primary : buttonStyle.secondary
  );

  const buttonClass = isPill ? buttonIsPill : buttonIsMain;

  return (
    <button type="button" className={buttonClass} {...rest}>
      <LabeledIcon
        icon={icon || <BiError />}
        label={text || "Button Text"}
        animateIcon
      />
    </button>
  );
};
