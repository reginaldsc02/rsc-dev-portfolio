"use client";

import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const ClerkProfileCard = () => {
  const pathname = usePathname();
  if (!pathname.startsWith("/admin")) return null;

  return (
    <div
      className={`mt-8 ml-5 ${
        pathname.startsWith("/admin") ? "md:hidden" : "hidden"
      }`}
    >
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
