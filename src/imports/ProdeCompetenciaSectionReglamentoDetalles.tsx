import React, { useState } from 'react';
import svgPaths from "./svg-80xlitqc2f";
import { ReglamentoPremiosView } from "@/app/components/ReglamentoPremios";
import { ReglamentoFAQsView } from "@/app/components/ReglamentoFAQs";
import { ReglamentoDetallesView } from "@/app/components/ReglamentoDetalles";
import { useTranslation } from '@/i18n/LanguageContext';

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );
}

function ButtonIconOnly() {
  return (
    <div className="content-stretch flex items-center justify-end max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0 hover:bg-gray-100 transition-colors" data-name="Button/IconOnly">
      <Icon />
    </div>
  );
}

function Back({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[16px] top-[8px] cursor-pointer" data-name="Back" onClick={onClick}>
      <ButtonIconOnly />
    </div>
  );
}

function HeaderFlow({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header_Flow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] overflow-hidden relative flex-1 text-[#303036] text-[16px] text-center text-ellipsis tracking-[0.032px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[1.4] overflow-hidden">Pronósticos deportivos</p>
          </div>
          <Back onClick={onBack} />
        </div>
      </div>
    </div>
  );
}

function Content({ active, onClick }: { active?: boolean, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 cursor-pointer ${active ? 'bg-transparent' : 'hover:bg-gray-50'}`} 
      data-name="Content"
    >
      <div className={`css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.028px] ${active ? 'text-[#213478]' : 'text-[#3a3a45]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Pronósticos</p>
      </div>
    </div>
  );
}

function Component({ active, onClick }: { active?: boolean, onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[42px] items-center min-h-px min-w-px relative" data-name="1">
      <Content active={active} onClick={onClick} />
    </div>
  );
}

function Content1({ active, onClick }: { active?: boolean, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 cursor-pointer ${active ? 'bg-transparent' : 'hover:bg-gray-50'}`} 
      data-name="Content"
    >
      <div className={`css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.028px] ${active ? 'text-[#213478]' : 'text-[#3a3a45]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Fixture</p>
      </div>
    </div>
  );
}

function Component1({ active, onClick }: { active?: boolean, onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[42px] items-center min-h-px min-w-px relative" data-name="2">
      <Content1 active={active} onClick={onClick} />
    </div>
  );
}

function Content2({ active, onClick }: { active?: boolean, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 cursor-pointer ${active ? 'bg-transparent' : 'hover:bg-gray-50'}`} 
      data-name="Content"
    >
      <div className={`css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.028px] ${active ? 'text-[#213478]' : 'text-[#3a3a45]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Reglamento</p>
      </div>
    </div>
  );
}

function Component2({ active, onClick }: { active?: boolean, onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[42px] items-center min-h-px min-w-px relative" data-name="3">
      <Content2 active={active} onClick={onClick} />
      {active && <div className="bg-[#496be3] h-[2px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Select" />}
    </div>
  );
}

function Group({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Group">
      <Component active={activeTab === "Pronósticos"} onClick={() => onTabChange("Pronósticos")} />
      <Component2 active={activeTab === "Reglamento"} onClick={() => onTabChange("Reglamento")} />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#e9e9f4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Tabs({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) {
  return (
    <div className="content-stretch flex flex-col h-[43px] items-start relative shrink-0 w-full" data-name="Tabs">
      <Group activeTab={activeTab} onTabChange={onTabChange} />
      <Divider />
    </div>
  );
}

function Subheader({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".subheader">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[8px] relative w-full">
          <Tabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
    </div>
  );
}

function HeaderApp({ onBack, activeTab, onTabChange }: { onBack?: () => void, activeTab: string, onTabChange: (tab: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header/App">
      <HeaderFlow onBack={onBack} />
      <Subheader activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

function Chip({ active, onClick, label }: { active?: boolean, onClick?: () => void, label: string }) {
  return (
    <div 
      onClick={onClick}
      className={`${active ? 'bg-[#c5d4f8]' : 'bg-[#f1f4fd]'} relative rounded-[8px] shrink-0 cursor-pointer transition-colors`} 
      data-name="Chip"
    >
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {label}
        </p>
      </div>
      <div aria-hidden="true" className={`absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]`} />
    </div>
  );
}

function Frame1({ activeFilter, onFilterChange }: { activeFilter: string, onFilterChange: (f: string) => void }) {
  const { t } = useTranslation();
  const filterLabels: Record<string, string> = {
    details: t.details,
    prizes: t.prizes,
    faq: t.faq,
  };
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Chip active={activeFilter === "details"} onClick={() => onFilterChange("details")} label={filterLabels.details} />
      <Chip active={activeFilter === "prizes"} onClick={() => onFilterChange("prizes")} label={filterLabels.prizes} />
      <Chip active={activeFilter === "faq"} onClick={() => onFilterChange("faq")} label={filterLabels.faq} />
    </div>
  );
}

function Title() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.4] relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.rulesAndGame}
      </p>
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{t.howToPlayAndCompete}</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.4] relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1. Objetivo
      </p>
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        El PRODE permite a los participantes pronosticar los resultados de los partidos del Mundial 2026 y sumar puntos según la precisión de sus pronósticos.
      </p>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        2. Cómo participar
      </p>
      <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[1.4]">Cada participante puede pronosticar el resultado de cada partido antes de que comience.</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[1.4]">Los pronósticos se realizan por partido, dentro de una comunidad o grupo.</span>
        </li>
        <li className="css-4hzbpn ms-[21px]">
          <span className="leading-[1.4]">Una vez iniciado el partido, no se pueden editar los pronósticos.</span>
        </li>
      </ul>
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        3. Alcance del PRODE
      </p>
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4] mb-0">El PRODE se juega sobre los partidos oficiales del Mundial FIFA 2026, incluyendo:</p>
        <ol className="css-8097nc" start="1">
          <li className="css-4hzbpn mb-0 ms-[21px]">
            <span className="leading-[1.4]">Fase de grupos</span>
          </li>
          <li className="css-4hzbpn ms-[21px]">
            <span className="leading-[1.4]">Fase eliminatoria (desde dieciseisavos de final hasta la final)</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center p-[16px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Title1 />
      <Divider1 />
      <Title2 />
      <Divider2 />
      <Title3 />
    </div>
  );
}

function Main() {
  const [activeFilter, setActiveFilter] = useState("details");

  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] items-start overflow-y-auto px-[16px] py-[24px] relative shrink-0 w-full max-w-[450px] flex-1" data-name="Main">
      <Frame1 activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      {activeFilter === "details" ? (
        <ReglamentoDetallesView />
      ) : activeFilter === "prizes" ? (
        <ReglamentoPremiosView />
      ) : activeFilter === "faq" ? (
        <ReglamentoFAQsView />
      ) : null}
    </div>
  );
}

export default function ProdeCompetenciaSectionReglamentoDetalles({ onBack, onTabChange }: { onBack?: () => void, onTabChange?: (tab: string) => void }) {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col items-center relative size-full max-w-[450px] mx-auto overflow-hidden" data-name="PRODE / Competencia / Section / Reglamento / Detalles">
      <Main />
    </div>
  );
}
