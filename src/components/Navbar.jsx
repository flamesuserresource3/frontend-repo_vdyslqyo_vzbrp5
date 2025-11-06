import { useState, useEffect } from 'react';
import { Menu, X, Rocket, User, Folder, MessageSquare } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home', icon: Rocket },
  { href: '#projects', label: 'Projects', icon: Folder },
  { href: '#contact', label: 'Contact', icon: MessageSquare },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-md bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20">
              <User className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Nimit Gupta
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm text-white transition"
            >
              <Rocket className="h-4 w-4" /> Hire Me
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-white/90 hover:text-white hover:bg-white/10"
              >
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
