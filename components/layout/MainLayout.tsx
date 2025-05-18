import { About } from "../section/About";
import { Contact } from "../section/Contact";
import { Hero } from "../section/Hero";
import { Projects } from "../section/Projects";
import { Skills } from "../section/Skills";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
