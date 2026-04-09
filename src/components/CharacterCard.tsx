import { useState } from 'react';
import type { Character } from '../data/characters';

interface CharacterCardProps {
  character: Character;
  accentColor?: 'gold' | 'red' | 'blue' | 'purple';
}

const accentMap = {
  gold: {
    badge: 'badge-gold',
    border: 'rgba(201, 162, 39, 0.4)',
    glow: 'rgba(201, 162, 39, 0.15)',
    text: '#f0d060',
    divider: 'from-transparent via-yellow-400/40 to-transparent',
  },
  red: {
    badge: 'badge-red',
    border: 'rgba(220, 20, 60, 0.4)',
    glow: 'rgba(220, 20, 60, 0.15)',
    text: '#ff6b6b',
    divider: 'from-transparent via-red-500/40 to-transparent',
  },
  blue: {
    badge: 'badge-blue',
    border: 'rgba(0, 180, 216, 0.4)',
    glow: 'rgba(0, 180, 216, 0.15)',
    text: '#90e0ef',
    divider: 'from-transparent via-cyan-400/40 to-transparent',
  },
  purple: {
    badge: 'badge-blue',
    border: 'rgba(139, 92, 246, 0.4)',
    glow: 'rgba(139, 92, 246, 0.15)',
    text: '#c4b5fd',
    divider: 'from-transparent via-violet-400/40 to-transparent',
  },
};

export default function CharacterCard({ character, accentColor = 'gold' }: CharacterCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const accent = accentMap[accentColor];

  return (
    <div
      className="character-card glass-card cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? accent.border : 'rgba(255,255,255,0.08)',
        boxShadow: isHovered
          ? `0 12px 48px rgba(0,0,0,0.6), 0 0 24px ${accent.glow}`
          : '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ borderRadius: '16px 16px 0 0' }}>
        {!imgError ? (
          <img
            src={character.image}
            alt={character.name}
            className="card-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="card-img img-fallback flex flex-col items-center justify-center gap-3"
            style={{ aspectRatio: '3/4' }}
          >
            {/* Decorative SVG placeholder */}
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28" stroke={accent.text} strokeWidth="1" strokeOpacity="0.3" />
              <text x="50%" y="55%" textAnchor="middle" fill={accent.text} fontSize="24" fontFamily="Cinzel, serif" opacity="0.5">
                {character.name.charAt(0)}
              </text>
            </svg>
            <span
              className="text-xs text-center px-3 opacity-40"
              style={{ color: accent.text, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em' }}
            >
              IMAGE COMING SOON
            </span>
          </div>
        )}

        {/* Gradient overlay always */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
          borderRadius: '16px 16px 0 0',
        }} />

        {/* Rank badge top-right */}
        {character.rank && (
          <div className="absolute top-3 right-3">
            <span
              className={`badge ${accent.badge} text-[0.6rem]`}
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              {character.rank}
            </span>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-4 space-y-3" style={{ background: 'rgba(0,0,0,0.4)' }}>
        {/* Name */}
        <div>
          <h3
            className="font-bold text-base leading-tight text-white"
            style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}
          >
            {character.name}
          </h3>
          <p
            className="text-xs mt-1 tracking-wider opacity-70"
            style={{ color: accent.text, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.08em' }}
          >
            {character.title}
          </p>
        </div>

        {/* Divider */}
        <div className={`h-px bg-gradient-to-r ${accent.divider}`} />

        {/* Description - always visible but subtle */}
        <p
          className="text-xs text-white/60 leading-relaxed line-clamp-3"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem' }}
        >
          {character.description}
        </p>

        {/* Zanpakuto / Schrift / Aspect */}
        {(character.zanpakuto || character.schrift || character.aspect) && (
          <div className="space-y-1.5">
            {character.zanpakuto && (
              <div className="flex gap-2 items-start">
                <span
                  className="text-[0.6rem] uppercase tracking-widest shrink-0 mt-0.5"
                  style={{ color: accent.text, fontFamily: 'Rajdhani, sans-serif', opacity: 0.7 }}
                >
                  Zanpakutō
                </span>
                <span className="text-[0.7rem] text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {character.zanpakuto}
                </span>
              </div>
            )}
            {character.schrift && (
              <div className="flex gap-2 items-start">
                <span
                  className="text-[0.6rem] uppercase tracking-widest shrink-0 mt-0.5"
                  style={{ color: accent.text, fontFamily: 'Rajdhani, sans-serif', opacity: 0.7 }}
                >
                  Schrift
                </span>
                <span className="text-[0.7rem] text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {character.schrift}
                </span>
              </div>
            )}
            {character.aspect && (
              <div className="flex gap-2 items-start">
                <span
                  className="text-[0.6rem] uppercase tracking-widest shrink-0 mt-0.5"
                  style={{ color: accent.text, fontFamily: 'Rajdhani, sans-serif', opacity: 0.7 }}
                >
                  Aspect
                </span>
                <span className="text-[0.7rem] text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {character.aspect}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Ability on hover */}
        {character.ability && (
          <div
            className="overflow-hidden transition-all duration-400"
            style={{ maxHeight: isHovered ? '80px' : '0', opacity: isHovered ? 1 : 0 }}
          >
            <div className={`h-px bg-gradient-to-r ${accent.divider} mb-2`} />
            <p
              className="text-[0.68rem] leading-relaxed"
              style={{ color: accent.text, fontFamily: 'Inter, sans-serif', opacity: 0.85 }}
            >
              <span className="opacity-70">⚡ </span>{character.ability}
            </p>
          </div>
        )}
      </div>
    </div>
  );
    }
    
