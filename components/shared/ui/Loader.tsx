"use client";

import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

export const Loader = () => {
  const loadingMessages = [
    "Casting spells",
    "Waking the dragons",
    "Polishing pixels",
    "Loading glitter",
    "Feeding the hamsters",
    "Calming the chaos",
    "Untangling code",
    "Summoning unicorns",
    "Chasing bugs away",
    "Brewing some magic",
    "Powering up dreams",
    "Fetching good vibes",
    "Dusting off stars",
    "Winking at the moon",
    "Assembling awesomeness",
    "Stealing a moment",
    "Tickling the server",
    "Glamming it up",
    "Stirring sparkles",
    "Manifesting miracles",
  ];

  const [loadingMessage, setLoadingMessage] = useState("Please wait");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    const randomMessage = loadingMessages[randomIndex];

    setLoadingMessage(randomMessage);
  }, [loadingMessage]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center pointer-events-none bg-background">
      <div className="flex flex-col items-center justify-center gap-5">
        <BounceLoader color="var(--rsc-primary)" />
        <div className="text-sm capitalize">{loadingMessage}</div>
      </div>
    </div>
  );
};
