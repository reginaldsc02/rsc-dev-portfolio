import { ButtonType } from "@/custom_types/ButtonType";
import { buttonStyle } from "@/styles/buttonStyle";

export const Button = ({
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
      {text || "Button Text"}
    </button>
  );
};
