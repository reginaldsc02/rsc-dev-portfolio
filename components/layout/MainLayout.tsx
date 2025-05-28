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
import { MainContainer } from "../ui/MainContainer";

export const MainLayout = () => {
  const [active, setActive] = useState("");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  const handleNavigationMenuOpen = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  };

  return (
    <div className="min-w-full min-h-screen grid grid-rows-[auto_1fr_auto] opacity-0 animate-fade-in">
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

      <MainContainer>
        <Hero setActive={setActive} />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </MainContainer>

      <Footer setActive={setActive} />
    </div>
  );
};
