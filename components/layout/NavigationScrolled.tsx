import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Navigation } from "./Navigation";

export const NavigationScrolled = ({
  active,
  setActive,
  gitHubAccountLink,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  gitHubAccountLink: string;
}) => {
  const navigationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const threshold = 50;

    const handleScroll = () => {
      if (!navigationContainer.current) return;

      navigationContainer.current.style.visibility =
        window.scrollY > threshold ? "visible" : "hidden";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navigationContainer}
      className="w-fit mx-auto p-5 invisible fixed bottom-5 left-0 right-0 border-2 border-solid border-gray-50/10 bg-gray-950 rounded-lg z-50"
    >
      <Navigation
        tag="div"
        ariaLabel="Secondary Navigation"
        active={active}
        setActive={setActive}
        gitHubAccountLink={gitHubAccountLink}
      />
    </div>
  );
};
