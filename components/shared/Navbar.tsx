"use client";

import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeSwitcher from "../ThemeSwitch";

const links = [
  { title: "Home", link: "#hero-section" },
  { title: "About", link: "#about-section" },
  { title: "Skills", link: "#skills-section" },
  { title: "Services", link: "#services-section" },
  { title: "Portfolio", link: "#portfolio-section" },
  { title: "Contact", link: "#contact-section" },
];

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  return (
    <nav className="w-full flex justify-center border-b sticky top-0 bg-background">
      <div className="flex justify-between items-center h-[10vh] px-5 max-w-5xl w-full">
        <h2>Muhammad Sharyar</h2>
        <Sheet>
          <SheetTrigger asChild>
            <CiMenuBurger size={25} className="md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className="mt-10">
              {links.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href={link.link}
                    className="text-lg active:text-primary transition-all"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
        <ul className="hidden md:flex text-sm items-center">
          {links.map((link, index) => (
            <li key={index} className="ml-3">
              <Link
                href={link.link}
                className="hover:text-primary transition-all"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li key={7} className="ml-4">
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
