"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-200 ${
        scrolled
          ? "border-line bg-paper/90 shadow-[0_1px_0_rgba(229,229,224,0.7)] backdrop-blur-md"
          : "border-line bg-paper"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="section-wrap flex min-h-[4.25rem] items-center justify-between gap-4"
      >
        <Link
          href="#home"
          className="text-sm font-bold tracking-[0.14em] text-ink transition-colors hover:text-accent-hover sm:text-base"
          onClick={closeMenu}
        >
          Rojina Chhetri<span className="text-accent">.</span>
        </Link>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-sm border border-line text-ink transition-colors hover:border-accent/40 hover:text-accent-hover md:hidden"
          aria-expanded={isOpen}
          aria-controls="primary-links"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>

        <div
          id="primary-links"
          className={`absolute left-0 right-0 top-full overflow-hidden border-b border-line bg-paper/98 backdrop-blur-md transition-all duration-200 ease-out md:static md:flex md:max-h-none md:items-center md:gap-7 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:backdrop-blur-none ${
            isOpen
              ? "max-h-[28rem] opacity-100"
              : "max-h-0 border-transparent opacity-0 md:max-h-none md:border-0 md:opacity-100"
          }`}
        >
          <div className="flex flex-col gap-1 px-6 pb-5 pt-3 md:flex-row md:items-center md:gap-7 md:p-0">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-sm px-2 py-2.5 text-sm transition-colors md:px-0 md:py-1 ${
                    isActive
                      ? "font-medium text-accent"
                      : "text-muted hover:text-accent-hover"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/rojina-chhetri-cv.txt"
              download
              className="mt-2 inline-flex min-h-10 items-center justify-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover md:mt-0"
              onClick={closeMenu}
            >
              <Download aria-hidden="true" size={16} />
              Download CV
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
