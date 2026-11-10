/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const ManuscriptPaper: React.FC = () => {
  return (
    <div
      className="absolute select-none z-[5]"
      style={{
        left: 'clamp(22%, 24vw, 26%)',
        transform: 'translateX(-50%)',
        width: 'calc(clamp(135px, 35vw, 500px) * 0.48)',
        maxWidth: '240px',
        minWidth: '105px',
        top: 0,
        bottom: 'calc(100vh - (50vh + clamp(8px, 1.6vh, 16px) - (clamp(135px, 35vw, 500px) * 0.07)))',
        backgroundColor: '#FFF0D8',
        backgroundImage: 'linear-gradient(180deg, #FFF5E4 0%, #FFF0D8 50%, #FCEFD8 100%)',
        boxShadow: '0 4px 18px rgba(73, 11, 26, 0.20), 0 1px 4px rgba(20, 40, 65, 0.12)',
      }}
    >
      {/* 
        Subtle Vintage Paper Texture:
        Fine, organic cotton-fiber simulation with delicate tonal variation.
      */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[35] mix-blend-multiply opacity-[0.038]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="stationery-fibers" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.18   0 0 0 0 0.14   0 0 0 0 0.09   0 0 0 0.65 0"
              result="coloredNoise"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#stationery-fibers)" />
      </svg>

      {/* 
        Three individually interactive paper sections in Warm Ivory Cream (#FFF0D8).
        Calibrated with uniform vertical grid, equal padding, standardized typography,
        and identical category pill metrics.
      */}

      {/* Section 1 (Top 1/3): Ritika Ravi + Resume */}
      <a
        href="/Ritika-Ravi-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Ritika Ravi Resume PDF in a new tab"
        title="Open Ritika Ravi Resume PDF"
        className="paper-section-interactive absolute left-0 right-0 cursor-pointer bg-[#FFF0D8] px-2 pt-2 sm:px-3 sm:pt-3 flex flex-col items-start overflow-hidden text-inherit no-underline focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#490B1A]"
        style={{
          top: 0,
          height: '33.333%',
        }}
      >
        {/* Large search/address bar: Ritika Ravi */}
        <div className="w-full h-[18px] sm:h-[22px] px-1.5 sm:px-2.5 rounded-full bg-[#EFE0CC] border border-[#D8C4AC]/70 flex items-center shadow-[inset_0_1px_2px_rgba(20,40,65,0.04)]">
          <div className="flex items-center gap-[2.5px] sm:gap-[3.5px] shrink-0 mr-1.5 sm:mr-2">
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#490B1A]" />
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#798DA6]" />
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#CBB79F]" />
          </div>
          <span className="font-mono text-[7px] xs:text-[8px] sm:text-[9px] font-medium text-[#142841] tracking-tight select-none truncate">
            Ritika Ravi
          </span>
        </div>

        {/* Category pill: Resume */}
        <div className="mt-1.5 sm:mt-2">
          <span className="h-[15px] sm:h-[19px] px-1.5 sm:px-2 rounded-full bg-[#EFE0CC] border border-[#D8C4AC]/60 inline-flex items-center text-[#142841] font-mono text-[6px] xs:text-[6.5px] sm:text-[7.5px] font-semibold tracking-widest uppercase shadow-[inset_0_1px_2px_rgba(20,40,65,0.04)] select-none">
            Resume
          </span>
        </div>
      </a>

      {/* Divider 1: Between Section 1 and Section 2 (Midnight Navy #142841 dashed perforation) */}
      <div
        className="absolute left-0 w-full -translate-y-1/2 pointer-events-none z-30"
        style={{ top: '33.333%' }}
      >
        <svg className="w-full h-[2px] block overflow-visible">
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="#142841"
            strokeWidth="1"
            strokeDasharray="4 3.5"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* Section 2 (Middle 1/3): Impulse Coffees + PROJECT */}
      <a
        href="https://impulsecoffeesritikaravi.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Impulse Coffees project website in a new tab"
        title="Open Impulse Coffees Project Website"
        className="paper-section-interactive absolute left-0 right-0 cursor-pointer bg-[#FFF0D8] px-2 pt-2 sm:px-3 sm:pt-3 flex flex-col items-start overflow-hidden text-inherit no-underline focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#490B1A]"
        style={{
          top: '33.333%',
          height: '33.333%',
        }}
      >
        {/* Large search/address bar: Impulse Coffees */}
        <div className="w-full h-[18px] sm:h-[22px] px-1.5 sm:px-2.5 rounded-full bg-[#EFE0CC] border border-[#D8C4AC]/70 flex items-center shadow-[inset_0_1px_2px_rgba(20,40,65,0.04)]">
          <div className="flex items-center gap-[2.5px] sm:gap-[3.5px] shrink-0 mr-1.5 sm:mr-2">
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#490B1A]" />
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#798DA6]" />
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#CBB79F]" />
          </div>
          <span className="font-mono text-[7px] xs:text-[8px] sm:text-[9px] font-medium text-[#142841] tracking-tight select-none truncate">
            Impulse Coffees
          </span>
        </div>

        {/* Category pill: PROJECT */}
        <div className="mt-1.5 sm:mt-2">
          <span className="h-[15px] sm:h-[19px] px-1.5 sm:px-2 rounded-full bg-[#EFE0CC] border border-[#D8C4AC]/60 inline-flex items-center text-[#142841] font-mono text-[6px] xs:text-[6.5px] sm:text-[7.5px] font-semibold tracking-widest uppercase shadow-[inset_0_1px_2px_rgba(20,40,65,0.04)] select-none">
            PROJECT
          </span>
        </div>
      </a>

      {/* Divider 2: Between Section 2 and Section 3 (Midnight Navy #142841 dashed perforation) */}
      <div
        className="absolute left-0 w-full -translate-y-1/2 pointer-events-none z-30"
        style={{ top: '66.666%' }}
      >
        <svg className="w-full h-[2px] block overflow-visible">
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="#142841"
            strokeWidth="1"
            strokeDasharray="4 3.5"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* Section 3 (Bottom 1/3): The Whole Truth Foods + PROJECT */}
      <a
        href="https://thewholetruthritikaravi.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open The Whole Truth project website in a new tab"
        title="Open The Whole Truth Project Website"
        className="paper-section-interactive absolute left-0 right-0 cursor-pointer bg-[#FFF0D8] px-2 pt-2 sm:px-3 sm:pt-3 flex flex-col items-start overflow-hidden text-inherit no-underline focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#490B1A]"
        style={{
          top: '66.666%',
          height: '33.334%',
        }}
      >
        {/* Large search/address bar: The Whole Truth Foods */}
        <div className="w-full h-[18px] sm:h-[22px] px-1.5 sm:px-2.5 rounded-full bg-[#EFE0CC] border border-[#D8C4AC]/70 flex items-center shadow-[inset_0_1px_2px_rgba(20,40,65,0.04)]">
          <div className="flex items-center gap-[2.5px] sm:gap-[3.5px] shrink-0 mr-1.5 sm:mr-2">
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#490B1A]" />
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#798DA6]" />
            <span className="w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full bg-[#CBB79F]" />
          </div>
          <span className="font-mono text-[6.5px] xs:text-[7.5px] sm:text-[8.5px] font-medium text-[#142841] tracking-tight select-none truncate">
            The Whole Truth Foods
          </span>
        </div>

        {/* Category pill: PROJECT */}
        <div className="mt-1.5 sm:mt-2">
          <span className="h-[15px] sm:h-[19px] px-1.5 sm:px-2 rounded-full bg-[#EFE0CC] border border-[#D8C4AC]/60 inline-flex items-center text-[#142841] font-mono text-[6px] xs:text-[6.5px] sm:text-[7.5px] font-semibold tracking-widest uppercase shadow-[inset_0_1px_2px_rgba(20,40,65,0.04)] select-none">
            PROJECT
          </span>
        </div>
      </a>
    </div>
  );
};
