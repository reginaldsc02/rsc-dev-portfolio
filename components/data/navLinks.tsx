import {
  FaBriefcase,
  FaHome,
  FaPhoneAlt,
  FaReact,
  FaUser,
} from "react-icons/fa";

export const navLinks = [
  {
    title: "Home",
    url: "#hero",
    icon: <FaHome />,
  },

  {
    title: "Projects",
    url: "#projects",
    icon: <FaBriefcase />,
  },

  {
    title: "About",
    url: "#about",
    icon: <FaUser />,
  },

  {
    title: "Skills",
    url: "#skills",
    icon: <FaReact />,
  },

  {
    title: "Contact",
    url: "#contact",
    icon: <FaPhoneAlt />,
  },
];
