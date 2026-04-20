import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from "motion/react";
import svgPaths from "@/imports/svg-00llxahpwr";
import { useTranslation } from '@/i18n/LanguageContext';

const STAGE_IDS = [
  "Todos",
  "Grupos · Fecha 1",
  "Grupos · Fecha 2",
  "Grupos · Fecha 3",
  "16 avos",
  "8 avos",
  "Cuartos",
  "Semifinal",
  "Final"
];

interface StageSelectorProps {
  selectedStage: string;
  onStageSelect: (stage: string) => void;
  onClick: () => void;
}

export function StageSelector({ selectedStage, onStageSelect, onClick }: StageSelectorProps) {
  const { t } = useTranslation();
  const stageLabels: Record<string, string> = {
    "Todos": t.all,
    "Grupos · Fecha 1": t.groupsDate1,
    "Grupos · Fecha 2": t.groupsDate2,
    "Grupos · Fecha 3": t.groupsDate3,
    "16 avos": t.roundOf32,
    "8 avos": t.roundOf16,
    "Cuartos": t.quarterFinals,
    "Semifinal": t.semiFinals,
    "Final": t.final,
  };
  const getStageLabel = (id: string) => stageLabels[id] || id;

  const currentIndex = STAGE_IDS.indexOf(selectedStage);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) onStageSelect(STAGE_IDS[currentIndex - 1]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < STAGE_IDS.length - 1) onStageSelect(STAGE_IDS[currentIndex + 1]);
  };

  return (
    <div className="flex gap-[8px] items-center justify-center relative w-full z-50" data-name="Navigation">
      {/* Back Button */}
      <button 
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`bg-white p-2 border rounded-[8px] shrink-0 transition-colors ${
          currentIndex === 0 ? "border-[#eeeef1] opacity-50" : "border-[#c5d4f8] active:bg-[#f1f4fd]"
        }`}
      >
         <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p1281c00} fill={currentIndex === 0 ? "#AAAABA" : "#29317F"} />
         </svg>
      </button>

      {/* Selector Dropdown - Now triggers Bottom Sheet */}
      <button 
        onClick={onClick}
        className="flex-1 bg-white border border-[#c5d4f8] rounded-[8px] h-[40px] flex items-center justify-center gap-2 px-3 active:bg-[#f1f4fd] transition-colors"
      >
        <span className="text-[#29317f] text-[14px] font-semibold truncate">{getStageLabel(selectedStage)}</span>
        <svg 
          className="size-[16px] shrink-0" 
          fill="none" 
          viewBox="0 0 16 16"
        >
            <path d={svgPaths.p248d3d00} fill="#29317F" />
        </svg>
      </button>

      {/* Next Button */}
      <button 
        onClick={handleNext}
        disabled={currentIndex === STAGE_IDS.length - 1}
        className={`bg-white p-2 border rounded-[8px] shrink-0 transition-colors ${
          currentIndex === STAGE_IDS.length - 1 ? "border-[#eeeef1] opacity-50" : "border-[#c5d4f8] active:bg-[#f1f4fd]"
        }`}
      >
         <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.pcdb3800} fill={currentIndex === STAGE_IDS.length - 1 ? "#AAAABA" : "#29317F"} />
         </svg>
      </button>
    </div>
  );
}
