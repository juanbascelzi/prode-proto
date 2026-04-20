import React from 'react';
import svgPaths from "../../imports/svg-n0u8ew9wz2";
import { useTranslation } from '@/i18n/LanguageContext';

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p23747500} fill="#1F622C" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#f5fdf6] flex items-center justify-center relative rounded-full shrink-0 size-[40px]" data-name="Avatar">
      <Icon />
    </div>
  );
}

function Title() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center leading-[1.4] relative shrink-0 text-center w-full" data-name="Títle">
      <p className="font-semibold text-[#303036] text-[18px] tracking-[0.036px] w-full">
        {t.wellDone}
      </p>
      <p className="font-normal text-[#636271] text-[14px] tracking-[0.028px] w-full">
        {t.allPredictionsComplete}
      </p>
    </div>
  );
}

export function CompletionStateCard() {
  return (
    <div className="bg-white flex flex-col gap-[16px] items-center p-[24px] relative rounded-[16px] w-full border border-[#eeeef1]" data-name="StateCard">
      <Avatar />
      <Title />
    </div>
  );
}
