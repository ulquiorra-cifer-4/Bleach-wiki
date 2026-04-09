import { Link } from 'react-router-dom';
import VideoHero from '../components/VideoHero';
import Footer from '../components/Footer';
import Particles from '../components/Particles';

const arcs = [
  {
    name: 'Soul Society Arc',
    episodes: 'Episodes 1–63',
    description:
      'Ichigo Kurosaki, a teenager with the ability to see ghosts, gains the powers of a Soul Reaper from Rukia Kuchiki and embarks on a desperate mission to rescue her from execution in Soul Society.',
    color: '#c9a227',
    glow: 'rgba(201,162,39,0.2)',
  },
  {
    name: 'Arrancar Arc',
    episodes: 'Episodes 110–310',
    description:
      'The arrival of Sōsuke Aizen and his Espada — Hollows who have gained Shinigami-like powers — triggers a war that threatens both the Human World and Soul Society.',
    color: '#dc143c',
    glow: 'rgba(220,20,60,0.2)',
  },
  {
    name: 'Thousand-Year Blood War',
    episodes: 'Episodes 366–366+',
    description:
      'The Wandenreich — a hidden empire of Quincy led by Yhwach — launches a devastating invasion on Soul Society, igniting the final war of Bleach in breathtaking fashion.',
    color: '#90e0ef',
    glow: 'rgba(0,180,216,0.2)',
  },
];

const factions = [
  {
    name: 'Gotei 13',
    subtitle: 'Soul Society\'s Military',
    description: 'Thirteen divisions of elite Shinigami protecting the balance of souls between worlds.',
    path: '/gotei-13',
    accent: '#c9a227',
    badge: 'Soul Society',
    icon: '⚔',
  },
  {
    name: 'The Espada',
    subtitle: 'Lords of Hueco Mundo',
    description: 'Ten powerful Arrancars, ranked by strength, serving under Aizen\'s iron will.',
    path: '/espada',
    accent: '#dc143c',
    badge: 'Hueco Mundo',
    icon: '🌑',
  },
  {
    name: 'Sternritters',
    subtitle: 'Star Knights of the Wandenreich',
    description: 'Elite Quincy warriors bearing Schrifts granted by Yhwach himself, capable of stealing Bankai.',
    path: '/sternritters',
    accent: '#90e0ef',
    badge: 'Wandenreich',
    icon: '✦',
  },
];

const quotes = [
  { text: 'If fate is a millstone, then we are the grist.', author: 'Ichigo Kurosaki' },
  { text: 'The only ones who should kill are those who are prepared to be killed.', author: 'Ichigo Kurosaki' },
  { text: 'Admiration is the furthest thing from understanding.', author: 'Aizen Sōsuke' },
  { text: 'We stand in awe before that which cannot be seen.', author: 'Ulquiorra Cifer' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">

      {/* Ambient Particles */}
      <Particles color="#c9a227" count={15} type="petals" />

      {/* ── Hero Section ── */}
      <VideoHero
        videoSrc="/bleach.mp4"
        title="BLEACH"
        subtitle="Soul Chronicles — A Legend Beyond Death"
        description="Enter the world where Shinigami walk among the living, Hollows hunger in the dark, and the fate of every soul hangs in the balance. Three great factions. One eternal war."
        badge="Tite Kubo's Masterpiece"
        accentColor="gold"
        overlayStyle="home"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/gotei-13" className="btn-gold">
            Explore Factions
          </Link>
        </div>
      </VideoHero>

      {/* ── About Section ── */}
      <section className="relative py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="badge badge-gold">The Series</div>
              <h2
                className="text-4xl md:text-5xl font-black gradient-text"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                What is Bleach?
              </h2>
            </div>
            <div className="divider-gold w-20 opacity-60" />
            <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              <strong className="text-yellow-400/90">Bleach</strong> is a manga series by{' '}
              <strong className="text-white/90">Tite Kubo</strong> serialized in Shueisha's Weekly Shōnen Jump 
              from 2001 to 2016. The story follows{' '}
              <strong className="text-white/90">Ichigo Kurosaki</strong>, a teenager born with the rare ability 
              to see ghosts.
            </p>
            <p className="text-white/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              When Ichigo accidentally absorbs the powers of a Soul Reaper named Rukia Kuchiki, he is thrust 
              into the world of the Gotei 13 — the military force of Soul Society — and must navigate wars 
              against Hollows, Arrancars, and eventually, the ancient Quincy empire.
            </p>
            <p className="text-white/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              The anime adaptation by <strong className="text-white/80">Studio Pierrot</strong> ran from 2004 to 2012 
              before the spectacular <strong className="text-yellow-400/80">Thousand-Year Blood War</strong> arc 
              returned in 2022, delivering the most breathtaking animation in the series' history.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '74', label: 'Manga Volumes', sub: '686 Chapters' },
              { value: '366+', label: 'Anime Episodes', sub: 'Studio Pierrot' },
              { value: '3', label: 'Major Arcs', sub: 'Epic Storylines' },
              { value: '2001', label: 'Year of Origin', sub: 'WSJ Debut' },
            ].map((stat) => (
              <div key={stat.value} className="glass-card rounded-2xl p-6 text-center">
                <div
                  className="text-4xl font-black gradient-text mb-1"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/80 text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-white/40 text-xs"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Arc Timeline ── */}
      <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="badge badge-gold mx-auto inline-block">Story Arcs</div>
            <h2
              className="text-4xl font-black gradient-text"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              The Three Great Wars
            </h2>
            <div className="divider-gold max-w-xs mx-auto opacity-50" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {arcs.map((arc, i) => (
              <div
                key={arc.name}
                className="glass-card rounded-2xl p-8 space-y-4 relative overflow-hidden"
              >
                {/* Number */}
                <div
                  className="absolute top-4 right-4 text-7xl font-black opacity-5"
                  style={{ fontFamily: 'Cinzel, serif', color: arc.color }}
                >
                  {i + 1}
                </div>

                <div
                  className="inline-block px-3 py-1 rounded-sm text-[0.6rem] tracking-[0.25em] uppercase font-semibold"
                  style={{
                    background: `${arc.glow}`,
                    border: `1px solid ${arc.color}40`,
                    color: arc.color,
                    fontFamily: 'Rajdhani, sans-serif',
                  }}
                >
                  {arc.episodes}
                </div>

                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {arc.name}
                </h3>

                <div className="h-px" style={{ background: `linear-gradient(90deg, ${arc.color}60, transparent)` }} />

                <p
                  className="text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {arc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Factions Section ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="badge badge-gold mx-auto inline-block">Factions</div>
            <h2
              className="text-4xl font-black gradient-text"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Choose Your Side
            </h2>
            <div className="divider-gold max-w-xs mx-auto opacity-50" />
            <p className="text-white/50 max-w-lg mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Three powerful factions, each with their own code, their own power, and their own story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {factions.map((faction) => (
              <Link
                key={faction.path}
                to={faction.path}
                className="glass-card rounded-2xl p-8 space-y-5 block group"
                style={{ textDecoration: 'none' }}
              >
                {/* Icon */}
                <div
                  className="text-4xl"
                  style={{ filter: `drop-shadow(0 0 12px ${faction.accent}60)` }}
                >
                  {faction.icon}
                </div>

                <div>
                  <div
                    className="text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-2"
                    style={{ color: faction.accent, fontFamily: 'Rajdhani, sans-serif', opacity: 0.8 }}
                  >
                    {faction.badge}
                  </div>
                  <h3
                    className="text-2xl font-bold text-white group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Cinzel, serif', color: faction.accent }}
                  >
                    {faction.name}
                  </h3>
                  <p className="text-white/50 text-xs mt-1" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em' }}>
                    {faction.subtitle}
                  </p>
                </div>

                <div className="h-px" style={{ background: `linear-gradient(90deg, ${faction.accent}60, transparent)` }} />

                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {faction.description}
                </p>

                <div
                  className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold transition-all duration-300 group-hover:gap-4"
                  style={{ color: faction.accent, fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quotes Section ── */}
      <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge badge-gold mx-auto inline-block mb-4">Wisdom</div>
            <h2
              className="text-3xl font-black gradient-text"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Words That Endure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quotes.map((q, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-8 space-y-4 relative"
              >
                <div
                  className="text-6xl font-black text-yellow-400/10 absolute top-4 left-6 leading-none"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  "
                </div>
                <p
                  className="text-white/80 text-lg leading-relaxed relative z-10 pt-4"
                  style={{ fontFamily: 'Cinzel, serif', fontStyle: 'italic' }}
                >
                  {q.text}
                </p>
                <div className="divider-gold opacity-30" />
                <p
                  className="text-yellow-400/70 text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  — {q.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
