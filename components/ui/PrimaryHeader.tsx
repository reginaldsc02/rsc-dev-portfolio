"use client";

import { useState } from "react";
import { Header } from "./Header";
import { PrimaryNavigationDesktop } from "./PrimaryNavigationDesktop";
import { SocialMediaNavigation } from "./SocialMediaNavigation";
import { PrimaryNavigationMobile } from "./PrimaryNavigationMobile";
import { HamburgerButton } from "./HamburgerButton";
import { BiExpandHorizontal } from "react-icons/bi";

export const PrimaryHeader = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [primaryDrawer, setPrimaryDrawer] = useState(false);

  const handlePrimaryDrawer = () => setPrimaryDrawer(!primaryDrawer);

  return (
    <Header>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-spacing-default-20px">
          <div className="px-2 py-1 text-xs bg-primary rounded-full">
            <div className="font-bold">v0.1.0</div>
          </div>

          <PrimaryNavigationDesktop
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />

          <PrimaryNavigationMobile
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            primaryDrawer={primaryDrawer}
            handlePrimaryDrawer={handlePrimaryDrawer}
          />
        </div>

        <HamburgerButton
          icon={<BiExpandHorizontal />}
          onClick={handlePrimaryDrawer}
        />

        <div className="hidden lg:flex items-center gap-spacing-default-20px">
          <SocialMediaNavigation />
        </div>
      </div>
    </Header>
  );
};
