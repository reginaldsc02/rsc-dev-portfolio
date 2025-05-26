import {
  BiHomeSmile,
  BiLogoReact,
  BiSolidBriefcase,
  BiSolidPhone,
  BiSolidUserAccount,
} from "react-icons/bi";

export const navLinks = [
  {
    title: "Home",
    url: "hero",
    icon: <BiHomeSmile />,
  },

  {
    title: "Projects",
    url: "projects",
    icon: <BiSolidBriefcase />,
  },

  {
    title: "About",
    url: "about",
    icon: <BiSolidUserAccount />,
  },

  {
    title: "Skills",
    url: "skills",
    icon: <BiLogoReact />,
  },

  {
    title: "Contact",
    url: "contact",
    icon: <BiSolidPhone />,
  },
];
