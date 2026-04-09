import { useRef, useEffect, useState } from 'react';

interface VideoHeroProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  description?: string;
  badge?: string;
  accentColor?: 'gold' | 'red' | 'blue' | 'purple';
  overlayStyle?: 'home' | 'gotei' | 'espada' | 'sternritter';
  children?: React.ReactNode;
  minHeight?: string;
}

const overlayGradients = {
  home: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,1) 100%)',
  gotei: 'linear-gradient(to bottom, rgba(0,5,20,0.5) 0%, rgba(0,8,30,0.25) 30%, rgba(0,5,20,0.65) 70%, rgba(0,0,0,1) 100%)',
  espada: 'linear-gradient(to bottom, rgba(20,0,10,0.5) 0%, rgba(15,0,8,0.25) 30%, rgba(20,0,10,0.65) 70%, rgba(0,0,0,1) 100%)',
  sternritter: 'linear-gradient(to bottom, rgba(5,5,20,0.5) 0%, rgba(3,3,15,0.25) 30%, rgba(5,5,20,0.65) 70%, rgba(0,0,0,1) 100%)',
};

const accentStyles = {
  gold: {
    badge: { background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.4)', color: '#f0d060' },
    title: 'gradient-text',
    line: 'from-transparent via-yellow-400/60 to-transparent',
    glow: '0 0 30px rgba(201,162,39,0.4)',
  },
  red: {
    badge: { background: 'rgba(220,20,60,0.15)', border: '1px solid rgba(220,20,60,0.4)', color: '#ff6b6b' },
    title: 'gradient-text-red',
    line: 'from-transparent via-red-500/60 to-transparent',
    glow: '0 0 30px rgba(220,20,60,0.4)',
  },
  blue: {
    badge: { background: 'rgba(0,180,216,0.15)', border: '1px solid rgba(0,180,216,0.4)', color: '#90e0ef' },
    title: 'gradient-text-blue',
    line: 'from-transparent via-cyan-400/60 to-transparent',
    glow: '0 0 30px rgba(0,180,216,0.4)',
  },
  purple: {
    badge: { background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)', color: '#c4b5fd' },
    title: 'gradient-text-blue',
    line: 'from-transparent via-violet-500/60 to-transparent',
    glow: '0 0 30px rgba(139,92,246,0.4)',
  },
};

export default function VideoHero({
  videoSrc,
  title,
  subtitle,
  description,
  badge,
  accentColor = 'gold',
  overlayStyle = 'home',
  children,
  minHeight = '100vh',
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const accent = accentStyles[accentColor];

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.playsInline = true;
    vid.loop = true;
    const playPromise = vid.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Autoplay blocked — still muted so it should work
        vid.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section
      className="hero-section relative overflow-hidden"
      style={{ minHeight }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient in case video doesn't load */}
        <div
          className="absolute inset-0"
          style={{
            background:
              overlayStyle === 'gotei'
                ? 'radial-gradient(ellipse at center top, #0a1628 0%, #000814 60%, #000 100%)'
                : overlayStyle === 'espada'
                ? 'radial-gradient(ellipse at center top, #1a0510 0%, #0d0010 60%, #000 100%)'
                : overlayStyle === 'sternritter'
                ? 'radial-gradient(ellipse at center top, #0a0a1a 0%, #050510 60%, #000 100%)'
                : 'radial-gradient(ellipse at center top, #0d0d0d 0%, #000 60%, #000 100%)',
          }}
        />

        <video
          ref={videoRef}
          className="video-bg"
          src={videoSrc}
          muted
          playsInline
          loop
          autoPlay
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1.5s ease' }}
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
        />

        {/* Fallback image shown when video isn't loaded */}
        {!videoLoaded && (
          <img
            src="/images/hero-fallback.jpg"
            alt=""
            className="video-bg"
            style={{ objectFit: 'cover', filter: 'brightness(0.5) saturate(0.7)' }}
          />
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: overlayGradients[overlayStyle] }}
        />

        {/* Noise texture */}
        <div className="noise-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32" style={{ minHeight }}>

        {/* Badge */}
        {badge && (
          <div
            className="inline-block px-4 py-1.5 rounded-sm mb-6 text-[0.65rem] tracking-[0.35em] uppercase font-semibold animate-slide-up"
            style={{ ...accent.badge, fontFamily: 'Rajdhani, sans-serif', animationDelay: '0.1s' }}
          >
            {badge}
          </div>
        )}

        {/* Title */}
        <h1
          className={`${accent.title} font-black tracking-wider mb-4 animate-slide-up`}
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
            lineHeight: 1.1,
            animationDelay: '0.2s',
            textShadow: accent.glow,
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <h2
          className="text-white/80 font-light tracking-[0.25em] uppercase mb-6 animate-slide-up"
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)',
            animationDelay: '0.35s',
          }}
        >
          {subtitle}
        </h2>

        {/* Decorative line */}
        <div
          className={`h-px w-32 bg-gradient-to-r ${accent.line} mb-6 animate-slide-up`}
          style={{ animationDelay: '0.45s' }}
        />

        {/* Description */}
        {description && (
          <p
            className="max-w-2xl text-white/60 leading-relaxed animate-slide-up"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
              animationDelay: '0.55s',
            }}
          >
            {description}
          </p>
        )}

        {/* Slot for extra content */}
        {children && (
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.65s' }}>
            {children}
          </div>
        )}

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-glow"
        >
          <span
            className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
