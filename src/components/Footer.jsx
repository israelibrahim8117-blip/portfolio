const Footer = () => {
  return (
    <footer className="border-t border-slate-800/70">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white font-bold text-[#07111e]">
                R
              </span>

              <span className="text-sm font-semibold text-white">
                Runty Dev
              </span>
            </a>

            <p className="mt-3 max-w-xs text-xs leading-5 text-slate-500">
              Full Stack Web Developer building modern web experiences.
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 text-xs text-slate-500">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Runty Dev. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-slate-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
