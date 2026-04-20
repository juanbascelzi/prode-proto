import svgPaths from "./svg-dz5mhaclfo";

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative whitespace-pre-wrap" data-name=".Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pronóstico pendiente
      </p>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        🇲🇽 México vs Sudáfrica 🇿🇦
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-center justify-end leading-[1.4] relative shrink-0 text-right whitespace-pre-wrap" data-name="Text">
      <p className="relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jueves 11/06
      </p>
      <p className="relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        16:00
      </p>
    </div>
  );
}

function SideContent() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".SideContent">
      <Text />
    </div>
  );
}

function Icon() {
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
      <Icon />
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

function List() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Content />
      <SideContent />
      <Actions />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function BadgeExtended() {
  return (
    <div className="bg-[#fdfaec] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name=".Badge Extended">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[4px] relative w-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#7e4317] text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Completar
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#fbec9e] border-solid border-t inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
    </div>
  );
}

export default function CardContainer() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end overflow-clip relative rounded-[16px] shadow-[-1px_4px_8px_0px_rgba(223,224,230,0.6)] size-full" data-name="Card Container">
      <Main />
      <BadgeExtended />
    </div>
  );
}