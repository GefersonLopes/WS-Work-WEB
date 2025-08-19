import clsx from "clsx";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import Image from "../Img";

const Footer = ({
  logo,
  sections = [],
  socialLinks = [],
  className = "",
}: {
  logo?: React.ReactNode;
  sections?: {
    title?: string;
    links: { label: string; href: string }[];
  }[];
  socialLinks?: { href: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  return (
    <footer className={clsx("w-full bg-light text-dark py-8", className)}>
      <hr className="w-[90%] mx-auto mb-8 border-gray-400" />
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {logo && (
          <div
            className="mb-6 md:mb-0 flex items-center cursor-pointer"
            onClick={() => {
              window.location.href = "https://www.linkedin.com/in/algeferson/";
            }}
          >
            {typeof logo === "string" ? (
              <Image
                src={logo}
                alt="Logo"
                className=" w-16 h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 object-fit rounded-lg"
              />
            ) : (
              logo
            )}
            <div className="flex flex-col items-center">
              <h1 className="ml-4 font-bold text-xl">Geferson Lopes</h1>
              <h3 className="ml-4 font-medium text-lg">Desenvolvedor Web</h3>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 mb-6 md:mb-0 space-x-4">
          {sections.map((section) => (
            <div key={uuidv4()}>
              {section.title && (
                <h3 className="font-semibold mb-4">{section.title}</h3>
              )}
              <ul>
                {section.links.map((link) => (
                  <li key={uuidv4()} className="mb-2">
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {socialLinks.length > 0 && (
          <div className="flex space-x-1 items-center">
            {socialLinks.map((social) => (
              <a
                key={uuidv4()}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </div>
      <p className="text-center mt-20">© 2025 Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
