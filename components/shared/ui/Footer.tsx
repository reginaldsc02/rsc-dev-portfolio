"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="min-h-16 p-6 flex flex-col items-center gap-2.5 text-center border-t border-gray-950/10 dark:border-gray-50/10 bg-background">
      <div>
        &copy;{" "}
        <Link
          href={"https://github.com/reginaldsc02"}
          target="_blank"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          Reginald Chand
        </Link>{" "}
        | {new Date().getFullYear()}. All rights reserved
      </div>

      <div className="text-gray-950/70 dark:text-gray-50/70">
        Designed & Developed with ❤️ | Powered by Next.js, TypeScript &
        TailwindCSS
      </div>
    </footer>
  );
};
