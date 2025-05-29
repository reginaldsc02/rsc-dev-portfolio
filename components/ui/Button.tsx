import { BiError } from "react-icons/bi";
import { LabeledIcon } from "./LabeledIcon";
import { ButtonType } from "@/types/buttonType";
import { buttonStyle } from "@/styles/buttonStyle";

export const Button = ({
  buttonIcon,
  buttonText,
  buttonIsPrimary = true,
  ...rest
}: ButtonType & React.ComponentProps<"button">) => {
  const buttonClass = buttonStyle.global.concat(
    buttonIsPrimary ? buttonStyle.primary : buttonStyle.secondary
  );

  return (
    <button type="button" className={buttonClass} {...rest}>
      <LabeledIcon
        icon={buttonIcon || <BiError />}
        label={buttonText || "Button Text"}
        animateIcon
      />
    </button>
  );
};
