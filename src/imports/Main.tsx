import svgPaths from "./svg-86ffft5eov";

function Icon() {
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

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resultados
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Positivos
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[24px] text-right tracking-[0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        9
      </p>
    </div>
  );
}

function SideContent() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-[135px]" data-name="List">
      <Avatar />
      <Content />
      <SideContent />
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

function Icon1() {
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

function Avatar3() {
  return (
    <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <Icon1 />
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
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resultados
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Exactos
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[24px] text-right tracking-[0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
    </div>
  );
}

function SideContent1() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name=".SideContent">
      <Text1 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-[135px]" data-name="List">
      <Avatar2 />
      <Content1 />
      <SideContent1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative w-full">
      <List />
      <Divider />
      <List1 />
    </div>
  );
}

export default function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-[16px] relative size-full" data-name="Main">
      <Frame />
    </div>
  );
}