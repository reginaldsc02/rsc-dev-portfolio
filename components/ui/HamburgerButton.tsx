import { BiError } from "react-icons/bi";

type HamburgerButtonProps = {
  buttonIcon: React.ReactNode;
} & React.ComponentProps<"button">;

export const HamburgerButton = ({
  buttonIcon = <BiError />,
  ...rest
}: HamburgerButtonProps) => {
  return (
    <button
      aria-label="Hamburger Button"
      className="lg:hidden p-2.5 cursor-pointer rounded-full hover:text-primary active:scale-95 transition-colors duration-200 ease-linear"
      {...rest}
    >
      <div className="text-2xl">{buttonIcon}</div>
    </button>
  );
};
