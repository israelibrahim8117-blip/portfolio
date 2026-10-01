import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-[#050b14]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-lg font-bold text-[#08101c]">
            R
          </span>

          <span className="text-sm font-semibold text-white">Runty Dev</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-[11px] font-medium transition ${
                item.label === "Home"
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}

              {item.label === "Home" && (
                <span className="absolute -bottom-6 left-1/2 h-px w-4 -translate-x-1/2 bg-blue-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-md border border-blue-500 px-4 py-2 text-[11px] font-medium text-white transition hover:bg-blue-500/10 md:block"
        >
          Get In Touch
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 text-slate-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-[#050b14] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 block rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
