import { BiError } from "react-icons/bi";

type HamburgerButtonProps = {
  icon: React.ReactNode;
} & React.ComponentProps<"button">;

export const HamburgerButton = ({ icon, ...rest }: HamburgerButtonProps) => {
  return (
    <button
      aria-label="Hamburger Button"
      className="lg:hidden p-spacing-default-10px cursor-pointer rounded-full text-default-opacity-50 hover:text-default transition-colors"
      {...rest}
    >
      <div className="text-2xl">{icon || <BiError />}</div>
    </button>
  );
};
