import React from 'react';
import svgPaths from "@/imports/svg-w25i6uepy9";
import { useTranslation } from '@/i18n/LanguageContext';

interface RankingCardProps {
  position: number;
  points: number;
  onClick: () => void;
}

export function RankingCard({ position, points, onClick }: RankingCardProps) {
  const { t } = useTranslation();
  return (
    <div 
      onClick={onClick}
      className="flex flex-col overflow-hidden relative rounded-[20px] shadow-[-1px_4px_8px_0px_rgba(223,224,230,0.6)] w-full cursor-pointer hover:shadow-md transition-all active:scale-[0.98] bg-white group border border-[#eeeef1]" 
      data-name="Card Container"
    >
      <div className="bg-white p-[16px] flex items-center gap-[12px] w-full">
        
        {/* Left Icon Section */}
        <div className="flex items-center justify-center shrink-0">
          <div className="bg-[#f1f4fd] flex items-center justify-center rounded-full size-[40px]" data-name="Avatar-Circle">
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.pd55c100} fill="#29317F" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col flex-1 min-w-0">
          <p className="font-['Roboto',sans-serif] font-normal text-[#636271] text-[12px] leading-tight">
            {t.ranking}
          </p>
          <p className="font-['Roboto',sans-serif] font-bold text-[#303036] text-[18px] leading-tight mt-0.5">
            {t.positionLabel}: #{position}
          </p>
        </div>

        {/* Points Pill */}
        <div className="shrink-0">
          <div className="bg-[#f1f4fd] border border-[#c5d4f8] rounded-full px-[12px] py-[6px] flex items-center justify-center">
            <p className="font-['Roboto',sans-serif] font-bold text-[#29317f] text-[14px] leading-none whitespace-nowrap">
              {t.pointsLabel}: {points}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
