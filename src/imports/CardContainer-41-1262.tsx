import svgPaths from "./svg-bb3m5mev1f";

function Capa() {
  return (
    <div className="absolute h-[22px] left-[3px] top-px w-[18.28px]" data-name="Capa_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.28 22">
        <g clipPath="url(#clip0_41_1273)" id="Capa_1">
          <path d={svgPaths.p28bcb600} fill="var(--fill-0, #29317F)" id="Vector" />
          <path d={svgPaths.pcfcfb00} fill="var(--fill-0, #29317F)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_41_1273">
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
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Configurá tu podio ideal
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

export default function CardContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end justify-end overflow-clip relative rounded-[16px] shadow-[-1px_4px_8px_0px_rgba(223,224,230,0.6)] size-full" data-name="Card Container">
      <Main />
    </div>
  );
}