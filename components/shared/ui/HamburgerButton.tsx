import { BiWindowClose, BiWindowOpen } from "react-icons/bi";

export const HamburgerButton = ({
  navDrawerOpen,
  handleNavDrawerOpen,
}: {
  navDrawerOpen: boolean;
  handleNavDrawerOpen: () => void;
}) => {
  return (
    <button
      type="button"
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
