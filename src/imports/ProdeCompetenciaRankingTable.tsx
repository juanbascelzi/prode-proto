import svgPaths from "./svg-kzmcmyl69h";
import podiumSvg from "./svg-dgu8onuy2b";
import { useTranslation } from '@/i18n/LanguageContext';
import imgRectangle from "figma:asset/0d17da7cd922d2843601e652b67f98a7f8292b3c.png";
import imgRectangle1 from "figma:asset/334ca07ae4770791fa5174a40e1608702e3df374.png";
import imgRectangle2 from "figma:asset/4c4f496649f5e7458470fe01cff8caf60d14aaf2.png";
import imgRectangle3 from "figma:asset/b704dd4bda319105a057149f4e0a9c2a2ac32421.png";
import imgRectangle4 from "figma:asset/1f9a575be1ea55488c77c519811625a2931352bb.png";
import imgRectangle5 from "figma:asset/2d1f92e5b052876ffa01fce5ef4190b2aee94835.png";
import imgRectangle6 from "figma:asset/295e394583cd6f5739dcbd92dd0b60a9813dcac3.png";
import imgRectangle7 from "figma:asset/4808eeda1e024d21ec7e518248fa33817288de3e.png";
import imgRectangle8 from "figma:asset/40dd2e0d10191d9f4e50ab9f0c136237a0e53f8c.png";
import imgRectangle9 from "figma:asset/86c8a468c91eae19ce598de11adfc01f4d22948e.png";
import imgRectangle10 from "figma:asset/46d0a595da3f77feb1e1e383eb9b4162b2d55632.png";
import imgRectangle11 from "figma:asset/363f8b114907f86d4b9555c1242ba7ca89907660.png";

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

function Back({ onBack }: { onBack?: () => void }) {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[16px] top-[8px] cursor-pointer" data-name="Back" onClick={onBack}>
      <ButtonIconOnly />
    </div>
  );
}

function HeaderFlow({ onBack }: { onBack?: () => void }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header_Flow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] overflow-hidden relative flex-1 text-[#303036] text-[16px] text-center text-ellipsis tracking-[0.032px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[1.4] overflow-hidden">{t.sportsPredictions}</p>
          </div>
          <Back onBack={onBack} />
        </div>
      </div>
    </div>
  );
}

function HeaderApp({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header/App">
      <HeaderFlow onBack={onBack} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trending-up">
          <path clipRule="evenodd" d={svgPaths.pd55c100} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <Icon1 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function Content() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.positionLabel}: #5
      </p>
    </div>
  );
}

function Pills() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#f1f4fd] relative rounded-[16px] shrink-0" data-name="Pills">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {t.pointsLabel}: 32
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function SideContent() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Pills />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar />
      <Content />
      <SideContent />
    </div>
  );
}

function Main1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Main">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function CardContainer({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute h-[72px] left-0 rounded-[16px] top-0 w-full cursor-pointer" data-name="Card Container">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Main1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Position({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start p-[10px] relative shrink-0 w-full" data-name="Position">
      <CardContainer onClick={onClick} />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p39f36980} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <Icon2 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar3 />
    </div>
  );
}

function Content1() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.resultLabel}
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.resultsPositive}
      </p>
    </div>
  );
}

function TextPositivos() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[24px] text-right tracking-[0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        9
      </p>
    </div>
  );
}

function SideContentPositivos() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <TextPositivos />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[40px] items-center relative shrink-0" data-name="List">
      <Avatar2 />
      <Content1 />
      <SideContentPositivos />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-full relative shrink-0 w-px" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p17618200} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <Icon3 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar5 />
    </div>
  );
}

function Content2() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.resultLabel}
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.resultsExact}
      </p>
    </div>
  );
}

function TextExactos() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[24px] text-right tracking-[0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
    </div>
  );
}

function SideContentExactos() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name=".SideContent">
      <TextExactos />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[40px] items-center relative shrink-0" data-name="List">
      <Avatar4 />
      <Content2 />
      <SideContentExactos />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative w-full">
      <List1 />
      <Divider />
      <List2 />
    </div>
  );
}

function Main2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Main">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function CardContainer1() {
  return (
    <div className="h-[72px] relative rounded-[16px] shrink-0 w-full" data-name="Card Container">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Main2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute h-[22px] left-[3px] top-px w-[18.28px]" data-name="Capa_1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.28 22">
          <g id="Capa_1">
            <path d={podiumSvg.p28bcb600} fill="#29317F" id="Vector" />
            <path d={podiumSvg.pcfcfb00} fill="#29317F" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <Icon4 />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar7 />
    </div>
  );
}

function Content3({ podiumSelection }: { podiumSelection?: any }) {
  const { t } = useTranslation();
  const champion = podiumSelection?.first;
  const first = champion?.name || 'Argentina';
  const flag = champion?.flag || '🇦🇷';
  const isComplete = !!podiumSelection;

  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative justify-center" data-name=".Content">
      {champion && (
        <p className="font-['Roboto',sans-serif] font-normal leading-tight text-[#636271] text-[12px] mb-0.5">
          {t.idealPodium}
        </p>
      )}
      <p className="font-['Roboto',sans-serif] font-bold leading-tight relative shrink-0 text-[#303036] text-[16px] tracking-[0.028px] w-full truncate">
        {isComplete ? (
          <span className="flex items-center gap-1.5">
            <span className="text-[18px]">{flag}</span>
            <span>{first} {t.championSuffix}</span>
          </span>
        ) : (
          t.configurePodium
        )}
      </p>
      <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full mt-0.5" data-name="Description">
        <p className="flex-[1_0_0] font-['Roboto',sans-serif] font-normal leading-tight min-h-px min-w-px relative text-[#636271] text-[13px] tracking-[0.024px]">
          {isComplete 
            ? t.modifyUntil 
            : t.timeUntil
          }
        </p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pcdb3800} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <Icon5 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action />
    </div>
  );
}

function List3({ podiumSelection }: { podiumSelection?: any }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar6 />
      <Content3 podiumSelection={podiumSelection} />
      <Actions />
    </div>
  );
}

function Main3({ onFinalClick, podiumSelection }: { onFinalClick?: () => void, podiumSelection?: any }) {
  return (
    <div 
      onClick={onFinalClick}
      className="bg-white relative rounded-[16px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="Main"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <List3 podiumSelection={podiumSelection} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Title() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.4] relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.generalPositions}
      </p>
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.participants}
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2ed70e00} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <Icon6 />
    </div>
  );
}

function Content4() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.player}
      </p>
    </div>
  );
}

function Text() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] text-right tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.pointsLabel}
      </p>
    </div>
  );
}

function SideContent1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Content4 />
      <SideContent1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f1f4fd] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Pills1 />
          <List4 />
        </div>
      </div>
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-up">
          <path clipRule="evenodd" d={svgPaths.p2ac380} fill="var(--fill-0, #1F622C)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <ArrowUp />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 1 `}</p>
    </div>
  );
}

function MemojiAvatar() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar />
    </div>
  );
}

function Avatar8() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar9 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alberto José
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        36
      </p>
    </div>
  );
}

function SideContent2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text1 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar8 />
      <Content5 />
      <SideContent2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Pills2 />
          <Title1 />
          <List5 />
        </div>
      </div>
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

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p29948f80} fill="var(--fill-0, #7B2121)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <Icon7 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 2 `}</p>
    </div>
  );
}

function MemojiAvatar1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function Avatar11() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar1 />
    </div>
  );
}

function Avatar10() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar11 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Valeria Sofia
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        35
      </p>
    </div>
  );
}

function SideContent3() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text2 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar10 />
      <Content6 />
      <SideContent3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Pills3 />
          <Title2 />
          <List6 />
        </div>
      </div>
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

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p24281d40} fill="var(--fill-0, #636271)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <Icon8 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 3 `}</p>
    </div>
  );
}

function MemojiAvatar2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle2} />
      </div>
    </div>
  );
}

function Avatar13() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar2 />
    </div>
  );
}

function Avatar12() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar13 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ricardo Javier
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        33
      </p>
    </div>
  );
}

function SideContent4() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text3 />
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar12 />
      <Content7 />
      <SideContent4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Pills4 />
          <Title3 />
          <List7 />
        </div>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p29948f80} fill="var(--fill-0, #7B2121)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 4 `}</p>
    </div>
  );
}

function MemojiAvatar3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle3} />
      </div>
    </div>
  );
}

function Avatar15() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar3 />
    </div>
  );
}

function Avatar14() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar15 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Daniela Sofia
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        32
      </p>
    </div>
  );
}

function SideContent5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text4 />
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar14 />
      <Content8 />
      <SideContent5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Icon9 />
          <Title4 />
          <List8 />
        </div>
      </div>
    </div>
  );
}

function ArrowUp1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-up">
          <path clipRule="evenodd" d={svgPaths.p2ac380} fill="var(--fill-0, #1F622C)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <ArrowUp1 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 5 `}</p>
    </div>
  );
}

function MemojiAvatar4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle4} />
      </div>
    </div>
  );
}

function Avatar17() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar4 />
    </div>
  );
}

function Avatar16() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar17 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tito Puente
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        32
      </p>
    </div>
  );
}

function SideContent6() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text5 />
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar16 />
      <Content9 />
      <SideContent6 />
    </div>
  );
}

function Frame6() {
  return (
    <div id="user-ranking-row" className="bg-[#f1f4fd] content-stretch flex gap-[8px] items-center px-[16px] py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none" />
      <Pills5 />
      <Title5 />
      <List9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p24281d40} fill="var(--fill-0, #636271)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <Icon10 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 6 `}</p>
    </div>
  );
}

function MemojiAvatar5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle5} />
      </div>
    </div>
  );
}

function Avatar19() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar5 />
    </div>
  );
}

function Avatar18() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar19 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Elsa Bor
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        31
      </p>
    </div>
  );
}

function SideContent7() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text6 />
    </div>
  );
}

function List10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar18 />
      <Content10 />
      <SideContent7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Pills6 />
          <Title6 />
          <List10 />
        </div>
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ArrowUp2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-up">
          <path clipRule="evenodd" d={svgPaths.p2ac380} fill="var(--fill-0, #1F622C)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <ArrowUp2 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 7 `}</p>
    </div>
  );
}

function MemojiAvatar6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle6} />
      </div>
    </div>
  );
}

function Avatar21() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar6 />
    </div>
  );
}

function Avatar20() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar21 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Damián Manso
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        30
      </p>
    </div>
  );
}

function SideContent8() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text7 />
    </div>
  );
}

function List11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar20 />
      <Content11 />
      <SideContent8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Pills7 />
          <Title7 />
          <List11 />
        </div>
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ArrowUp3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-up">
          <path clipRule="evenodd" d={svgPaths.p2ac380} fill="var(--fill-0, #1F622C)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <ArrowUp3 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 8 `}</p>
    </div>
  );
}

function MemojiAvatar7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle7} />
      </div>
    </div>
  );
}

function Avatar23() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar7 />
    </div>
  );
}

function Avatar22() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar23 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Florencia Rivas
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        28
      </p>
    </div>
  );
}

function SideContent9() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text8 />
    </div>
  );
}

function List12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar22 />
      <Content12 />
      <SideContent9 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Pills8 />
          <Title8 />
          <List12 />
        </div>
      </div>
    </div>
  );
}

function Divider6() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ArrowUp4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-up">
          <path clipRule="evenodd" d={svgPaths.p2ac380} fill="var(--fill-0, #1F622C)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <ArrowUp4 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] text-center tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` 9 `}</p>
    </div>
  );
}

function MemojiAvatar8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle8} />
      </div>
    </div>
  );
}

function Avatar25() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar8 />
    </div>
  );
}

function Avatar24() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar25 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jose Pérez Jr.
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        28
      </p>
    </div>
  );
}

function SideContent10() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text9 />
    </div>
  );
}

function List13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar24 />
      <Content13 />
      <SideContent10 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Pills9 />
          <Title9 />
          <List13 />
        </div>
      </div>
    </div>
  );
}

function Divider7() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ArrowUp5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-up">
          <path clipRule="evenodd" d={svgPaths.p2ac380} fill="var(--fill-0, #1F622C)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Pills10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Pills">
      <ArrowUp5 />
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        10
      </p>
    </div>
  );
}

function MemojiAvatar9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle9} />
      </div>
    </div>
  );
}

function Avatar27() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar9 />
    </div>
  );
}

function Avatar26() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar27 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rulo Da Silva
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        25
      </p>
    </div>
  );
}

function SideContent11() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text10 />
    </div>
  );
}

function List14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar26 />
      <Content14 />
      <SideContent11 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Pills10 />
          <Title10 />
          <List14 />
        </div>
      </div>
    </div>
  );
}

function Divider8() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p29948f80} fill="var(--fill-0, #7B2121)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        11
      </p>
    </div>
  );
}

function MemojiAvatar10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle10} />
      </div>
    </div>
  );
}

function Avatar29() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar10 />
    </div>
  );
}

function Avatar28() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar29 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alberto José
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        23
      </p>
    </div>
  );
}

function SideContent12() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text11 />
    </div>
  );
}

function List15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar28 />
      <Content15 />
      <SideContent12 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Icon11 />
          <Title11 />
          <List15 />
        </div>
      </div>
    </div>
  );
}

function Divider9() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p29948f80} fill="var(--fill-0, #7B2121)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Title12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function MemojiAvatar11() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memoji-Avatar">
      <div className="absolute inset-0 rounded-[50px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle11} />
      </div>
    </div>
  );
}

function Avatar31() {
  return (
    <div className="content-stretch flex items-end mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <MemojiAvatar11 />
    </div>
  );
}

function Avatar30() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar31 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alberto José
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-right tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        19
      </p>
    </div>
  );
}

function SideContent13() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text12 />
    </div>
  );
}

function List16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="List">
      <Avatar30 />
      <Content16 />
      <SideContent13 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Icon12 />
          <Title12 />
          <List16 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start py-[16px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <Frame1 />
      <Divider1 />
      <Frame3 />
      <Divider2 />
      <Frame4 />
      <Divider3 />
      <Frame5 />
      <Frame16 />
      <Frame7 />
      <Divider4 />
      <Frame8 />
      <Divider5 />
      <Frame9 />
      <Divider6 />
      <Frame10 />
      <Divider7 />
      <Frame11 />
      <Divider8 />
      <Frame12 />
      <Divider9 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
      <Frame />
    </div>
  );
}

function Main({ onFinalClick, podiumSelection, onPositionClick }: { onFinalClick?: () => void, podiumSelection?: any, onPositionClick?: () => void }) {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] items-center overflow-x-hidden p-[16px] py-[24px] relative shrink-0 w-full" data-name="Main">
      <Position onClick={onPositionClick} />
      <CardContainer1 />
      <Main3 onFinalClick={onFinalClick} podiumSelection={podiumSelection} />
      <Title />
      <Frame14 />
    </div>
  );
}

export default function ProdeCompetenciaRankingTable({ onBack, onFinalClick, finalSelection: podiumSelection }: { onBack?: () => void, onFinalClick?: () => void, finalSelection?: any }) {
  const scrollToUser = () => {
    const element = document.getElementById('user-ranking-row');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <div className="bg-[#f5f6f8] min-h-screen content-stretch flex flex-col items-center relative w-full max-w-[450px] mx-auto overflow-x-hidden" data-name="PRODE / Competencia / Ranking / Table">
      <Main onFinalClick={onFinalClick} podiumSelection={podiumSelection} onPositionClick={scrollToUser} />
    </div>
  );
}