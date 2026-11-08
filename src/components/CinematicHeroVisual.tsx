'use client';
import React, { useEffect, useRef } from 'react';

export const CinematicHeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle floating golden particle stardust effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      maxAlpha: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3 + 0.15,
      vy: -Math.random() * 0.6 - 0.2, // Drift upward from book
      size: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.6 + 0.2,
      maxAlpha: Math.random() * 0.6 + 0.3,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.015;

        // Reset if off-screen
        if (p.y < 0) {
          p.y = height + 10;
          p.x = width * 0.3 + Math.random() * (width * 0.5);
        }
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Golden / Coral Stardust
        const isCoral = i % 3 === 0;
        ctx.fillStyle = isCoral
          ? `rgba(255, 90, 54, ${Math.max(0.1, Math.min(0.8, p.alpha))})`
          : `rgba(255, 215, 120, ${Math.max(0.1, Math.min(0.85, p.alpha))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = isCoral ? '#FF5A36' : '#FFD166';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[700px] h-[480px] sm:h-[560px] md:h-[620px] mx-auto flex items-center justify-center select-none overflow-visible">
      {/* Background Volumetric Ambient Radiance */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full pointer-events-none blur-[90px] sm:blur-[120px] opacity-65"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,90,54,0.18) 0%, rgba(255,200,100,0.12) 35%, rgba(7,7,9,0) 70%)'
        }}
        aria-hidden="true"
      />

      {/* Interactive Stardust Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        aria-hidden="true"
      />

      {/* Main SVG Composition: 3D Open Hardcover Book + Luminous Flowing Wave with Integrated Typographic Fragments */}
      <svg
        viewBox="0 0 900 780"
        className="relative z-10 w-full h-full overflow-visible drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="A 3D cinematic open book with luminous story waves and reader discovery fragments flowing into space"
      >
        <defs>
          {/* Luminous Glow Filters */}
          <filter id="heroBloom" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="18" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Wave Path Gradients */}
          <linearGradient id="waveCoreGrad" x1="15%" y1="90%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#FFD166" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#FF5A36" stopOpacity="0.9" />
            <stop offset="90%" stopColor="#FF7A59" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFAA8A" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="waveSecondaryGrad" x1="20%" y1="85%" x2="85%" y2="15%">
            <stop offset="0%" stopColor="#FF5A36" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#FFA07A" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#FFD166" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF5A36" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="waveAuraGrad" x1="30%" y1="90%" x2="80%" y2="5%">
            <stop offset="0%" stopColor="#FF5A36" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#FFD166" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF5A36" stopOpacity="0" />
          </linearGradient>

          {/* Book Page Gradients (Warm Vellum & Luminous Core) */}
          <linearGradient id="leftPageGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ECE4D6" />
            <stop offset="60%" stopColor="#F9F6F0" />
            <stop offset="95%" stopColor="#FFF8EE" />
            <stop offset="100%" stopColor="#E2D7C3" />
          </linearGradient>

          <linearGradient id="rightPageGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#E2D7C3" />
            <stop offset="5%" stopColor="#FFF8EE" />
            <stop offset="40%" stopColor="#F9F6F0" />
            <stop offset="100%" stopColor="#ECE4D6" />
          </linearGradient>

          <linearGradient id="pageEdgesGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#D4C5AF" />
            <stop offset="50%" stopColor="#F2ECE0" />
            <stop offset="100%" stopColor="#9C8B74" />
          </linearGradient>

          <linearGradient id="hardcoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25232A" />
            <stop offset="50%" stopColor="#151419" />
            <stop offset="100%" stopColor="#0B0A0E" />
          </linearGradient>

          <linearGradient id="goldFoilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFDF73" />
            <stop offset="100%" stopColor="#B38F24" />
          </linearGradient>

          {/* Typographic Wave Tracks (Curving in 3D Perspective) */}
          <path
            id="textWaveTrack1"
            d="M 440 520 C 470 420, 520 340, 610 280 C 700 220, 770 170, 880 120"
          />
          <path
            id="textWaveTrack2"
            d="M 425 540 C 490 460, 550 370, 650 310 C 740 250, 810 190, 895 145"
          />
          <path
            id="textWaveTrack3"
            d="M 460 510 C 440 390, 480 290, 570 210 C 660 130, 750 90, 860 60"
          />
        </defs>

        {/* 1. Luminous Deep Light Flare Emitted from the Book Gutter */}
        <ellipse cx="450" cy="530" rx="160" ry="70" fill="url(#waveAuraGrad)" filter="url(#heroBloom)" />
        <ellipse cx="450" cy="525" rx="90" ry="40" fill="#FFF4D0" opacity="0.65" filter="url(#heroBloom)" />

        {/* 2. THE 3D OPEN HARDCOVER BOOK */}
        <g id="openBook3D" transform="translate(10, 30)">
          
          {/* Book Bottom Drop Shadow */}
          <ellipse cx="450" cy="620" rx="270" ry="55" fill="#000000" opacity="0.85" filter="url(#heroBloom)" />

          {/* HARDCOVER BASE: Dark obsidian board edges tilted open at ~120° */}
          {/* Left Cover Board */}
          <path
            d="M 180 545 L 438 565 L 438 580 L 175 560 Z"
            fill="#0E0D12"
            stroke="#2E2C36"
            strokeWidth="1.5"
          />
          {/* Right Cover Board */}
          <path
            d="M 442 565 L 700 545 L 705 560 L 442 580 Z"
            fill="#0E0D12"
            stroke="#2E2C36"
            strokeWidth="1.5"
          />
          {/* Center Spine Base (Curved leather binding) */}
          <path
            d="M 436 565 Q 440 572 444 565 L 444 582 Q 440 588 436 582 Z"
            fill="#D4AF37"
            stroke="#FFDF73"
            strokeWidth="0.8"
          />

          {/* STACKED PAGE EDGES (Fanned Vellum Trimming) */}
          {/* Left Block Pages Depth */}
          <path
            d="M 185 535 C 240 542, 360 552, 436 558 L 438 565 C 360 560, 240 550, 180 545 Z"
            fill="url(#pageEdgesGrad)"
            opacity="0.9"
          />
          {/* Right Block Pages Depth */}
          <path
            d="M 444 558 C 520 552, 640 542, 695 535 L 700 545 C 640 550, 520 560, 442 565 Z"
            fill="url(#pageEdgesGrad)"
            opacity="0.9"
          />

          {/* FANNED OPEN PAGES: Multiple layered curves giving 3D page leaf volume */}
          {/* Left Underleaf 1 */}
          <path
            d="M 436 552 C 340 535, 230 515, 195 500 C 230 520, 340 542, 436 555 Z"
            fill="#DDD3C1"
            opacity="0.5"
          />
          {/* Right Underleaf 1 */}
          <path
            d="M 444 552 C 540 535, 650 515, 685 500 C 650 520, 540 542, 444 555 Z"
            fill="#DDD3C1"
            opacity="0.5"
          />

          {/* Left Main Page (Graceful arch toward reader) */}
          <path
            d="M 438 554 C 330 540, 240 512, 198 488 C 242 468, 348 488, 438 506 Z"
            fill="url(#leftPageGrad)"
            stroke="#ECE4D6"
            strokeWidth="1.2"
          />
          {/* Right Main Page (Graceful symmetric arch toward reader) */}
          <path
            d="M 442 554 C 550 540, 640 512, 682 488 C 638 468, 532 488, 442 506 Z"
            fill="url(#rightPageGrad)"
            stroke="#ECE4D6"
            strokeWidth="1.2"
          />

          {/* Gilded Gold Page Edges Accent */}
          <path
            d="M 198 488 C 242 468, 348 488, 438 506"
            stroke="url(#goldFoilGrad)"
            strokeWidth="1.5"
            opacity="0.85"
          />
          <path
            d="M 682 488 C 638 468, 532 488, 442 506"
            stroke="url(#goldFoilGrad)"
            strokeWidth="1.5"
            opacity="0.85"
          />

          {/* Book Center Binding Seam Shadow & Gold Bookmark Ribbon */}
          <path
            d="M 439 506 L 441 556"
            stroke="#3B352E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Golden Ribbon Marker flowing downward */}
          <path
            d="M 440 508 C 445 528, 438 560, 448 595 L 452 590 L 455 602 L 444 598 Z"
            fill="url(#goldFoilGrad)"
            filter="url(#subtleGlow)"
          />

          {/* Subtle Faint Text Grid Lines on Open Pages (Representing Story Content) */}
          <g opacity="0.18" stroke="#121115" strokeWidth="1" strokeLinecap="round">
            {/* Left Page Lines */}
            <line x1="250" y1="495" x2="400" y2="515" />
            <line x1="245" y1="505" x2="405" y2="524" />
            <line x1="240" y1="515" x2="410" y2="533" />
            <line x1="235" y1="525" x2="415" y2="542" />
            {/* Right Page Lines */}
            <line x1="475" y1="515" x2="630" y2="495" />
            <line x1="470" y1="524" x2="635" y2="505" />
            <line x1="465" y1="533" x2="640" y2="515" />
            <line x1="460" y1="542" x2="645" y2="525" />
          </g>

          {/* Radiant Molten Light Spilling from Gutter */}
          <ellipse
            cx="440"
            cy="520"
            rx="28"
            ry="12"
            fill="#FFFFFF"
            filter="url(#heroBloom)"
          />
        </g>

        {/* 3. THE LUMINOUS FLOWING WAVE (Emerging from between the pages) */}
        {/* Layer A: Ambient Outer Volumetric Ribbon */}
        <path
          d="M 440 520 C 470 420, 520 330, 620 270 C 720 210, 780 160, 890 110"
          stroke="url(#waveAuraGrad)"
          strokeWidth="68"
          strokeLinecap="round"
          filter="url(#heroBloom)"
          opacity="0.8"
        />

        {/* Layer B: Translucent Secondary Coral Wave */}
        <path
          d="M 435 530 C 480 440, 540 350, 640 290 C 730 230, 800 170, 890 130"
          stroke="url(#waveSecondaryGrad)"
          strokeWidth="28"
          strokeLinecap="round"
          filter="url(#subtleGlow)"
          opacity="0.85"
        />

        {/* Layer C: Brilliant Golden Core Wave Beam */}
        <path
          d="M 440 515 C 470 415, 525 335, 615 275 C 705 215, 775 165, 885 115"
          stroke="url(#waveCoreGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#heroBloom)"
        />

        {/* Layer D: Intense Molten White Filament */}
        <path
          d="M 440 515 C 468 418, 522 338, 612 278 C 702 218, 772 168, 880 118"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.95"
        />

        {/* Additional Graceful Upward Arc: Counter-Wave Swirl */}
        <path
          d="M 445 510 C 430 380, 480 280, 570 205 C 660 130, 760 90, 870 55"
          stroke="url(#waveSecondaryGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          filter="url(#subtleGlow)"
          opacity="0.65"
        />
        <path
          d="M 445 510 C 430 380, 480 280, 570 205 C 660 130, 760 90, 870 55"
          stroke="url(#waveCoreGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* 4. TYPOGRAPHIC FRAGMENTS INTEGRATED DIRECTLY ALONG THE WAVE */}
        {/* Track 1: Primary Stream Text */}
        <text
          fill="url(#waveCoreGrad)"
          fontSize="12.5"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontWeight="700"
          letterSpacing="0.28em"
          filter="url(#subtleGlow)"
          opacity="0.95"
        >
          <textPath href="#textWaveTrack1" startOffset="3%">
            BOOK LAUNCH • READER DISCOVERY • STORYTELLING • BOOKTOK • CAMPAIGNS
          </textPath>
        </text>

        {/* Track 2: Secondary Stream Text */}
        <text
          fill="#FFF3D4"
          fontSize="11"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontWeight="600"
          letterSpacing="0.25em"
          filter="url(#subtleGlow)"
          opacity="0.82"
        >
          <textPath href="#textWaveTrack2" startOffset="8%">
            AUTHOR BRAND • PUBLISHING • BACKLIST REVIVAL • PODCASTS • READERS
          </textPath>
        </text>

        {/* Track 3: Upper Arc Light Whispers */}
        <text
          fill="#FFAA8A"
          fontSize="10"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontWeight="700"
          letterSpacing="0.32em"
          opacity="0.75"
        >
          <textPath href="#textWaveTrack3" startOffset="14%">
            ONE BOOK • A WORLD OF POSSIBILITIES • VIRAL LIFT • AUDIENCE
          </textPath>
        </text>

        {/* 5. Glistening Light Flares along the Wave Crests */}
        <circle cx="530" cy="335" r="4.5" fill="#FFFFFF" filter="url(#heroBloom)" />
        <circle cx="615" cy="275" r="5.5" fill="#FFD166" filter="url(#heroBloom)" />
        <circle cx="705" cy="215" r="4" fill="#FFFFFF" filter="url(#heroBloom)" />
        <circle cx="800" cy="155" r="3.5" fill="#FF7A59" filter="url(#heroBloom)" />
      </svg>
    </div>
  );
};
