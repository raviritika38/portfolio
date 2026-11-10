/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EditorialTypography } from './components/EditorialTypography';
import { ManuscriptPaper } from './components/ManuscriptPaper';
import { Typewriter } from './components/Typewriter';

export default function App() {
  return (
    <main className="relative w-screen h-screen overflow-hidden flex flex-col select-none">
      {/* Upper 50%: Dominant Deep Burgundy (#490B1A) */}
      <div
        className="w-full h-1/2"
        style={{ backgroundColor: '#490B1A' }}
      />
      {/* Lower 50%: Warm Ivory Cream (#FFF0D8) */}
      <div
        className="w-full h-1/2"
        style={{ backgroundColor: '#FFF0D8' }}
      />

      {/* Subtle Top-Left Name & Portfolio Label */}
      <header className="absolute top-5 left-6 sm:top-7 sm:left-10 z-20 pointer-events-none select-none flex flex-col items-start gap-0.5">
        <span className="font-display-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-[#FFF0D8]">
          RITIKA RAVI
        </span>
        <span className="font-mono text-[8.5px] sm:text-[9.5px] tracking-[0.22em] uppercase text-[#FFF0D8]/70">
          BRAND MARKETING PORTFOLIO
        </span>
      </header>

      {/* Editorial Typography in the Upper-Right Burgundy Area */}
      <EditorialTypography />

      {/* Vertical 3-part blank script paper extending from typewriter feed */}
      <ManuscriptPaper />

      {/* Illustrated Vintage Typewriter on the Left */}
      <Typewriter />
    </main>
  );
}
