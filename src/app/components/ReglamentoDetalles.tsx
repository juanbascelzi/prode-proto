import React from 'react';
import { useTranslation } from '@/i18n/LanguageContext';

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full my-4" data-name="Divider">
      <div aria-hidden="true" className="absolute border-b border-[#eeeef1] inset-0 pointer-events-none" />
    </div>
  );
}

export function ReglamentoDetallesView() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-full pb-10">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mb-2" data-name="Títle">
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {t.scoringSystem}
        </p>
      </div>

      <div className="bg-white border border-[#eeeef1] rounded-[16px] p-[24px] flex flex-col gap-[16px] relative w-full">
        {/* Scoring rules title */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
          <p className="font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.scoringRulesTitle}
          </p>
        </div>

        {/* What result counts */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Títle">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.whatResultCounts}
          </p>
          <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-normal list-disc relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full pl-5 mt-1" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.whatResultCountsItems.map((item, i) => (
              <li key={i} className="mb-0">
                <span className="leading-[1.4]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        {/* Match scoring */}
        <p className="font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap">
          {t.matchScoring}
        </p>

        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.matchScoringNote}
          </p>
        </div>

        {/* A) Exact score */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.exactScoreTitle}
          </p>
          <ul className="block font-normal leading-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full pl-5 mt-1" style={{ fontVariationSettings: "'wdth' 100" }}>
            <li className="list-disc whitespace-pre-wrap">
              <span className="leading-[1.4]">{t.exactScoreDesc}</span>
            </li>
          </ul>
        </div>

        {/* B) Close score */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Títle">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.closeScoreTitle}
          </p>
          <div className="flex flex-col gap-1 mt-1">
            {t.closeScoreDesc.map((line, i) => (
              i === 0 ? (
                <p key={i} className="font-normal text-[#636271] text-[14px] leading-[1.4]">{line}</p>
              ) : (
                <ul key={i} className="list-disc pl-5">
                  <li className="font-normal text-[#636271] text-[14px] leading-[1.4]">{line}</li>
                </ul>
              )
            ))}
          </div>
        </div>

        {/* C) Winner only */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.winnerOnlyTitle}
          </p>
          <ul className="block leading-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full pl-5 mt-1" style={{ fontVariationSettings: "'wdth' 100" }}>
            <li className="list-disc mb-0 whitespace-pre-wrap">
              <span className="leading-[1.4]">{t.winnerOnlyDesc}</span>
            </li>
          </ul>
          <p className="font-normal leading-[1.4] text-[#636271] text-[14px] tracking-[0.028px] mt-1 pl-5">
            {t.winnerOnlyExample}
          </p>
        </div>

        {/* D) Nothing right */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.nothingRightTitle}
          </p>
          <ul className="block leading-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full pl-5 mt-1" style={{ fontVariationSettings: "'wdth' 100" }}>
            <li className="list-disc whitespace-pre-wrap">
              <span className="leading-[1.4]">{t.nothingRightDesc}</span>
            </li>
          </ul>
        </div>

        <Divider />

        {/* Knockout bonus */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
          <p className="font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap">
            {t.knockoutBonusTitle}
          </p>
        </div>

        <div className="font-normal leading-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap">
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {t.knockoutBonusItems.map((item, i) => (
              <li key={i}>
                <span className="leading-[1.4]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        {/* Podium special */}
        <p className="font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap">
          {t.podiumSpecialTitle}
        </p>
        <div className="font-normal leading-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap">
          <p className="font-semibold mb-2">
            <span className="leading-[1.4]">{t.podiumSpecialIntro}</span>
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            {t.podiumSpecialItems.map((item, i) => (
              <li key={i}>
                <span className="leading-[1.4]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        {/* Tiebreaker */}
        <p className="font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap">
          {t.tiebreakerTitle}
        </p>
        <div className="font-normal leading-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full">
          <p className="mb-4 text-[14px] whitespace-pre-wrap">
            <span className="leading-[1.4]">{t.tiebreakerIntro}</span>
          </p>
          <ol className="list-decimal pl-5 flex flex-col gap-4">
            {t.tiebreakerRules.map((rule, i) => (
              <li key={i} className="whitespace-pre-wrap">
                <span className="font-semibold leading-[1.4] text-[14px] tracking-[0.028px]">
                  {rule}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
