import svgPaths from "./svg-ev2jp7vrpg";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2e44b780} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly() {
  return (
    <div className="content-stretch flex items-center justify-end max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon />
    </div>
  );
}

function Back() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[16px] top-[8px]" data-name="Back">
      <ButtonIconOnly />
    </div>
  );
}

function HeaderFlow() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header_Flow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#303036] text-[16px] text-center text-ellipsis tracking-[0.032px] w-[173px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-g0mm18 leading-[1.4] overflow-hidden">Final soñada</p>
          </div>
          <Back />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path clipRule="evenodd" d={svgPaths.p1101bb80} fill="var(--fill-0, #636271)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white min-h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[16px] relative w-full">
          <Search1 />
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[16px] tracking-[0.032px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Por nombre
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Search">
      <Input />
    </div>
  );
}

function Subheader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".subheader">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[8px] relative w-full">
          <Search />
        </div>
      </div>
    </div>
  );
}

function HeaderApp() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Header/App">
      <HeaderFlow />
      <Subheader />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pronóstico
      </p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[36px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🏳️</p>
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

function X() {
  return (
    <div className="relative shrink-0 size-[10.575px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.575 10.575">
        <g id="x">
          <path clipRule="evenodd" d={svgPaths.p2cb29dc0} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly1() {
  return (
    <div className="absolute bg-[rgba(233,233,244,0.5)] content-stretch flex items-center justify-center left-[52px] overflow-clip p-[3.525px] rounded-[4.5px] size-[18px] top-0" data-name="Button/IconOnly">
      <X />
    </div>
  );
}

function Mencion() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[68px] items-center justify-center relative shrink-0 w-[76px]" data-name="Mencion 1">
      <Avatar />
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Equipo 1
      </p>
      <ButtonIconOnly1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        🏆 Campeón
      </p>
      <Mencion />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <Frame3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[156px]">
      <Frame />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[36px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🏳️</p>
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

function X1() {
  return (
    <div className="relative shrink-0 size-[10.575px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.575 10.575">
        <g id="x">
          <path clipRule="evenodd" d={svgPaths.p2cb29dc0} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly2() {
  return (
    <div className="absolute bg-[rgba(233,233,244,0.5)] content-stretch flex items-center justify-center left-[52px] overflow-clip p-[3.525px] rounded-[4.5px] size-[18px] top-0" data-name="Button/IconOnly">
      <X1 />
    </div>
  );
}

function Mencion1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[68px] items-center justify-center relative shrink-0 w-[76px]" data-name="Mencion 2">
      <Avatar2 />
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Equipo 2
      </p>
      <ButtonIconOnly2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        🥈 Segundo puesto
      </p>
      <Mencion1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <Frame5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[156px]">
      <Frame1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[328px]">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Selecciones (48)
      </p>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇩🇪</p>
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
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alemania
      </p>
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

function Action() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar4 />
      <Content />
      <Actions />
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

function Avatar7() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇸🇦</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Arabia Saudita
      </p>
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

function Action1() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action1 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar6 />
      <Content1 />
      <Actions1 />
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

function Avatar9() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇩🇿</p>
      </div>
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

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Algeria
      </p>
    </div>
  );
}

function Icon3() {
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

function Action2() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action2 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar8 />
      <Content2 />
      <Actions2 />
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

function Avatar11() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇦🇷</p>
      </div>
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

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Argentina
      </p>
    </div>
  );
}

function Icon4() {
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

function Action3() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action3 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar10 />
      <Content3 />
      <Actions3 />
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

function Avatar13() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇦🇺</p>
      </div>
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

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Australia
      </p>
    </div>
  );
}

function Icon5() {
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

function Action4() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action4 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar12 />
      <Content4 />
      <Actions4 />
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

function Avatar15() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇦🇹</p>
      </div>
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

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Austria
      </p>
    </div>
  );
}

function Icon6() {
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

function Action5() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action5 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar14 />
      <Content5 />
      <Actions5 />
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

function Avatar17() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇧🇪</p>
      </div>
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

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bélgica
      </p>
    </div>
  );
}

function Icon7() {
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

function Action6() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action6 />
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar16 />
      <Content6 />
      <Actions6 />
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

function Avatar19() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇧🇷</p>
      </div>
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

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brasil
      </p>
    </div>
  );
}

function Icon8() {
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

function Action7() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action7 />
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar18 />
      <Content7 />
      <Actions7 />
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

function Avatar21() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇨🇦</p>
      </div>
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

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Canadá
      </p>
    </div>
  );
}

function Icon9() {
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

function Action8() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action8 />
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar20 />
      <Content8 />
      <Actions8 />
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

function Avatar23() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇨🇻</p>
      </div>
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

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cabo Verde
      </p>
    </div>
  );
}

function Icon10() {
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

function Action9() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action9 />
    </div>
  );
}

function List10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar22 />
      <Content9 />
      <Actions9 />
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

function Avatar25() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇨🇴</p>
      </div>
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

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Colombia
      </p>
    </div>
  );
}

function Icon11() {
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

function Action10() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action10 />
    </div>
  );
}

function List11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar24 />
      <Content10 />
      <Actions10 />
    </div>
  );
}

function Divider10() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar27() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇭🇷</p>
      </div>
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

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Croacia
      </p>
    </div>
  );
}

function Icon12() {
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

function Action11() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action11 />
    </div>
  );
}

function List12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar26 />
      <Content11 />
      <Actions11 />
    </div>
  );
}

function Divider11() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar29() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇰🇷</p>
      </div>
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

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Corea del Sur
      </p>
    </div>
  );
}

function Icon13() {
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

function Action12() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action12 />
    </div>
  );
}

function List13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar28 />
      <Content12 />
      <Actions12 />
    </div>
  );
}

function Divider12() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar31() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇨🇮</p>
      </div>
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

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Costa de Marfil
      </p>
    </div>
  );
}

function Icon14() {
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

function Action13() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action13 />
    </div>
  );
}

function List14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar30 />
      <Content13 />
      <Actions13 />
    </div>
  );
}

function Divider13() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar33() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇨🇼</p>
      </div>
    </div>
  );
}

function Avatar32() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar33 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Curazao
      </p>
    </div>
  );
}

function Icon15() {
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

function Action14() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action14 />
    </div>
  );
}

function List15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar32 />
      <Content14 />
      <Actions14 />
    </div>
  );
}

function Divider14() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar35() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇪🇨</p>
      </div>
    </div>
  );
}

function Avatar34() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar35 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ecuador
      </p>
    </div>
  );
}

function Icon16() {
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

function Action15() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action15 />
    </div>
  );
}

function List16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar34 />
      <Content15 />
      <Actions15 />
    </div>
  );
}

function Divider15() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar37() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇪🇬</p>
      </div>
    </div>
  );
}

function Avatar36() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar37 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Egipto
      </p>
    </div>
  );
}

function Icon17() {
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

function Action16() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action16 />
    </div>
  );
}

function List17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar36 />
      <Content16 />
      <Actions16 />
    </div>
  );
}

function Divider16() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar39() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🏴󠁧󠁢󠁳󠁣󠁴󠁿</p>
      </div>
    </div>
  );
}

function Avatar38() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar39 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escocia
      </p>
    </div>
  );
}

function Icon18() {
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

function Action17() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action17 />
    </div>
  );
}

function List18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar38 />
      <Content17 />
      <Actions17 />
    </div>
  );
}

function Divider17() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar41() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🇪🇸</p>
      </div>
    </div>
  );
}

function Avatar40() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar41 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        España
      </p>
    </div>
  );
}

function Icon19() {
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

function Action18() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Actions18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions">
      <Action18 />
    </div>
  );
}

function List19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar40 />
      <Content18 />
      <Actions18 />
    </div>
  );
}

function Divider18() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function List() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative w-full">
        <List1 />
        <Divider />
        <List2 />
        <Divider1 />
        <List3 />
        <Divider2 />
        <List4 />
        <Divider3 />
        <List5 />
        <Divider4 />
        <List6 />
        <Divider5 />
        <List7 />
        <Divider6 />
        <List8 />
        <Divider7 />
        <List9 />
        <Divider8 />
        <List10 />
        <Divider9 />
        <List11 />
        <Divider10 />
        <List12 />
        <Divider11 />
        <List13 />
        <Divider12 />
        <List14 />
        <Divider13 />
        <List15 />
        <Divider14 />
        <List16 />
        <Divider15 />
        <List17 />
        <Divider16 />
        <List18 />
        <Divider17 />
        <List19 />
        <Divider18 />
      </div>
    </div>
  );
}

export default function MencionesSelector() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] items-center px-[16px] relative size-full" data-name="Menciones / Selector">
      <HeaderApp />
      <Title />
      <Frame8 />
      <Title1 />
      <List />
    </div>
  );
}