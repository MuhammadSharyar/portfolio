import Link from "next/link";
import React from "react";

const links = [
  { title: "Home", link: "#hero-section" },
  { title: "About", link: "#about-section" },
  { title: "Skills", link: "#skills-section" },
  { title: "Services", link: "#services-section" },
  { title: "Portfolio", link: "#portfolio-section" },
  { title: "Contact", link: "#contact-section" },
];

const Footer = () => {
  return (
    <footer className="flex justify-between items-center max-w-5xl w-full px-5 min-h-[30vh]">
      <div className="w-full flex justify-center items-center">
        <ul className="flex gap-2 text-sm text-gray-700">
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
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
