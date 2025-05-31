import { About } from "../section/About";
import { Contact } from "../section/Contact";
import { Hero } from "../section/Hero";
import { Projects } from "../section/Projects";
import { Skills } from "../section/Skills";
import { MainContainer } from "../ui/MainContainer";

export const MainLayout = () => {
  return (
    <div className="min-w-full min-h-screen grid grid-rows-[auto_1fr_auto] opacity-0 animate-fade-in">
      <MainContainer>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </MainContainer>
    </div>
  );
};
