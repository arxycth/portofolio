import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconUser,
  IconDeviceLaptop,
  IconAddressBook,
} from "@tabler/icons-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Project",
      icon: (
        <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#project",
    },
    {
      title: "Contact",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/dimas-adiluhur/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/arxycth",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[6rem] w-full fixed bottom-0 z-50">
      <FloatingDock
   //     desktopClassName="w-full" // only for demo, remove for production
        mobileClassName="h-[1rem] fixed right-[1rem]" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}


