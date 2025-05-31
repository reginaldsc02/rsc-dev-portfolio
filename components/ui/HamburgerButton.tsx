import { BiError } from "react-icons/bi";

type HamburgerButtonProps = {
  icon: React.ReactNode;
} & React.ComponentProps<"button">;

export const HamburgerButton = ({ icon, ...rest }: HamburgerButtonProps) => {
  return (
    <button
      aria-label="Hamburger Button"
      className="lg:hidden p-spacing-default-10px block border-full-default rounded-full cursor-pointer hover:border-primary! transition-all"
      {...rest}
    >
      {icon || <BiError />}
    </button>
  );
};
