import VideoHero from '../components/VideoHero';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/Footer';
import { sternritters } from '../data/characters';

export default function Sternritters() {
  return (
    <div className="min-h-screen bg-sternritter">

      {/* ── Hero ── */}
      <VideoHero
        videoSrc="/Quincy.mp4"
        title="STERNRITTER"
        subtitle="Star Knights of the Wandenreich — Sons & Daughters of Yhwach"
        description="They are the Quincy who survived — purified, empowered, and reborn as instruments of divine wrath. Each Sternritter bears a Schrift, a letter of power granted by Yhwach himself, capable of stealing the very Bankai of the Shinigami."
        badge="Wandenreich · Lichtreich"
        accentColor="blue"
        overlayStyle="sternritter"
      />

      {/* ── About Wandenreich ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 space-y-6"
          style={{ borderColor: 'rgba(0,180,216,0.2)' }}
        >
          <div className="space-y-2">
            <div className="badge badge-blue">About</div>
            <h2
              className="text-3xl font-black gradient-text-blue"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              The Wandenreich
            </h2>
          </div>
          <div className="divider-blue opacity-50 w-24" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #00b4d8, transparent)' }} />
          <div className="grid md:grid-cols-2 gap-8 text-white/65 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>
              The <strong className="text-cyan-400/90">Wandenreich</strong> is a hidden Quincy empire existing 
              in the shadow realm within Soul Society. Led by <strong className="text-white/90">Yhwach</strong> — 
              the Father of the Quincy — they have waited 1,000 years to reclaim what Shinigami stole from them.
            </p>
            <p>
              The <strong className="text-cyan-400/90">Sternritter</strong> — German for "Star Knights" — are 
              the elite warriors of the Wandenreich. Each one receives a{' '}
              <strong className="text-white/90">Schrift</strong> (a letter-based ability) from Yhwach, granting 
              them power comparable to or exceeding captain-level Shinigami.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { v: '26', l: 'Schrift Letters' },
              { v: '1000', l: 'Years in Shadow' },
              { v: 'A', l: 'The Almighty' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div
                  className="text-3xl font-black gradient-text-blue"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {s.v}
                </div>
                <div
                  className="text-white/40 text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schrift Alphabet ── */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="badge badge-blue mx-auto inline-block">The Schrift</div>
          <h2
            className="text-3xl font-black gradient-text-blue"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Letters of Power
          </h2>
          <div className="w-48 mx-auto opacity-50" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #00b4d8, transparent)' }} />
          <p className="text-white/45 text-sm max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Each Sternritter is assigned a letter by Yhwach. The Schrift represents their unique power — 
            an ability that can even steal a Shinigami's Bankai.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            { letter: 'A', name: 'The Almighty', owner: 'Yhwach' },
            { letter: 'B', name: 'The Balance', owner: 'Haschwalth' },
            { letter: 'C', name: 'The Compulsory', owner: 'Pernida' },
            { letter: 'E', name: 'The Explosion', owner: 'Bambietta' },
            { letter: 'F', name: 'The Fear', owner: 'As Nödt' },
            { letter: 'G', name: 'The Glutton', owner: 'Liltotto' },
            { letter: 'H', name: 'The Heat', owner: 'Bazz-B' },
            { letter: 'M', name: 'The Miracle', owner: 'Gerard' },
            { letter: 'P', name: 'The Power', owner: 'Meninas' },
            { letter: 'T', name: 'The Thunderbolt', owner: 'Candice' },
            { letter: 'X', name: 'The X-Axis', owner: 'Lille' },
            { letter: 'Z', name: 'The Zombie', owner: 'Giselle' },
          ].map((s) => (
            <div
              key={s.letter}
              className="glass-card rounded-xl px-5 py-3 flex items-center gap-3"
              style={{ borderColor: 'rgba(0,180,216,0.2)' }}
            >
              <span
                className="text-lg font-black w-6 text-center shrink-0"
                style={{ color: '#00b4d8', fontFamily: 'Cinzel, serif' }}
              >
                {s.letter}
              </span>
              <div>
                <div
                  className="text-white/80 text-xs font-semibold"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {s.name}
                </div>
                <div
                  className="text-cyan-400/60 text-[0.6rem] tracking-wider uppercase"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {s.owner}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sternritter Gallery ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="badge badge-blue mx-auto inline-block">Star Knights</div>
          <h2
            className="text-4xl font-black gradient-text-blue"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            The Sternritter
          </h2>
          <div className="w-48 mx-auto opacity-50" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #00b4d8, transparent)' }} />
          <p className="text-white/45 max-w-lg mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Feared across Soul Society, the Sternritter shook the foundations of the Gotei 13 with a single invasion.
          </p>
        </div>

        <div className="characters-grid">
          {sternritters.map((char) => (
            <CharacterCard key={char.id} character={char} accentColor="blue" />
          ))}
        </div>
      </section>

      {/* ── Quincy Powers ── */}
      <section className="py-20 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="badge badge-blue mx-auto inline-block">Powers</div>
            <h2
              className="text-3xl font-black gradient-text-blue"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Quincy Abilities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Letzt Stil',
                kanji: '滅却師最終形態',
                description: 'The final form of Quincy power — a massive amplification that grants godlike strength. However, it permanently destroys the user\'s Quincy powers afterward.',
                color: '#90e0ef',
              },
              {
                name: 'Vollständig',
                kanji: '滅却師完聖体',
                description: 'The modern evolution of Letzt Stil developed by the Wandenreich. Transforms Sternritter into angelic beings with halos and wings, without the power cost.',
                color: '#00b4d8',
              },
              {
                name: 'Blut',
                kanji: '血装',
                description: 'A technique that floods the Quincy\'s blood vessels with Reishi. Blut Vene hardens the body for defense; Blut Arterie amplifies attack power.',
                color: '#0077b6',
              },
            ].map((p) => (
              <div
                key={p.name}
                className="glass-card rounded-2xl p-7 space-y-4 text-center"
                style={{ borderColor: 'rgba(0,180,216,0.15)' }}
              >
                <div
                  className="text-4xl font-black opacity-15"
                  style={{ color: p.color, fontFamily: 'serif', fontSize: '1.8rem' }}
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

      {/* ── The Thousand-Year Blood War ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="glass-card rounded-2xl p-10 text-center space-y-6"
            style={{ borderColor: 'rgba(0,180,216,0.2)' }}
          >
            <div className="badge badge-blue mx-auto inline-block">The Final War</div>
            <h2
              className="text-3xl font-black gradient-text-blue"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Thousand-Year Blood War
            </h2>
            <div className="w-24 mx-auto" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #00b4d8, transparent)' }} />
            <p className="text-white/65 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              After 1,000 years of hiding in the shadows of Soul Society, Yhwach unleashes the Wandenreich 
              in a cataclysmic invasion. The Sternritter lay waste to the Seireitei, stealing Bankai and killing 
              captains. What follows is the most brutal, heartbreaking, and spectacular arc in Bleach's history — 
              the Thousand-Year Blood War, animated by Studio Pierrot in stunning detail beginning in 2022.
            </p>
            <p
              className="text-cyan-400/60 text-sm italic"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              "We are the Wandenreich. We are the shadow that has always lurked beneath Soul Society."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
