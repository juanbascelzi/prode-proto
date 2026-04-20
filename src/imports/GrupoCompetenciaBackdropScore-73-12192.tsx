import svgPaths from "./svg-7djx5ycnz3";

function Overlay() {
  return <div className="absolute bg-[rgba(50,50,50,0.8)] h-[720px] left-0 top-0 w-[360px]" data-name="Overlay" />;
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
        <p className="leading-[1.4] whitespace-pre-wrap">Argentina - Francia</p>
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

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1bc1c800} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly1() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[65px]">
      <ButtonIconOnly1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1bc1c800} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly2() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[64px]">
      <ButtonIconOnly2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[166px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[56px] text-center tracking-[0.112px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">🇦🇷</p>
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-center justify-center relative shrink-0 w-[73px]">
      <Avatar />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-px relative rounded-[8px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] p-[16px] relative size-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#303036] text-[32px] tracking-[0.064px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            3
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputNumbers() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input />
    </div>
  );
}

function InputOtp() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 size-[64px]" data-name="Input/OTP">
      <InputNumbers />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[62px] items-center justify-end relative shrink-0 w-[145px]" data-name="1">
      <Frame4 />
      <InputOtp />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[22px]" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        VS
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-px relative rounded-[8px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] p-[16px] relative size-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#303036] text-[32px] tracking-[0.064px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            3
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputNumbers1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input1 />
    </div>
  );
}

function InputOtp1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 size-[64px]" data-name="Input/OTP">
      <InputNumbers1 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[56px] text-center tracking-[0.112px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">🇫🇷</p>
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-center justify-center relative shrink-0 w-[73px]">
      <Avatar2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[62px] items-center relative shrink-0 w-[145px]" data-name="2">
      <InputOtp1 />
      <Frame6 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component1 />
      <Title1 />
      <Component2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p31b5f680} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly3() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[64px]">
      <ButtonIconOnly3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p31b5f680} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly4() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[64px]">
      <ButtonIconOnly4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[166px]">
      <Frame2 />
      <Frame3 />
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

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.4] relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Quién gana si hay penales?
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[12px] tracking-[0.024px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        {`En partidos de eliminación directa, debés seleccionar `}
        <br aria-hidden="true" />
        el equipo que ganará si el partido termina empatado.
      </p>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">🇦🇷</p>
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

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Argentina
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar4 />
      <Content />
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

function SelectionCard() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Selection card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Main />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">🇫🇷</p>
      </div>
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

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Content">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Francia
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar6 />
      <Content1 />
    </div>
  );
}

function Main1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <List1 />
        </div>
      </div>
    </div>
  );
}

function SelectionCard1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Selection card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Main1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[327px]" data-name="Select">
      <SelectionCard />
      <SelectionCard1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Select />
    </div>
  );
}

function Replace() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Replace">
      <Frame5 />
      <Component />
      <Frame7 />
      <Divider />
      <Title2 />
      <Frame8 />
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

function ButtonLarge() {
  return (
    <div className="bg-[#dfe0e6] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Button/Large">
      <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#aaaaba] text-[16px] text-center tracking-[0.032px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Guardar pronóstico
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
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative w-full">
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