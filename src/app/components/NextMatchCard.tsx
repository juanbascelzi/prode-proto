import React from 'react';
import svgPaths from "@/imports/svg-dz5mhaclfo";
import { useTranslation } from '@/i18n/LanguageContext';

interface NextMatchCardProps {
  match: {
    team1: string;
    flag1: string;
    team2: string;
    flag2: string;
    date: string;
    time: string;
    score1: string;
    score2: string;
  } | null;
  onClick: () => void;
}

export function NextMatchCard({ match, onClick }: NextMatchCardProps) {
  const { t } = useTranslation();
  if (!match) return null;

  const hasPrediction = match.score1 !== "" && match.score2 !== "";

  return (
    <div 
      onClick={onClick}
      className="content-stretch flex flex-col items-end justify-end overflow-clip relative rounded-[16px] shadow-[-1px_4px_8px_0px_rgba(223,224,230,0.6)] w-full cursor-pointer hover:shadow-md transition-shadow group bg-white border border-[#eeeef1]" 
      data-name="Card Container"
    >
      {/* Main Content Section */}
      <div className="bg-white relative shrink-0 w-full" data-name="Main">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
              
              {/* Left Side: Match Info */}
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative whitespace-pre-wrap" data-name=".Content">
                <p className="font-['Roboto',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full">
                  {t.pendingPrediction}
                </p>
                <p className="font-['Roboto',sans-serif] font-bold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full">
                  {match.flag1} {match.team1} vs {match.team2} {match.flag2}
                </p>
              </div>

              {/* Middle: Date and Time */}
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".SideContent">
                <div className="content-stretch flex flex-col font-['Roboto',sans-serif] font-normal items-center justify-end leading-[1.4] relative shrink-0 text-right whitespace-pre-wrap" data-name="Text">
                  <p className="relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full">
                    {match.date}
                  </p>
                  <p className="relative shrink-0 text-[#303036] text-[14px] font-bold tracking-[0.028px] w-full">
                    {match.time}
                  </p>
                </div>
              </div>

              {/* Right Side: Arrow Icon */}
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
                <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0 group-hover:translate-x-1 transition-transform" data-name="Action 1">
                  <div className="relative shrink-0 size-[24px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Icon">
                        <path clipRule="evenodd" d={svgPaths.pcdb3800} fill="#303036" fillRule="evenodd" id="Vector (Stroke)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Badge Section */}
      <div className={`relative shrink-0 w-full transition-colors ${hasPrediction ? 'bg-[#F5FDF6]' : 'bg-[#fdfaec]'} rounded-bl-[16px] rounded-br-[16px]`} data-name=".Badge Extended">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full border-t border-[#fbec9e]">
          <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[4px] relative w-full">
            <p className={`font-['Roboto',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[12px] tracking-[0.024px] ${hasPrediction ? 'text-[#1F622C]' : 'text-[#7e4317]'}`}>
              {hasPrediction ? t.predictionReady : t.complete}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
