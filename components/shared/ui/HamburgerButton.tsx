import { BiWindowClose, BiWindowOpen } from "react-icons/bi";

type HamburgerButtonType = {
  navDrawerOpen: boolean;
  handleNavDrawerOpen: () => void;
};

export const HamburgerButton = ({
  navDrawerOpen,
  handleNavDrawerOpen,
}: HamburgerButtonType) => {
  return (
    <button
      type="button"
      aria-expanded={navDrawerOpen ? true : false}
      aria-label={
        navDrawerOpen ? "Close navigation menu" : "Open navigation menu"
      }
      onClick={handleNavDrawerOpen}
      className="md:hidden cursor-pointer hover:text-primary transition-colors"
    >
      {navDrawerOpen ? <BiWindowClose /> : <BiWindowOpen />}
    </button>
  );
};
