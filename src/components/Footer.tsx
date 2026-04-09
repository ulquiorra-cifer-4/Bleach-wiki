import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 mt-auto">
      <div className="glass" style={{ background: 'rgba(0,0,0,0.8)' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/icons/logo.png"
                  alt="Bleach"
                  className="h-8 w-auto object-contain drop-shadow-[0_0_6px_rgba(201,162,39,0.5)]"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span
                  className="font-cinzel font-black text-lg gradient-text tracking-widest"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  BLEACH
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Soul Chronicles — An unofficial tribute to Tite Kubo's masterpiece. 
                Dive into the world of Shinigami, Hollows, and Quincy.
              </p>
              <p className="text-white/30 text-xs" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em' }}>
                "DEATH AND STRAWBERRY"
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4
                className="text-xs tracking-[0.3em] uppercase text-yellow-400/80 font-semibold"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Factions
              </h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Gotei 13 — Soul Society', path: '/gotei-13' },
                  { label: 'The Espada — Hueco Mundo', path: '/espada' },
                  { label: 'Sternritters — Wandenreich', path: '/sternritters' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-white/50 hover:text-yellow-400 text-sm transition-colors duration-200"
                      style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h4
                className="text-xs tracking-[0.3em] uppercase text-yellow-400/80 font-semibold"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                About
              </h4>
              <div className="space-y-3 text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>
                  Built with passion by a fellow Bleach fan. Every character, every arc — 
                  crafted into one immersive digital experience.
                </p>
                <p>
                  Bleach is created by{' '}
                  <span className="text-yellow-400/80">Tite Kubo</span> and published by{' '}
                  <span className="text-yellow-400/80">Shueisha</span>.
                </p>
                <p>
                  Anime adaptation by{' '}
                  <span className="text-yellow-400/80">Studio Pierrot</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-gold mb-6 opacity-40" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-white/30 text-xs text-center"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
            >
              © {year} BLEACH — Soul Chronicles. Fan-made tribute. All rights belong to Tite Kubo & Shueisha.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-white/20 text-xs" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Crafted by
              </span>
              <span
                className="text-yellow-400/60 text-xs font-semibold tracking-widest"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                A BLEACH FAN
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
