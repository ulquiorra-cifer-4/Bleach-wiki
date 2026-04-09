import VideoHero from '../components/VideoHero';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/Footer';
import { espada } from '../data/characters';

export default function Espada() {
  return (
    <div className="min-h-screen bg-espada">

      {/* ── Hero ── */}
      <VideoHero
        videoSrc="/espada.mp4"
        title="THE ESPADA"
        subtitle="Ten Blades — The Lords of Hueco Mundo"
        description="Born from the darkest souls who ever walked the hollow path, the Espada are Arrancars — Hollows who shed their masks and gained Shinigami-like powers. Beneath Aizen's command, they are the most terrifying force the world has ever seen."
        badge="Hueco Mundo · Las Noches"
        accentColor="red"
        overlayStyle="espada"
      />

      {/* ── About Arrancars ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="glass-card rounded-2xl p-10 md:p-14 space-y-6"
          style={{ borderColor: 'rgba(220,20,60,0.2)' }}>
          <div className="space-y-2">
            <div className="badge badge-red">About</div>
            <h2
              className="text-3xl font-black gradient-text-red"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Arrancars & The Espada
            </h2>
          </div>
          <div className="divider-red opacity-50 w-24" />
          <div className="grid md:grid-cols-2 gap-8 text-white/65 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>
              <strong className="text-red-400/90">Arrancars</strong> are Hollows who have removed their masks, 
              gaining a hybrid of Shinigami and Hollow powers. The process, made easier by Aizen's 
              Hōgyoku, produces beings of immense spiritual power — far beyond ordinary Hollows.
            </p>
            <p>
              The <strong className="text-red-400/90">Espada</strong> are the ten most powerful Arrancars, 
              each bearing a number tattooed somewhere on their body. The lower the number, the greater 
              their Reiryoku. They rule from the fortress <strong className="text-white/80">Las Noches</strong> 
              deep within Hueco Mundo.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { v: '10', l: 'Espada Members' },
              { v: '0–9', l: 'Power Rankings' },
              { v: '∞', l: 'Aspects of Death' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black gradient-text-red" style={{ fontFamily: 'Cinzel, serif' }}>{s.v}</div>
                <div className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aspects of Death ── */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="badge badge-red mx-auto inline-block">Symbolism</div>
          <h2
            className="text-3xl font-black gradient-text-red"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Aspects of Death
          </h2>
          <div className="divider-red max-w-xs mx-auto opacity-50" />
          <p className="text-white/45 text-sm max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Each Espada represents a unique facet of death — the emotional or conceptual experience associated with dying.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            { rank: '#1', name: 'Starrk', aspect: 'Solitude' },
            { rank: '#2', name: 'Baraggan', aspect: 'Aging' },
            { rank: '#3', name: 'Harribel', aspect: 'Sacrifice' },
            { rank: '#4', name: 'Ulquiorra', aspect: 'Emptiness' },
            { rank: '#5', name: 'Nnoitra', aspect: 'Despair' },
            { rank: '#6', name: 'Grimmjow', aspect: 'Destruction' },
            { rank: '#7', name: 'Zommari', aspect: 'Intoxication' },
            { rank: '#8', name: 'Szayelaporro', aspect: 'Madness' },
            { rank: '#9', name: 'Aaroniero', aspect: 'Greed' },
            { rank: '#0', name: 'Yammy', aspect: 'Rage' },
          ].map((e) => (
            <div
              key={e.rank}
              className="glass-card rounded-xl px-5 py-3 flex items-center gap-3"
              style={{ borderColor: 'rgba(220,20,60,0.2)' }}
            >
              <span
                className="text-xs font-black"
                style={{ color: '#dc143c', fontFamily: 'Cinzel, serif' }}
              >
                {e.rank}
              </span>
              <div>
                <div className="text-white/80 text-xs font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {e.name}
                </div>
                <div className="text-red-400/60 text-[0.6rem] tracking-wider uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {e.aspect}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Espada Gallery ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="badge badge-red mx-auto inline-block">The Ten Blades</div>
          <h2
            className="text-4xl font-black gradient-text-red"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Espada Members
          </h2>
          <div className="divider-red max-w-xs mx-auto opacity-50" />
          <p className="text-white/45 max-w-lg mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Each Espada bears an Aspect of Death — the defining quality of their existence and their ultimate power.
          </p>
        </div>

        <div className="characters-grid">
          {espada.map((char) => (
            <CharacterCard key={char.id} character={char} accentColor="red" />
          ))}
        </div>
      </section>

      {/* ── Arrancar Powers ── */}
      <section className="py-20 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="badge badge-red mx-auto inline-block">Powers</div>
            <h2
              className="text-3xl font-black gradient-text-red"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Arrancar Abilities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Resurrección',
                kanji: '刀剣解放',
                description: 'The release of an Arrancar\'s sealed powers, equivalent to a Shinigami\'s Shikai. A few elite Espada can achieve a Segunda Etapa — a second release.',
                color: '#dc143c',
              },
              {
                name: 'Hierro',
                kanji: '鋼皮',
                description: 'Iron skin — the hardened spiritual pressure of an Arrancar condensed across their body, creating a natural armor that deflects blades and Kidō.',
                color: '#ff6b6b',
              },
              {
                name: 'Cero',
                kanji: '虚閃',
                description: 'A concentrated blast of spiritual energy fired from a hollow\'s fingertips, mouth, or body. The most powerful form is the Grand Rey Cero.',
                color: '#8b0000',
              },
            ].map((p) => (
              <div
                key={p.name}
                className="glass-card rounded-2xl p-7 space-y-4 text-center"
                style={{ borderColor: 'rgba(220,20,60,0.15)' }}
              >
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
