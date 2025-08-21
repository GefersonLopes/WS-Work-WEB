import clsx from "clsx";
import { Menu, X } from "lucide-react";

import { useRouteSync } from "../../../hooks/useRouteSync";
import { useNav } from "../../../store/useNav";
import { Link } from "../Link";

const Header = () => {
  useRouteSync();

  const links = [
    { label: "Início", href: "/" },
    { label: "Modelos", href: "/cars" },
    { label: "Marcas", href: "/brands" },
    { label: "Anunciar", href: "/announce" },
  ];

  const activePath = useNav((s) => s.activePath);
  const { mobileOpen, closeMobile, toggleMobile } = useNav();

  return (
    <header className="w-full relative mb-10">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-2 py-1 rounded-md text-sm font-medium"
      >
        Pular para o conteúdo
      </a>

      <nav
        className="w-full bg-white py-4"
        aria-label="Menu de navegação principal"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6">
          <button
            onClick={toggleMobile}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
          >
            {mobileOpen ? (
              <X color="black" size={24} />
            ) : (
              <Menu color="black" size={24} />
            )}
          </button>

          <h1 className="text-2xl font-bold text-gray-900">
            <a
              href="/"
              className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-amber-700"
            >
              WS Work
              <span className="text-amber-700 ml-1">Geferson</span>
            </a>
          </h1>

          <ul className="hidden md:flex items-center space-x-1">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className={clsx(
                    "transition-colors focus:outline-none",
                    "rounded-full px-4 py-1 text-sm font-medium",
                    "!no-underline text-primary",
                    activePath === href
                      ? "text-white bg-primary "
                      : "hover:text-white hover:bg-tertiary",
                  )}
                  aria-current={activePath === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="mobile-menu"
          className={`
            fixed inset-0 z-50 bg-white md:hidden
            transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out
          `}
          aria-hidden={!mobileOpen}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={closeMobile}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
              aria-label="Fechar menu"
            >
              <X size={24} color="black" />
            </button>
          </div>
          <ul className="flex flex-col space-y-2 px-6 pt-4 pb-2 text-gray-600">
            {links.map(({ label, href }) => (
              <li key={label} className="w-full text-center">
                <Link
                  to={href}
                  className={clsx(
                    "transition-colors focus:outline-none",
                    "rounded-full px-4 py-1 text-sm font-medium",
                    "!no-underline text-primary w-full h-8 flex items-center justify-center",
                    activePath === href
                      ? "text-white bg-primary "
                      : "hover:text-white hover:bg-tertiary",
                  )}
                  aria-current={activePath === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
