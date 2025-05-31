import { Dispatch, SetStateAction } from "react";

export type PrimaryNavigationType = {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
};
