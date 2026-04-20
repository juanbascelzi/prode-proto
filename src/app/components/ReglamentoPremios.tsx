import React from 'react';
import { useTranslation } from '@/i18n/LanguageContext';

function PrizeCard({ rankLabel, prize, description }: { rankLabel: string, prize: string, description: string }) {
  return (
    <div className="w-full bg-white rounded-[16px] border border-[#eeeef1] overflow-hidden" data-name="Card Container">
      <div className="p-[16px] flex flex-col items-start w-full">
        <p className="font-['Roboto',sans-serif] font-normal leading-[1.4] text-[#636271] text-[10px] tracking-[0.02px] w-full">
          {rankLabel}
        </p>
        <p className="font-['Roboto',sans-serif] font-semibold leading-[1.4] text-[#303036] text-[14px] tracking-[0.028px] w-full mt-0.5">
          {prize}
        </p>
        <div className="w-full mt-1">
          <p className="font-['Roboto',sans-serif] font-normal leading-[1.4] text-[#636271] text-[12px] tracking-[0.024px] w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {title}
      </p>
    </div>
  );
}

export function ReglamentoPremiosView() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-[16px] w-full pb-10">
      <SectionTitle title={t.competitionPrizes} />
      
      <PrizeCard 
        rankLabel={t.firstPrize} 
        prize={t.firstPrizeDesc} 
        description={t.firstPrizeDetail} 
      />
      
      <PrizeCard 
        rankLabel={t.secondPrize} 
        prize={t.secondPrizeDesc} 
        description={t.secondPrizeDetail}
      />
      
      <PrizeCard 
        rankLabel={t.thirdPrize} 
        prize={t.thirdPrizeDesc} 
        description={t.thirdPrizeDetail}
      />

      <div className="mt-2">
        <SectionTitle title={t.conditions} />
      </div>

      <div className="w-full bg-white rounded-[16px] border border-[#eeeef1] overflow-hidden" data-name="Card Container">
        <div className="p-[16px] w-full flex flex-col items-start gap-[8px]">
          <p className="font-['Roboto',sans-serif] font-normal leading-[1.6] text-[#636271] text-[12px] tracking-[0.024px] w-full">
            {t.conditionsText}
          </p>
        </div>
      </div>
    </div>
  );
}
