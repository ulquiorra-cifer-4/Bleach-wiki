import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000 100%)' }}
    >
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,162,39,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 space-y-8">
        <div
          className="text-9xl font-black gradient-text opacity-20"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          404
        </div>

        <div className="space-y-3">
          <h1
            className="text-3xl font-black gradient-text"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Soul Not Found
          </h1>
          <p className="text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
            This soul has already passed on to another realm.
          </p>
        </div>

        <div className="divider-gold max-w-xs mx-auto opacity-40" />

        <Link to="/" className="btn-gold inline-block">
          Return to Soul Society
        </Link>
      </div>
    </div>
  );
}
