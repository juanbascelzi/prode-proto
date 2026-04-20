import svgPaths from "./svg-4phu5ndzz7";

function Overlay() {
  return <div className="absolute bg-[rgba(50,50,50,0.8)] h-[800px] left-0 top-0 w-[360px]" data-name="Overlay" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p28fcbf80} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly() {
  return (
    <div className="absolute content-stretch flex items-center justify-end max-w-[224px] overflow-clip p-[8px] right-0 rounded-[8px] top-0" data-name="Button/IconOnly">
      <Icon />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] max-w-[256px] min-h-px min-w-px relative text-[#303036] text-[16px] text-center tracking-[0.032px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">Tu podio ideal</p>
      </div>
      <ButtonIconOnly />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[8px] relative w-full">
          <div className="bg-[#eeeef1] h-[4px] rounded-[4px] shrink-0 w-[88px]" data-name="Dragger" />
          <Title />
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">🏆</p>
      </div>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative whitespace-pre-wrap" data-name=".Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[12px] tracking-[0.024px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Campeón
      </p>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🇦🇷 Argentina
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar />
      <Content />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">🥈</p>
      </div>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative whitespace-pre-wrap" data-name=".Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[12px] tracking-[0.024px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Segundo puesto
      </p>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🇧🇷 Brasil
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar2 />
      <Content1 />
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

function Avatar5() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">🥉</p>
      </div>
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
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative whitespace-pre-wrap" data-name=".Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[12px] tracking-[0.024px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Tercer puesto
      </p>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🇩🇪 Alemania
      </p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar4 />
      <Content2 />
    </div>
  );
}

function Replace() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Replace">
      <List />
      <Divider />
      <List1 />
      <Divider1 />
      <List2 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <Replace />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p39febe00} fill="var(--fill-0, #636271)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Extra() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-full" data-name="Extra">
      <Icon1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[14px] text-center tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Podés modificarlo hasta el 11/06 a las 15:55 hs
      </p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="bg-[#496be3] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Button/Large">
      <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[16px] text-center text-white tracking-[0.032px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Modificar podio
          </p>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-center relative shrink-0 w-full" data-name="Actions">
      <ButtonLarge />
    </div>
  );
}

function DialogFooterMobile() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".DialogFooter/Mobile">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative w-full">
          <Extra />
          <Actions />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Dialog() {
  return (
    <div className="absolute bg-white bottom-0 left-0 rounded-tl-[16px] rounded-tr-[16px] w-[360px]" data-name="Dialog">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Header />
        <Body />
        <DialogFooterMobile />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_-2px_24px_0px_#b5b6c4]" />
    </div>
  );
}

export default function GrupoCompetenciaBackdropScore() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Grupo / Competencia / Backdrop / Score">
      <Overlay />
      <Dialog />
    </div>
  );
}