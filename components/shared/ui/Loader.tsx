"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

export const Loader = () => {
  const pathname = usePathname();

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
    let i = 0;

    const intervalId = setInterval(() => {
      if (i === loadingMessages.length) i = 0;
      const message = loadingMessages[i];
      setLoadingMessage(message);
      i++;
    }, 2000);

    return () => clearInterval(intervalId);
  }, [pathname]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center pointer-events-none bg-background">
      <div className="flex flex-col items-center justify-center gap-5">
        <BounceLoader color="var(--rsc-primary)" />
        <div className="text-sm capitalize">{loadingMessage}</div>
      </div>
    </div>
  );
};
