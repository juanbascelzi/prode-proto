import svgPaths from "./svg-rjucsea2dp";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p23747500} fill="var(--fill-0, #1F622C)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#f5fdf6] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
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

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[1.4] relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¡Bien hecho!
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Completaste todos los pronósticos posibles.
      </p>
    </div>
  );
}

export default function StateCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center p-[16px] relative rounded-[16px] size-full" data-name="StateCard">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Avatar />
      <Title />
    </div>
  );
}