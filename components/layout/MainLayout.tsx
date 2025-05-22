"use client";

import { useEffect, useRef, useState } from "react";
import { About } from "../section/About";
import { Contact } from "../section/Contact";
import { Hero } from "../section/Hero";
import { Projects } from "../section/Projects";
import { Skills } from "../section/Skills";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavigationScrolled } from "./NavigationScrolled";

export const MainLayout = () => {
  const [active, setActive] = useState("");
  const [isIntersecting, setIsIntersecting] = useState(false);

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
  }, []);

  return (
    <div className="min-w-full min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <div
        ref={navigationScrolledHelperRef}
        id="navigation-scrolled-helper"
        className="w-full h-16 absolute top-0 left-0 pointer-events-none -z-50"
      ></div>

      <Header
        active={active}
        setActive={setActive}
        logoName="reginaldsc02"
        gitHubAccountLink="https://github.com/reginaldsc02"
        websiteVersion="0.1.0"
      />

      <NavigationScrolled
        isIntersecting={isIntersecting}
        active={active}
        setActive={setActive}
        gitHubAccountLink="https://github.com/reginaldsc02"
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

      <Footer setActive={setActive} />
    </div>
  );
};
