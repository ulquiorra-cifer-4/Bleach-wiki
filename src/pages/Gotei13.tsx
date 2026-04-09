import VideoHero from '../components/VideoHero';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import { gotei13 } from '../data/characters';

const squads = [
  { num: 1, name: 'First Division', specialty: 'Command & Leadership', color: '#c9a227' },
  { num: 2, name: 'Second Division', specialty: 'Special Forces & Assassination', color: '#c0c0c0' },
  { num: 3, name: 'Third Division', specialty: 'Arts & Cultural Preservation', color: '#8fbc8f' },
  { num: 4, name: 'Fourth Division', specialty: 'Medical & Supply Corps', color: '#98fb98' },
  { num: 5, name: 'Fifth Division', specialty: 'General Combat Operations', color: '#dda0dd' },
  { num: 6, name: 'Sixth Division', specialty: 'Patrol & Noble Liaison', color: '#add8e6' },
  { num: 7, name: 'Seventh Division', specialty: 'Spiritual Power & Ethics', color: '#f4a460' },
  { num: 8, name: 'Eighth Division', specialty: 'Archive & Intelligence', color: '#ffb6c1' },
  { num: 9, name: 'Ninth Division', specialty: 'Security & Cultural Affairs', color: '#e0e0e0' },
  { num: 10, name: 'Tenth Division', specialty: 'Patrol & Combat', color: '#87ceeb' },
  { num: 11, name: 'Eleventh Division', specialty: 'Assault & Brute Force', color: '#ff6347' },
  { num: 12, name: 'Twelfth Division', specialty: 'Research & Development', color: '#9370db' },
  { num: 13, name: 'Thirteenth Division', specialty: 'Community & Hollow Extermination', color: '#f0e68c' },
];

export default function Gotei13() {
  return (
    <div className="min-h-screen bg-gotei">

      {/* ── Hero ── */}
      <VideoHero
        videoSrc="/Gotei.mp4"
        title="GOTEI 13"
        subtitle="Thirteen Court Guard Squads — Protectors of Soul Society"
        description="The sword of Soul Society. Thirteen divisions of elite Shinigami bound by duty, honor, and the eternal mission of maintaining the balance between the living and the dead."
        badge="Soul Society · Seireitei"
        accentColor="gold"
        overlayStyle="gotei"
      />

      {/* ── About Soul Society ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="glass-card rounded-2xl p-10 md:p-14 space-y-6">
          <div className="space-y-2">
            <div className="badge badge-gold">About</div>
            <h2
              className="text-3xl font-black gradient-text"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              The Soul Society
            </h2>
          </div>
          <div className="divider-gold opacity-50 w-24" />
          <div className="grid md:grid-cols-2 gap-8 text-white/65 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>
              Soul Society is the afterlife realm in the Bleach universe — a vast spiritual dimension where human 
              souls pass after death. It is ruled by the <strong className="text-yellow-400/90">Soul King</strong> 
              and protected by the Gotei 13, thirteen divisions of Shinigami (Soul Reapers) who maintain order.
            </p>
            <p>
              The Seireitei — the "Court of Pure Souls" — lies at the center of Soul Society, 
              enclosed by a white wall that repels ordinary spiritual energy. It is within these walls that the 
              Gotei 13 captains and their squads reside, train, and prepare for battle.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { v: '13', l: 'Divisions' },
              { v: '26', l: 'Captains & LTs' },
              { v: '∞', l: 'Years of Duty' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black gradient-text" style={{ fontFamily: 'Cinzel, serif' }}>{s.v}</div>
                <div className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Squads Overview ── */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="badge badge-gold mx-auto inline-block">Structure</div>
          <h2
            className="text-3xl font-black gradient-text"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            The Thirteen Divisions
          </h2>
          <div className="divider-gold max-w-xs mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {squads.map((s) => (
            <div
              key={s.num}
              className="glass-card rounded-xl p-4 text-center space-y-1"
            >
              <div
                className="text-2xl font-black"
                style={{ fontFamily: 'Cinzel, serif', color: s.color, opacity: 0.9 }}
              >
                {s.num}
              </div>
              <div
                className="text-xs font-semibold text-white/80 tracking-wide"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {s.name}
              </div>
              <div
                className="text-[0.6rem] text-white/40 leading-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {s.specialty}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Captains Gallery ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="badge badge-gold mx-auto inline-block">Commanders</div>
          <h2
            className="text-4xl font-black gradient-text"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            The Captains
          </h2>
          <div className="divider-gold max-w-xs mx-auto opacity-50" />
          <p className="text-white/45 max-w-lg mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            To achieve captaincy, a Shinigami must master their Bankai — a feat only one in a thousand ever accomplishes.
          </p>
        </div>

        <div className="characters-grid">
          {gotei13.map((char) => (
            <CharacterCard key={char.id} character={char} accentColor="gold" />
          ))}
        </div>
      </section>

      {/* ── Shinigami Powers ── */}
      <section className="py-20 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="badge badge-gold mx-auto inline-block">Powers</div>
            <h2
              className="text-3xl font-black gradient-text"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Shinigami Abilities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Shikai',
                kanji: '始解',
                description: 'The first release of a Zanpakutō. A Shinigami must learn their sword spirit\'s name to unlock this power.',
                color: '#c9a227',
              },
              {
                name: 'Bankai',
                kanji: '卍解',
                description: 'The final and complete release of a Zanpakutō. A power only achieved after at minimum 10 years of training with one\'s Shikai.',
                color: '#f0d060',
              },
              {
                name: 'Kidō',
                kanji: '鬼道',
                description: 'The art of spell-casting — Hadō for offense and Bakudō for binding. The highest-numbered spells can devastate entire armies.',
                color: '#dda0dd',
              },
            ].map((p) => (
              <div key={p.name} className="glass-card rounded-2xl p-7 space-y-4 text-center">
                <div
                  className="text-5xl font-black opacity-20"
                  style={{ color: p.color, fontFamily: 'serif' }}
                >
                  {p.kanji}
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: p.color, fontFamily: 'Cinzel, serif' }}
                >
                  {p.name}
                </h3>
                <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.color}60, transparent)` }} />
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
