import { BiError } from "react-icons/bi";
import { LabeledIcon } from "./LabeledIcon";
import { ButtonType } from "@/types/buttonType";
import { buttonStyle } from "@/styles/buttonStyle";

export const Button = ({
  icon,
  text,
  isPrimary = true,
  ...rest
}: ButtonType & React.ComponentProps<"button">) => {
  const buttonClass = buttonStyle.global.concat(
    isPrimary ? buttonStyle.primary : buttonStyle.secondary
  );

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
