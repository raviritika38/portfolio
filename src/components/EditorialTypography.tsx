/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const EditorialTypography: React.FC = () => {
  return (
    <aside
      aria-label="Editorial Brand Typography"
      className="absolute pointer-events-none select-none z-10 flex flex-col items-start w-auto"
      style={{
        left: 'clamp(54%, 64vw, 68%)',
        transform: 'translateX(-50%)',
        top: 0,
        bottom: 0,
      }}
    >
      {/* =========================================================
          UPPER HALF — DEEP MAROON SECTION (#490B1A)
          Words: Brand & Marketing (Montserrat ExtraBold 800)
          Brand has the selection effect; Marketing is clean text with its sticky note.
          ========================================================= */}
      <div className="h-1/2 flex flex-col justify-end pb-1 sm:pb-2 md:pb-2.5 items-start gap-1 sm:gap-1.5 md:gap-2">
        {/* 1. Brand: Mustard-yellow rectangular selection (#D8A92E) with circular corner handles */}
        <div className="relative inline-flex items-center ml-3 xs:ml-4 sm:ml-8 md:ml-12 lg:ml-14">
          <div
            className="relative inline-block border border-[#D8A92E] px-2 py-0.5 sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 rounded-[1.5px] shadow-[0_2px_10px_rgba(20,40,65,0.16)]"
            style={{ backgroundColor: 'rgba(216, 169, 46, 0.60)' }}
          >
            {/* Circular corner anchor handles */}
            <span
              className="absolute -top-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#142841] border border-[#D8A92E]"
              aria-hidden="true"
            />
            <span
              className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#142841] border border-[#D8A92E]"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#142841] border border-[#D8A92E]"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#142841] border border-[#D8A92E]"
              aria-hidden="true"
            />

            <span className="font-display-bold text-[1.4rem] xs:text-[1.65rem] sm:text-3xl md:text-[2.65rem] lg:text-[3.45rem] xl:text-[4.2rem] 2xl:text-[4.75rem] leading-[1.03] text-[#142841] block">
              Brand
            </span>
          </div>
        </div>

        {/* 2. Marketing: Clean text (Warm Ivory #FFF0D8), with tilted sticky note accent */}
        <div className="relative inline-flex items-center ml-0">
          <span className="font-display-bold text-[1.4rem] xs:text-[1.65rem] sm:text-3xl md:text-[2.65rem] lg:text-[3.45rem] xl:text-[4.2rem] 2xl:text-[4.75rem] leading-[1.03] text-[#FFF0D8] block">
            Marketing
          </span>

          {/* Tilted rectangular sticky note beside Marketing */}
          <div
            className="ml-2 sm:ml-2.5 md:ml-3 w-4 h-5 xs:w-5 xs:h-6 sm:w-6 sm:h-7 md:w-7 md:h-8 rounded-[1px] bg-[#E2B842] shadow-[0_2px_6px_rgba(20,40,65,0.20)] rotate-12 flex items-center justify-center shrink-0 border border-[#C99E2A]"
            aria-hidden="true"
          >
            <span className="w-2 sm:w-2.5 md:w-3 h-[1.5px] bg-[#142841]/35 rounded-full" />
          </div>
        </div>
      </div>

      {/* =========================================================
          LOWER HALF — WARM BEIGE/CREAM SECTION (#FFF0D8)
          Word: Portfolio (Montserrat ExtraBold 800)
          Portfolio has the selection effect.
          ========================================================= */}
      <div className="h-1/2 flex flex-col justify-start pt-1 sm:pt-2 md:pt-2.5 items-start gap-1 sm:gap-1.5 md:gap-2">
        {/* Portfolio: Muted slate-blue rectangular selection (#798DA6) with circular handles */}
        <div className="relative inline-flex items-center ml-1 xs:ml-1.5 sm:ml-2 md:ml-3 lg:ml-4">
          <div
            className="relative inline-block border border-[#798DA6] px-2 py-0.5 sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 rounded-[1.5px] shadow-[0_2px_10px_rgba(20,40,65,0.16)]"
            style={{ backgroundColor: 'rgba(121, 141, 166, 0.60)' }}
          >
            {/* Circular corner anchor handles */}
            <span
              className="absolute -top-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#142841] border border-[#FFF0D8]"
              aria-hidden="true"
            />
            <span
              className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#142841] border border-[#FFF0D8]"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#142841] border border-[#FFF0D8]"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#142841] border border-[#FFF0D8]"
              aria-hidden="true"
            />

            <span className="font-display-bold text-[1.4rem] xs:text-[1.65rem] sm:text-3xl md:text-[2.65rem] lg:text-[3.45rem] xl:text-[4.2rem] 2xl:text-[4.75rem] leading-[1.03] text-[#142841] block">
              Portfolio
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
