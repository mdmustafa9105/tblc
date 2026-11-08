'use client';
import React, { useState, useEffect, useRef } from 'react';

interface InteractiveBook3DProps {
  onOpenBooking?: () => void;
}

export const InteractiveBook3D: React.FC<InteractiveBook3DProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<HTMLDivElement | null>(null);
  const sheenRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animId: number;
    let prefersReduced = false;

    if (typeof window !== 'undefined') {
      prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Default resting 3/4 perspective angles matching reference
    const baseRotX = 14;   // slightly tilted back so bottom gilded edge is visible
    const baseRotY = -24;  // angled so spine is visible on left and fore-edge on right
    const baseRotZ = -3;   // natural editorial tilt

    let currentRotX = baseRotX;
    let currentRotY = baseRotY;
    let currentRotZ = baseRotZ;

    let targetRotX = baseRotX;
    let targetRotY = baseRotY;
    let targetRotZ = baseRotZ;

    let sheenX = 40;
    let sheenY = 30;
    let targetSheenX = 40;
    let targetSheenY = 30;

    let scrollY = 0;
    let isMouseActive = false;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReduced) return;
      isMouseActive = true;

      const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      // Damped interactive tilt (clamped to natural physical range)
      targetRotY = baseRotY + normX * 16;
      targetRotX = baseRotX - normY * 12;
      targetRotZ = baseRotZ + normX * 3;

      // Dynamic sheen angle across gold foil cover
      targetSheenX = 50 + normX * 45;
      targetSheenY = 50 + normY * 45;
    };

    const handleMouseLeave = () => {
      isMouseActive = false;
      targetRotX = baseRotX;
      targetRotY = baseRotY;
      targetRotZ = baseRotZ;
      targetSheenX = 40;
      targetSheenY = 30;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const loop = () => {
      time += 0.016;

      if (!prefersReduced) {
        // Continuous gentle floating motion in space
        const floatY = Math.sin(time * 1.2) * 9;
        const floatRot = Math.cos(time * 0.9) * 1.2;

        // Subtle scroll parallax
        const parallaxY = scrollY * 0.18;
        const parallaxZ = -Math.min(scrollY * 0.25, 80);

        // Smooth spring lerp interpolation for mouse tilt
        currentRotX += (targetRotX - currentRotX) * 0.08;
        currentRotY += (targetRotY - currentRotY) * 0.08;
        currentRotZ += (targetRotZ - currentRotZ) * 0.08;

        sheenX += (targetSheenX - sheenX) * 0.08;
        sheenY += (targetSheenY - sheenY) * 0.08;

        if (bookRef.current) {
          const finalRotX = currentRotX + floatRot;
          const finalRotY = currentRotY;
          const finalRotZ = currentRotZ + floatRot * 0.5;
          const finalTransY = floatY + parallaxY;
          const finalTransZ = parallaxZ;

          bookRef.current.style.transform = `translate3d(0, ${finalTransY}px, ${finalTransZ}px) rotateX(${finalRotX}deg) rotateY(${finalRotY}deg) rotateZ(${finalRotZ}deg)`;
        }

        if (sheenRef.current) {
          sheenRef.current.style.background = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 235, 175, 0.45) 0%, rgba(212, 175, 55, 0.15) 35%, transparent 70%)`;
        }

        if (shadowRef.current) {
          const shadowScale = 1 - (floatY / 9) * 0.08;
          const shadowOpacity = 0.55 - (floatY / 9) * 0.1;
          shadowRef.current.style.transform = `translateX(-50%) translateY(160px) rotateX(85deg) scale(${shadowScale})`;
          shadowRef.current.style.opacity = `${shadowOpacity}`;
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full min-h-[460px] sm:min-h-[520px] select-none"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 48%',
      }}
      aria-label="Interactive 3D Hardcover Book: The Book Launch Company"
    >
      {/* Dynamic Ground Contact Drop Shadow */}
      <div
        ref={shadowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-12 w-[320px] sm:w-[380px] h-[90px] rounded-full blur-[24px] bg-black/75 transition-opacity"
        style={{
          transform: 'translateX(-50%) translateY(160px) rotateX(85deg)',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 75%)',
        }}
      />

      {/* The 3D Book Object Container */}
      <div
        ref={bookRef}
        className="relative w-[240px] h-[350px] sm:w-[270px] sm:h-[395px] lg:w-[290px] lg:h-[425px] transition-transform duration-75 ease-out cursor-grab active:cursor-grabbing"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(14deg) rotateY(-24deg) rotateZ(-3deg)',
        }}
      >
        {/* ============================================================ */}
        {/* FACE 1: FRONT HARDCOVER BOARD (+Z plane) */}
        {/* ============================================================ */}
        <div
          className="absolute inset-0 rounded-[4px] overflow-hidden bg-[#0A0C10] border border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          style={{
            transform: 'translateZ(20px)',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Subtle Leather / Cloth Texture Background */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, #1A1D24 0%, #0A0C10 100%)',
            }}
          />

          {/* Spine Fold / Crease Shadow on left edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-[14px] z-20"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)',
            }}
          />

          {/* Dynamic Interactive Specular Sheen (Glides on mouse tilt) */}
          <div
            ref={sheenRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 mix-blend-screen opacity-90 transition-opacity"
          />

          {/* Front Cover Artwork & Gold Foil Details */}
          <div className="relative z-10 h-full w-full p-6 sm:p-7 flex flex-col justify-between text-center">
            
            {/* Double Gold Foil Border Frame with Corner Diamond Ornaments */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 sm:inset-3.5 border border-[#D4AF37]/65 rounded-[2px]"
            >
              <div className="absolute inset-1 sm:inset-1.5 border border-[#D4AF37]/35" />
              {/* 4 Corner Diamond Flourishes */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D4AF37] rotate-45" />
            </div>

            {/* Top Brand Kicker */}
            <div className="relative pt-2">
              <span
                className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase block"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF3D1 0%, #E0B853 45%, #9E7D23 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                The Book Launch Company
              </span>
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent mx-auto mt-2" />
            </div>

            {/* Celestial Armillary Orbit & Starlight Graphic */}
            <div className="relative my-auto py-2 flex items-center justify-center">
              <svg
                viewBox="0 0 160 160"
                className="w-28 h-28 sm:w-32 sm:h-32 text-[#D4AF37] opacity-60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                aria-hidden="true"
              >
                {/* Concentric Celestial Orbit Rings */}
                <circle cx="80" cy="80" r="70" strokeDasharray="3 3" opacity="0.4" />
                <ellipse cx="80" cy="80" rx="68" ry="26" transform="rotate(-30 80 80)" />
                <ellipse cx="80" cy="80" rx="68" ry="26" transform="rotate(30 80 80)" />
                <circle cx="80" cy="80" r="38" opacity="0.6" />
                <circle cx="80" cy="80" r="14" fill="#D4AF37" fillOpacity="0.15" />
                <path d="M80 8 L80 152 M8 80 L152 80" strokeDasharray="2 4" opacity="0.35" />
                {/* 4-Point Starlight Sparkle Center */}
                <path d="M80 68 L80 92 M68 80 L92 80" strokeWidth="1.6" stroke="#FFE9A8" />
              </svg>
            </div>

            {/* Center Book Title & Manifesto */}
            <div className="relative space-y-1.5 pb-2">
              <h3
                className="font-serif text-[19px] sm:text-[23px] font-bold tracking-[0.03em] leading-[1.2] uppercase"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF6DA 0%, #E6C265 30%, #C4972B 70%, #F5DE9C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
                }}
              >
                Launch The Book.
                <br />
                Build The Author.
              </h3>
            </div>

            {/* Bottom Publisher Edition Seal */}
            <div className="relative border-t border-[#D4AF37]/30 pt-2 flex items-center justify-between text-[8px] sm:text-[9px] font-mono tracking-wider text-[#D4AF37]/80 uppercase">
              <span>First Edition</span>
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45" />
              <span>MMXXVI</span>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* FACE 2: BACK HARDCOVER BOARD (-Z plane) */}
        {/* ============================================================ */}
        <div
          className="absolute inset-0 rounded-[4px] bg-[#0A0C10] border border-[#D4AF37]/30"
          style={{
            transform: 'rotateY(180deg) translateZ(20px)',
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="w-full h-full p-6 flex flex-col justify-between text-center text-[#D4AF37]/40 text-[9px] font-mono">
            <div className="border border-[#D4AF37]/20 h-full w-full rounded flex items-center justify-center p-4">
              <span>The Book Launch Company</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* FACE 3: SPINE (Left Face) */}
        {/* ============================================================ */}
        <div
          className="absolute left-0 top-0 w-[40px] h-full overflow-hidden text-center flex flex-col justify-between py-6 text-white border-y border-l border-[#D4AF37]/40"
          style={{
            transformOrigin: 'left center',
            transform: 'rotateY(-90deg) translateZ(0px)',
            background:
              'linear-gradient(to right, #080A0D 0%, #161922 45%, #080A0D 100%)',
          }}
        >
          {/* Top Spine Gold Band */}
          <div className="border-b border-[#D4AF37]/60 pb-1 mx-2">
            <span className="block text-[7px] font-mono text-[#D4AF37]/80 tracking-widest">
              TBLC
            </span>
          </div>

          {/* Vertical Spine Title in Gold Foil */}
          <div
            className="my-auto font-sans font-semibold text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase whitespace-nowrap"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              background:
                'linear-gradient(to bottom, #FFE8A3 0%, #D4AF37 50%, #9E7D23 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            The Book Launch Company
          </div>

          {/* Bottom Spine Gold Colophon */}
          <div className="border-t border-[#D4AF37]/60 pt-1 mx-2">
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 mx-auto opacity-70" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* FACE 4: RIGHT GILDED FORE-EDGE (Pages Face) */}
        {/* ============================================================ */}
        <div
          className="absolute right-0 top-0 w-[40px] h-full"
          style={{
            transformOrigin: 'right center',
            transform: 'rotateY(90deg) translateZ(0px)',
            background:
              'repeating-linear-gradient(to bottom, #E8D3A2 0px, #E8D3A2 1px, #B6924C 1px, #B6924C 2px, #F0DEC0 2px, #F0DEC0 3px)',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
          }}
        >
          {/* Subtle Page Edge Shadowing */}
          <div
            className="w-full h-full pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </div>

        {/* ============================================================ */}
        {/* FACE 5: TOP GILDED PAGE EDGE */}
        {/* ============================================================ */}
        <div
          className="absolute top-0 left-0 w-full h-[40px]"
          style={{
            transformOrigin: 'top center',
            transform: 'rotateX(90deg) translateZ(0px)',
            background:
              'repeating-linear-gradient(to right, #E8D3A2 0px, #E8D3A2 1px, #B6924C 1px, #B6924C 2px, #F0DEC0 2px, #F0DEC0 3px)',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.4)',
          }}
        />

        {/* ============================================================ */}
        {/* FACE 6: BOTTOM GILDED PAGE EDGE */}
        {/* ============================================================ */}
        <div
          className="absolute bottom-0 left-0 w-full h-[40px]"
          style={{
            transformOrigin: 'bottom center',
            transform: 'rotateX(-90deg) translateZ(0px)',
            background:
              'repeating-linear-gradient(to right, #E8D3A2 0px, #E8D3A2 1px, #B6924C 1px, #B6924C 2px, #F0DEC0 2px, #F0DEC0 3px)',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.5)',
          }}
        />

      </div>
    </div>
  );
};

