import { Dispatch, SetStateAction } from "react";
import { NavLinkType } from "./NavLinkType";

export type NavigationType = {
  navLinks: Array<NavLinkType>;
  navDrawerOpen: boolean;
  setNavDrawerOpen: Dispatch<SetStateAction<boolean>>;
};
