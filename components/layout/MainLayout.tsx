"use client";

import { useState } from "react";
import { About } from "../section/About";
import { Contact } from "../section/Contact";
import { Hero } from "../section/Hero";
import { Projects } from "../section/Projects";
import { Skills } from "../section/Skills";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = () => {
  const [active, setActive] = useState("");

  return (
    <div className="min-w-full min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header
        active={active}
        setActive={setActive}
        logoName="reginaldsc02"
        gitHubAccountLink="https://github.com/reginaldsc02"
        websiteVersion="0.1.0"
      />

      <main className="w-full 2xl:max-w-7xl mx-auto">
        <div className="w-[calc(100%-5rem)] mx-auto min-h-screen border-x-[1px] border-solid border-x-gray-50/10">
          <Hero setActive={setActive} />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};
