import svgPaths from "./svg-wtuieeelzw";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p70694f0} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <Icon />
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

function Description() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full" data-name="Description">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Viernes 12/6 22:00 hs
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Próximo partido
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        🇨🇦 Canadá vs Rep. Checa 🇨🇿
      </p>
      <Description />
    </div>
  );
}

function Icon1() {
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
      <Icon1 />
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
      <Avatar />
      <Content />
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
          <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#7e4317] text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Sin pronóstico
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#fbec9e] border-solid border-t inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
    </div>
  );
}

export default function CardContainer() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="Card Container">
      <div className="content-stretch flex flex-col items-end justify-end overflow-clip relative rounded-[inherit] size-full">
        <Main />
        <BadgeExtended />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}