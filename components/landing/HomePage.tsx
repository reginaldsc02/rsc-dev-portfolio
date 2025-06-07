"use client";

import { useEffect, useState } from "react";
import { Container } from "../shared/ui/Container";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Featured } from "./sections/Featured";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Loader } from "../shared/ui/Loader";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <div className="-mt-16 md:-mt-10"></div>
      <Hero />
      <Featured />
      <About />
      <Skills />
      <Contact />
      <div className="-mb-10"></div>
    </Container>
  );
};
