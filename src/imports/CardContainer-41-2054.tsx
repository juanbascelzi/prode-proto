import svgPaths from "./svg-wemqz09rww";

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trending-up">
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
      <TrendingUp />
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
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Posición: #5
      </p>
    </div>
  );
}

function Pills() {
  return (
    <div className="bg-[#f1f4fd] relative rounded-[16px] shrink-0" data-name="Pills">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Puntos: 32
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

function Main() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Main">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <List />
        </div>
      </div>
    </div>
  );
}

export default function CardContainer() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[-1px_4px_8px_0px_rgba(223,224,230,0.6)] size-full" data-name="Card Container">
      <Main />
    </div>
  );
}