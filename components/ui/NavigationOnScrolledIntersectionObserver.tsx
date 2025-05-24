import { useRef, useEffect, Dispatch, SetStateAction } from "react";

export const NavigationOnScrolledIntersectionObserver = ({
  setIsIntersecting,
}: {
  setIsIntersecting: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigationScrolledHelperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },

      {
        root: null,
        threshold: 0.01,
      }
    );

    if (navigationScrolledHelperRef.current) {
      observer.observe(navigationScrolledHelperRef.current);
    }
  }, [setIsIntersecting]);
  return (
    <div
      ref={navigationScrolledHelperRef}
      id="navigation-scrolled-helper"
      className="w-full h-16 absolute top-0 left-0 pointer-events-none bg-transparent -z-30"
    ></div>
  );
};
