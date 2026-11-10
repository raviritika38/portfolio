/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Typewriter: React.FC = () => {
  // Proportional, authentic typewriter key spacing (center at x = 230)
  // Row 1: 11 keys (numbers & symbols)
  const row1X = [114, 136, 158, 180, 202, 224, 246, 268, 290, 312, 334];
  // Row 2: 10 keys (QWERTY)
  const row2X = [122, 144, 166, 188, 210, 232, 254, 276, 298, 320];
  // Row 3: 10 keys (ASDF)
  const row3X = [126, 148, 170, 192, 214, 236, 258, 280, 302, 324];
  // Row 4: 9 keys (ZXCV)
  const row4X = [132, 154, 176, 198, 220, 242, 264, 286, 308];

  return (
    <div
      className="absolute select-none z-10"
      style={{
        left: 'clamp(22%, 24vw, 26%)',
        transform: 'translateX(-50%)',
        top: 'calc(50vh + clamp(8px, 1.6vh, 16px) - (clamp(135px, 35vw, 500px) * 0.174))',
        width: 'clamp(135px, 35vw, 500px)',
        maxHeight: '40vh',
      }}
    >
      <div className="typewriter-interactive cursor-pointer w-full h-full">
        <svg
          viewBox="0 0 460 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <defs>
            {/* Midnight Navy (#142841) Body Casing Gradient */}
            <linearGradient id="casingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1C3452" />
              <stop offset="30%" stopColor="#142841" />
              <stop offset="100%" stopColor="#0D1C2E" />
            </linearGradient>

            {/* Muted Slate Blue (#798DA6) Top Chamfer Gleam */}
            <linearGradient id="casingTopGleam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#798DA6" stopOpacity="0.3" />
              <stop offset="35%" stopColor="#9FB3CE" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#798DA6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#142841" stopOpacity="0.2" />
            </linearGradient>

            {/* Midnight Navy Platen Sheen */}
            <linearGradient id="platenSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#223C5E" />
              <stop offset="22%" stopColor="#2B4970" />
              <stop offset="45%" stopColor="#142841" />
              <stop offset="100%" stopColor="#0B1726" />
            </linearGradient>

            {/* Warm Ivory Cream (#FFF0D8) Keycap Gradient */}
            <linearGradient id="keycapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF7" />
              <stop offset="40%" stopColor="#FFF0D8" />
              <stop offset="100%" stopColor="#E9D6BE" />
            </linearGradient>

            {/* Warm Ivory Cream (#FFF0D8) Spacebar Gradient */}
            <linearGradient id="spacebarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF7" />
              <stop offset="35%" stopColor="#FFF0D8" />
              <stop offset="100%" stopColor="#E4D0B5" />
            </linearGradient>

            {/* Midnight Navy & Slate Blue Return Lever Gradient */}
            <linearGradient id="metalLeverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#798DA6" />
              <stop offset="50%" stopColor="#142841" />
              <stop offset="100%" stopColor="#0A1624" />
            </linearGradient>

            {/* Restrained Studio Contact and Ambient Shadows */}
            <filter id="softStudioShadow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6.5" />
            </filter>
            <filter id="tightContactShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
            </filter>
          </defs>

          {/* =========================================================
              1. GROUND CONTACT & AMBIENT SHADOW
              ========================================================= */}
          {/* Soft ambient spread in Midnight Navy / Burgundy tone */}
          <ellipse
            cx="230"
            cy="342"
            rx="182"
            ry="13"
            fill="#142841"
            opacity="0.16"
            filter="url(#softStudioShadow)"
          />
          {/* Direct under-chassis contact shadow */}
          <ellipse
            cx="230"
            cy="338"
            rx="164"
            ry="6"
            fill="#142841"
            opacity="0.28"
            filter="url(#tightContactShadow)"
          />

          {/* Rubber Base Feet */}
          <rect x="74" y="328" width="20" height="5.5" rx="1.5" fill="#0A1624" />
          <rect x="76" y="328" width="16" height="1.2" rx="0.6" fill="#798DA6" opacity="0.4" />
          <rect x="366" y="328" width="20" height="5.5" rx="1.5" fill="#0A1624" />
          <rect x="368" y="328" width="16" height="1.2" rx="0.6" fill="#798DA6" opacity="0.4" />

          {/* =========================================================
              2. CARRIAGE RETURN LEVER (Articulated Vintage Arm)
              ========================================================= */}
          {/* Pivot block on carriage */}
          <rect x="84" y="60" width="8" height="12" rx="1.5" fill="#142841" stroke="#0A1624" strokeWidth="0.8" />
          <circle cx="88" cy="66" r="2.2" fill="#798DA6" />

          {/* Forged metal return lever arm */}
          <path
            d="M 86 64 C 66 62 46 48 39 32 C 36 26 31 27 30 33 C 31 47 48 69 84 71 Z"
            fill="url(#metalLeverGrad)"
            stroke="#0A1624"
            strokeWidth="0.9"
          />
          {/* Crisp Muted Slate Blue (#798DA6) highlight spine */}
          <path
            d="M 83 66 C 64 63 47 50 41 35"
            stroke="#798DA6"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Ergonomic tapered finger paddle */}
          <path
            d="M 33 24 C 37 22 41 24 40 29 C 39 34 34 35 30 33 C 28 30 29 25 33 24 Z"
            fill="#142841"
            stroke="#798DA6"
            strokeWidth="0.8"
          />
          <circle cx="34.5" cy="27" r="1.4" fill="#FFF0D8" opacity="0.85" />

          {/* =========================================================
              3. CARRIAGE & ROLLER ASSEMBLY
              ========================================================= */}
          {/* Paper table / deflector backplate */}
          <path
            d="M 98 44 L 362 44 L 366 62 L 94 62 Z"
            fill="#142841"
            stroke="#0A1624"
            strokeWidth="0.9"
          />
          {/* Backplate top Muted Slate Blue brushed metal trim */}
          <line x1="99" y1="45" x2="361" y2="45" stroke="#798DA6" strokeWidth="1.2" />
          <line x1="102" y1="48" x2="358" y2="48" stroke="#490B1A" strokeWidth="0.8" opacity="0.4" />

          {/* Carriage Chassis Base Rail */}
          <rect
            x="78"
            y="60"
            width="304"
            height="18"
            rx="2.5"
            fill="#142841"
            stroke="#0A1624"
            strokeWidth="0.9"
          />
          {/* Carriage rail upper highlight strip */}
          <line x1="82" y1="61.5" x2="378" y2="61.5" stroke="#798DA6" strokeWidth="1" opacity="0.8" />

          {/* Left Carriage End Plate */}
          <rect x="74" y="49" width="16" height="26" rx="2" fill="#1B3250" stroke="#0A1624" strokeWidth="0.9" />
          {/* Left Platen Knob (Finely knurled cylinder with Slate Blue hub) */}
          <rect x="62" y="52" width="12" height="20" rx="1.8" fill="#0D1C2E" stroke="#070F19" strokeWidth="0.8" />
          <line x1="64.5" y1="54" x2="64.5" y2="70" stroke="#798DA6" strokeWidth="0.9" opacity="0.8" />
          <line x1="68" y1="54" x2="68" y2="70" stroke="#798DA6" strokeWidth="0.9" opacity="0.8" />
          <line x1="71.5" y1="54" x2="71.5" y2="70" stroke="#798DA6" strokeWidth="0.9" opacity="0.8" />
          <rect x="60.5" y="58" width="2" height="8" rx="0.8" fill="#798DA6" />

          {/* Right Carriage End Plate */}
          <rect x="370" y="49" width="16" height="26" rx="2" fill="#1B3250" stroke="#0A1624" strokeWidth="0.9" />
          {/* Right Platen Knob */}
          <rect x="386" y="52" width="12" height="20" rx="1.8" fill="#0D1C2E" stroke="#070F19" strokeWidth="0.8" />
          <line x1="388.5" y1="54" x2="388.5" y2="70" stroke="#798DA6" strokeWidth="0.9" opacity="0.8" />
          <line x1="392" y1="54" x2="392" y2="70" stroke="#798DA6" strokeWidth="0.9" opacity="0.8" />
          <line x1="395.5" y1="54" x2="395.5" y2="70" stroke="#798DA6" strokeWidth="0.9" opacity="0.8" />
          <rect x="397.5" y="58" width="2" height="8" rx="0.8" fill="#798DA6" />

          {/* Platen Roller Cylinder (EMPTY, NO PAPER) */}
          <rect
            x="90"
            y="48"
            width="280"
            height="23"
            rx="2.5"
            fill="url(#platenSheen)"
            stroke="#0A1624"
            strokeWidth="0.9"
          />
          {/* Fine cylindrical reflection highlight */}
          <line x1="92" y1="51" x2="368" y2="51" stroke="#798DA6" strokeWidth="1" opacity="0.5" />

          {/* Paper Bail Bar (Slim Muted Slate Blue #798DA6 steel rod) */}
          <line x1="92" y1="65" x2="368" y2="65" stroke="#798DA6" strokeWidth="1.6" strokeLinecap="round" />
          {/* Bail Bar Small Rubber Grip Rollers */}
          <rect x="150" y="63" width="7" height="4.5" rx="1" fill="#0A1624" stroke="#070F19" strokeWidth="0.5" />
          <rect x="303" y="63" width="7" height="4.5" rx="1" fill="#0A1624" stroke="#070F19" strokeWidth="0.5" />

          {/* Carriage Margin Ruler & Scale Index */}
          <line x1="175" y1="74" x2="285" y2="74" stroke="#798DA6" strokeWidth="0.8" opacity="0.6" />
          <line x1="195" y1="72" x2="195" y2="74" stroke="#798DA6" strokeWidth="0.8" opacity="0.6" />
          <line x1="215" y1="72" x2="215" y2="74" stroke="#798DA6" strokeWidth="0.8" opacity="0.6" />
          <line x1="230" y1="71" x2="230" y2="74" stroke="#FFF0D8" strokeWidth="1" />
          <line x1="245" y1="72" x2="245" y2="74" stroke="#798DA6" strokeWidth="0.8" opacity="0.6" />
          <line x1="265" y1="72" x2="265" y2="74" stroke="#798DA6" strokeWidth="0.8" opacity="0.6" />

          {/* =========================================================
              4. MAIN BODY CASING (Midnight Navy #142841 with Slate Accents)
              ========================================================= */}
          {/* Lower Main Chassis Shell */}
          <path
            d="M 52 328 C 45 328 40 323 42 316 L 68 174 C 70 165 78 158 88 158 L 372 158 C 382 158 390 165 392 174 L 418 316 C 420 323 415 328 408 328 Z"
            fill="url(#casingGrad)"
            stroke="#0A1624"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />

          {/* Left Side Tonal Plane for authentic 3D form */}
          <path
            d="M 42 316 L 68 174 C 70 165 78 158 88 158 L 102 158 L 74 316 C 72 323 66 328 58 328 L 52 328 C 45 328 40 323 42 316 Z"
            fill="#081320"
            opacity="0.45"
          />

          {/* Front Apron Underside Bevel Shadow */}
          <path
            d="M 44 321 C 58 326 120 328 230 328 C 340 328 402 326 416 321 C 404 326 332 328 230 328 C 128 328 56 326 44 321 Z"
            fill="#050B13"
            opacity="0.5"
          />

          {/* Upper Cowl / Ribbon Cover Hood */}
          <path
            d="M 90 78 C 82 78 75 84 73 92 L 67 156 C 67 157.5 68 158.5 70 158.5 L 390 158.5 C 392 158.5 393 157.5 393 156 L 387 92 C 385 84 378 78 370 78 Z"
            fill="url(#casingGrad)"
            stroke="#0A1624"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />

          {/* Muted Slate Blue (#798DA6) Top Chamfer Highlight */}
          <path
            d="M 91 80 C 85 80 80 84 79 90 L 76 102 C 76 103 77 104 78 104 L 382 104 C 383 104 384 103 384 102 L 381 90 C 380 84 375 80 369 80 Z"
            fill="url(#casingTopGleam)"
          />
          {/* Subtle parting line between upper chamfer and face */}
          <line x1="77" y1="104" x2="383" y2="104" stroke="#798DA6" strokeWidth="0.8" opacity="0.4" />

          {/* Cowl-to-chassis precise mechanical seam line */}
          <line x1="68" y1="156" x2="392" y2="156" stroke="#0A1624" strokeWidth="0.9" />

          {/* Left Ribbon Spool Stamping */}
          <rect
            x="106"
            y="93"
            width="64"
            height="42"
            rx="6"
            fill="#142841"
            stroke="#0A1624"
            strokeWidth="0.9"
          />
          <rect x="107" y="94" width="62" height="2" rx="1" fill="#798DA6" opacity="0.75" />
          <rect x="107" y="132" width="62" height="2" rx="1" fill="#0A1624" opacity="0.5" />
          {/* Spool Center Inspection Screw */}
          <circle cx="138" cy="114" r="5" fill="#1B3250" stroke="#0A1624" strokeWidth="0.8" />
          <circle cx="138" cy="114" r="3" fill="#798DA6" />
          <line x1="136" y1="114" x2="140" y2="114" stroke="#0A1624" strokeWidth="0.7" />

          {/* Right Ribbon Spool Stamping */}
          <rect
            x="290"
            y="93"
            width="64"
            height="42"
            rx="6"
            fill="#142841"
            stroke="#0A1624"
            strokeWidth="0.9"
          />
          <rect x="291" y="94" width="62" height="2" rx="1" fill="#798DA6" opacity="0.75" />
          <rect x="291" y="132" width="62" height="2" rx="1" fill="#0A1624" opacity="0.5" />
          <circle cx="322" cy="114" r="5" fill="#1B3250" stroke="#0A1624" strokeWidth="0.8" />
          <circle cx="322" cy="114" r="3" fill="#798DA6" />
          <line x1="320" y1="114" x2="324" y2="114" stroke="#0A1624" strokeWidth="0.7" />

          {/* =========================================================
              5. TYPEBAR BASKET & MECHANICAL SEGMENT
              ========================================================= */}
          {/* Recessed typebar segment cavity */}
          <path
            d="M 184 148 C 184 116 276 116 276 148 Z"
            fill="#0B1624"
            stroke="#0A1624"
            strokeWidth="1.1"
          />
          {/* Segment upper rim shadow */}
          <path
            d="M 186 146 C 188 122 272 122 274 146 C 268 143 192 143 186 146 Z"
            fill="#060C14"
          />

          {/* Slender precision steel typebars converging toward strike point */}
          <line x1="196" y1="145" x2="225" y2="121" stroke="#798DA6" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
          <line x1="206" y1="145" x2="227" y2="119" stroke="#798DA6" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
          <line x1="216" y1="145" x2="229" y2="117" stroke="#9AB0CD" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="225" y1="145" x2="230" y2="116" stroke="#798DA6" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="235" y1="145" x2="230" y2="116" stroke="#798DA6" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="244" y1="145" x2="231" y2="117" stroke="#9AB0CD" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="254" y1="145" x2="233" y2="119" stroke="#798DA6" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
          <line x1="264" y1="145" x2="235" y2="121" stroke="#798DA6" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />

          {/* Central Type Guide Fork */}
          <path d="M 226 122 L 230 110 L 234 122 Z" fill="#0A1624" stroke="#798DA6" strokeWidth="0.7" />
          {/* Deep Burgundy (#490B1A) Ribbon Indicator */}
          <line x1="227" y1="117" x2="233" y2="117" stroke="#490B1A" strokeWidth="1.2" />

          {/* =========================================================
              6. RECESSED KEYBOARD HOUSING
              ========================================================= */}
          {/* Architectural recessed keyboard well */}
          <rect
            x="78"
            y="164"
            width="304"
            height="142"
            rx="6"
            fill="#0D1A29"
            stroke="#08111B"
            strokeWidth="1.1"
          />
          {/* Recessed upper bevel / cast shadow */}
          <path
            d="M 80 172 C 80 167 83 165 88 165 L 372 165 C 377 165 380 167 380 172 L 380 168 C 380 166 377 165 372 165 L 88 165 C 83 165 80 166 80 168 Z"
            fill="#070E17"
          />
          {/* Bottom interior reflection line */}
          <line x1="86" y1="304" x2="374" y2="304" stroke="#798DA6" strokeWidth="0.8" opacity="0.3" />

          {/* =========================================================
              7. PRECISE, PROPORTIONATE IVORY KEYS (#FFF0D8)
              ========================================================= */}
          {/* ROW 1: 11 Small Proportionate Keys (y = 175) */}
          {row1X.map((x, i) => (
            <g key={`r1-${i}`}>
              <rect x={x + 4.5} y={184} width={3} height={3} fill="#0A1624" />
              <rect x={x} y={176.5} width={12} height={10} rx={2.2} fill="#798DA6" opacity="0.6" />
              <rect
                x={x}
                y={175}
                width={12}
                height={10}
                rx={2.2}
                fill="url(#keycapGrad)"
                stroke="#142841"
                strokeWidth="0.75"
              />
              <line x1={x + 2} y1={176} x2={x + 10} y2={176} stroke="#FFF" strokeWidth="0.6" opacity="0.7" />
            </g>
          ))}

          {/* ROW 2: 10 Keys (y = 196) */}
          {/* Left Function Key */}
          <g>
            <rect x={98} y={197.5} width={16} height={10} rx={2} fill="#798DA6" opacity="0.6" />
            <rect x={98} y={196} width={16} height={10} rx={2} fill="url(#keycapGrad)" stroke="#142841" strokeWidth="0.75" />
          </g>
          {row2X.map((x, i) => (
            <g key={`r2-${i}`}>
              <rect x={x + 4.5} y={205} width={3} height={3} fill="#0A1624" />
              <rect x={x} y={197.5} width={12} height={10} rx={2.2} fill="#798DA6" opacity="0.6" />
              <rect
                x={x}
                y={196}
                width={12}
                height={10}
                rx={2.2}
                fill="url(#keycapGrad)"
                stroke="#142841"
                strokeWidth="0.75"
              />
              <line x1={x + 2} y1={197} x2={x + 10} y2={197} stroke="#FFF" strokeWidth="0.6" opacity="0.7" />
            </g>
          ))}
          {/* Right Tab Key */}
          <g>
            <rect x={342} y={197.5} width={16} height={10} rx={2} fill="#798DA6" opacity="0.6" />
            <rect x={342} y={196} width={16} height={10} rx={2} fill="url(#keycapGrad)" stroke="#142841" strokeWidth="0.75" />
          </g>

          {/* ROW 3: 10 Keys (y = 217) */}
          {/* Left Shift Lock Key */}
          <g>
            <rect x={100} y={218.5} width={18} height={10} rx={2} fill="#798DA6" opacity="0.6" />
            <rect x={100} y={217} width={18} height={10} rx={2} fill="url(#keycapGrad)" stroke="#142841" strokeWidth="0.75" />
          </g>
          {row3X.map((x, i) => (
            <g key={`r3-${i}`}>
              <rect x={x + 4.5} y={226} width={3} height={3} fill="#0A1624" />
              <rect x={x} y={218.5} width={12} height={10} rx={2.2} fill="#798DA6" opacity="0.6" />
              <rect
                x={x}
                y={217}
                width={12}
                height={10}
                rx={2.2}
                fill="url(#keycapGrad)"
                stroke="#142841"
                strokeWidth="0.75"
              />
              <line x1={x + 2} y1={218} x2={x + 10} y2={218} stroke="#FFF" strokeWidth="0.6" opacity="0.7" />
            </g>
          ))}
          {/* Right Return Key */}
          <g>
            <rect x={344} y={218.5} width={18} height={10} rx={2} fill="#798DA6" opacity="0.6" />
            <rect x={344} y={217} width={18} height={10} rx={2} fill="url(#keycapGrad)" stroke="#142841" strokeWidth="0.75" />
          </g>

          {/* ROW 4: 9 Keys (y = 238) flanked by balanced Shift keys */}
          {/* Left Shift Key */}
          <g>
            <rect x={98} y={239.5} width={24} height={10.5} rx={2} fill="#798DA6" opacity="0.6" />
            <rect x={98} y={238} width={24} height={10.5} rx={2} fill="url(#keycapGrad)" stroke="#142841" strokeWidth="0.75" />
          </g>
          {row4X.map((x, i) => (
            <g key={`r4-${i}`}>
              <rect x={x + 4.5} y={247} width={3} height={3} fill="#0A1624" />
              <rect x={x} y={239.5} width={12} height={10} rx={2.2} fill="#798DA6" opacity="0.6" />
              <rect
                x={x}
                y={238}
                width={12}
                height={10}
                rx={2.2}
                fill="url(#keycapGrad)"
                stroke="#142841"
                strokeWidth="0.75"
              />
              <line x1={x + 2} y1={239} x2={x + 10} y2={239} stroke="#FFF" strokeWidth="0.6" opacity="0.7" />
            </g>
          ))}
          {/* Right Shift Key */}
          <g>
            <rect x={338} y={239.5} width={24} height={10.5} rx={2} fill="#798DA6" opacity="0.6" />
            <rect x={338} y={238} width={24} height={10.5} rx={2} fill="url(#keycapGrad)" stroke="#142841" strokeWidth="0.75" />
          </g>

          {/* =========================================================
              8. BOTTOM ROW: SPACEBAR & CONTROL SWITCHES (y = 262)
              ========================================================= */}
          {/* Left Margin Release Key */}
          <g>
            <rect x={112} y={263.5} width={20} height={11} rx={2} fill="#798DA6" opacity="0.6" />
            <rect x={112} y={262} width={20} height={11} rx={2} fill="url(#keycapGrad)" stroke="#142841" strokeWidth="0.75" />
          </g>

          {/* Proportionate Centered Warm Ivory Spacebar (#FFF0D8) */}
          <g>
            {/* Spacebar underlying pivot links */}
            <rect x={158} y={272} width={4} height={3} fill="#0A1624" />
            <rect x={298} y={272} width={4} height={3} fill="#0A1624" />
            {/* Spacebar base shadow */}
            <rect x={140} y={263.5} width={180} height={11} rx={2.5} fill="#798DA6" opacity="0.5" />
            {/* Spacebar face */}
            <rect
              x={140}
              y={262}
              width={180}
              height={11}
              rx={2.5}
              fill="url(#spacebarGrad)"
              stroke="#142841"
              strokeWidth="0.8"
            />
            {/* Top bevel highlight line on spacebar */}
            <line
              x1="144"
              y1="263.2"
              x2="316"
              y2="263.2"
              stroke="#FFF"
              strokeWidth="0.6"
              opacity="0.7"
            />
          </g>

          {/* Right Repeat/Margin Key */}
          <g>
            <rect x={328} y={263.5} width={20} height={11} rx={2} fill="#798DA6" opacity="0.6" />
            <rect x={328} y={262} width={20} height={11} rx={2} fill="url(#keycapGrad)" stroke="#142841" strokeWidth="0.75" />
          </g>

          {/* Dual-Color Ribbon Switch Accent */}
          <g>
            <rect x={354} y={261} width={13} height={13} rx={2} fill="#0A1624" stroke="#070F19" strokeWidth="0.7" />
            {/* Midnight Navy ribbon dot */}
            <circle cx={360.5} cy={264.5} r="1.6" fill="#142841" />
            {/* Deep Burgundy (#490B1A) ribbon dot */}
            <circle cx={360.5} cy={270.5} r="1.6" fill="#490B1A" />
            {/* Muted Slate Blue (#798DA6) selector toggle lever */}
            <rect x={358.5} y={263} width="4" height="2" rx="0.5" fill="#798DA6" />
          </g>
        </svg>
      </div>
    </div>
  );
};
