import { useState } from "react";
import { About } from "../section/About";
import { Contact } from "../section/Contact";
import { Hero } from "../section/Hero";
import { Projects } from "../section/Projects";
import { Skills } from "../section/Skills";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavigationScrolled } from "./NavigationScrolled";
import { NavigationOnScrolledIntersectionObserver } from "../ui/NavigationOnScrolledIntersectionObserver";

export const MainLayout = () => {
  const [active, setActive] = useState("");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  const handleNavigationMenuOpen = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  };

  return (
    <div className="min-w-full min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <NavigationOnScrolledIntersectionObserver
        setIsIntersecting={setIsIntersecting}
      />

      <Header
        active={active}
        setActive={setActive}
        isNavigationMenuOpen={isNavigationMenuOpen}
        handleNavigationMenuOpen={handleNavigationMenuOpen}
        logoName="reginaldsc02"
        gitHubAccountLink="https://github.com/reginaldsc02"
        websiteVersion="0.1.0"
      />

      <NavigationScrolled
        isIntersecting={isIntersecting}
        active={active}
        setActive={setActive}
        isNavigationMenuOpen={isNavigationMenuOpen}
        handleNavigationMenuOpen={handleNavigationMenuOpen}
        gitHubAccountLink="https://github.com/reginaldsc02"
      />

      <main className="w-full 2xl:max-w-[1600px] mx-auto">
        <div className="w-[calc(100%-1rem)] md:w-[calc(100%-5rem)] mx-auto min-h-screen border-x-default">
          <Hero setActive={setActive} />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer setActive={setActive} />
    </div>
  );
};
