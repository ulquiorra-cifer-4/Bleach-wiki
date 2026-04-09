import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Gotei 13', path: '/gotei-13' },
  { label: 'The Espada', path: '/espada' },
  { label: 'Sternritters', path: '/sternritters' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/icons/logo.png"
                alt="Bleach Logo"
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-125 drop-shadow-[0_0_8px_rgba(201,162,39,0.6)]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const next = target.nextElementSibling as HTMLElement;
                  if (next) next.style.display = 'flex';
                }}
              />
              {/* Fallback text logo */}
              <div
                className="hidden items-center gap-2"
                style={{ display: 'none' }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 flex items-center justify-center">
                  <span className="text-black font-black text-xs font-cinzel">B</span>
                </div>
              </div>
            </div>
            <span
              className="font-cinzel font-black text-xl tracking-[0.2em] gradient-text hidden sm:block"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              BLEACH
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-yellow-400 transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-nav border-t border-white/5 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg font-rajdhani font-600 text-sm tracking-widest uppercase transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-yellow-400 bg-yellow-400/10'
                  : 'text-white/70 hover:text-yellow-400 hover:bg-white/5'
              }`}
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
