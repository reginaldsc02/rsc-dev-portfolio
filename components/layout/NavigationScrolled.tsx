import { Dispatch, SetStateAction } from "react";
import { Navigation } from "./Navigation";

export const NavigationScrolled = ({
  isIntersecting,
  active,
  setActive,
  gitHubAccountLink,
}: {
  isIntersecting: boolean;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  gitHubAccountLink: string;
}) => {
  return (
    <div
      className={`w-fit mx-auto p-5 ${
        isIntersecting
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed bottom-5 left-0 right-0 border-2 border-solid border-gray-50/10 bg-gray-950 rounded-lg z-50 transition-opacity duration-200 ease-linear`}
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
