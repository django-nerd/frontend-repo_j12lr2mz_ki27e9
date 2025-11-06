import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-xl shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#hero" className="inline-flex items-center gap-2 text-gray-900 dark:text-white">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
                <Rocket size={18} />
              </span>
              <span className="font-semibold tracking-tight">My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-200">
              <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/60 dark:bg-white/10 hover:bg-white/80 transition"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/60 dark:bg-white/10 hover:bg-white/80 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
