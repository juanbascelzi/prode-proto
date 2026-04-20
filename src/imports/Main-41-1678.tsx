import svgPaths from "./svg-dgu8onuy2b";

function Capa() {
  return (
    <div className="absolute h-[22px] left-[3px] top-px w-[18.28px]" data-name="Capa_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.28 22">
        <g clipPath="url(#clip0_41_1685)" id="Capa_1">
          <path d={svgPaths.p28bcb600} fill="var(--fill-0, #29317F)" id="Vector" />
          <path d={svgPaths.pcfcfb00} fill="var(--fill-0, #29317F)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_41_1685">
            <rect fill="white" height="22" width="18.28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <Capa />
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
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[12px] tracking-[0.024px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tenés tiempo hasta el 11/6 15:55 hs
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Podio ideal
      </p>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Argentina campeón
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
          <path clipRule="evenodd" d={svgPaths.pcdb3800} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[300px]" data-name="List">
      <Avatar />
      <Content />
      <Actions />
    </div>
  );
}

export default function Main() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Main">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <List />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}