import React from 'react';
import svgPaths from "@/imports/svg-dgu8onuy2b";
import { useTranslation } from '@/i18n/LanguageContext';

interface PodiumCardProps {
  onClick: () => void;
  selection: {
    first: { flag: string; name: string } | null;
    second: { flag: string; name: string } | null;
    third?: { flag: string; name: string } | null;
  } | null;
}

export function PodiumCard({ onClick, selection }: PodiumCardProps) {
  const { t } = useTranslation();
  const champion = selection?.first;

  return (
    <div 
      onClick={onClick}
      className="bg-white relative rounded-[16px] w-full cursor-pointer transition-all active:scale-[0.98] hover:shadow-lg group shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-[#eeeef1]" 
      data-name="Main"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
          
          {/* Avatar Section */}
          <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
            <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                <div className="absolute h-[22px] left-[3px] top-px w-[18.28px]" data-name="Capa_1">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.28 22">
                    <g id="Capa_1">
                      <path d={svgPaths.p28bcb600} fill="#29317F" id="Vector" />
                      <path d={svgPaths.pcfcfb00} fill="#29317F" id="Vector_2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative justify-center" data-name=".Content">
            {champion && (
              <p className="font-['Roboto',sans-serif] font-normal leading-tight text-[#636271] text-[12px] mb-0.5">
                {t.idealPodium}
              </p>
            )}
            <p className="font-['Roboto',sans-serif] font-bold leading-tight relative shrink-0 text-[#303036] text-[16px] tracking-[0.028px] w-full truncate">
              {champion ? (
                <span className="flex items-center gap-1.5">
                  <span className="text-[18px]">{champion.flag}</span>
                  <span>{champion.name} {t.championSuffix}</span>
                </span>
              ) : (
                t.configurePodium
              )}
            </p>
            <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full mt-0.5" data-name="Description">
              <p className="flex-[1_0_0] font-['Roboto',sans-serif] font-normal leading-tight min-h-px min-w-px relative text-[#636271] text-[13px] tracking-[0.024px]">
                {champion 
                  ? t.modifyUntil 
                  : t.timeUntil
                }
              </p>
            </div>
          </div>

          {/* Actions Section */}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
            <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0 transition-transform group-hover:translate-x-1" data-name="Action 1">
              <div className="relative shrink-0 size-[24px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Icon">
                    <path clipRule="evenodd" d={svgPaths.pcdb3800} fill="#29317F" fillRule="evenodd" id="Vector (Stroke)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}