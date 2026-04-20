import svgPaths from "./svg-qudvmrkd59";

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
            <p className="css-g0mm18 leading-[1.4] overflow-hidden">Prónosticos deportivos</p>
          </div>
          <Back />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Content">
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#213478] text-[14px] text-center tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Prónosticos</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[42px] items-center min-h-px min-w-px relative" data-name="1">
      <Content />
      <div className="bg-[#496be3] h-[2px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Select" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Content">
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] text-center tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Fixture</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[42px] items-center min-h-px min-w-px relative" data-name="2">
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Content">
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] text-center tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Reglamento</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[42px] items-center min-h-px min-w-px relative" data-name="3">
      <Content2 />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Group">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#e9e9f4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col h-[43px] items-start relative shrink-0 w-full" data-name="Tabs">
      <Group />
      <Divider />
    </div>
  );
}

function Subheader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".subheader">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[8px] relative w-full">
          <Tabs />
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

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trending-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trending-up">
          <path clipRule="evenodd" d={svgPaths.pd55c100} fill="var(--fill-0, #1F622C)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#f5fdf6] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
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

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ranking
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Posición: #5
      </p>
    </div>
  );
}

function Pills() {
  return (
    <div className="bg-[#f5fdf6] relative rounded-[16px] shrink-0" data-name="Pills">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#1f622c] text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Puntos: 32
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cff6d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
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
      <Content3 />
      <SideContent />
      <Actions />
    </div>
  );
}

function Main1() {
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

function CardContainer() {
  return (
    <div className="h-[72px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Card Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Main1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p27c29a00} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <Icon2 />
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

function Description() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full" data-name="Description">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jueves 11/6 16:00 hs
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Próximo partido
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        México vs Sudáfrica
      </p>
      <Description />
    </div>
  );
}

function Icon3() {
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

function Action1() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <Icon3 />
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

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar2 />
      <Content4 />
      <Actions1 />
    </div>
  );
}

function Main2() {
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

function CardContainer1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[16px] items-end justify-end overflow-clip relative rounded-[inherit] w-full">
        <Main2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p33aa0440} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-[#f1f4fd] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <Icon4 />
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

function Description1() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full" data-name="Description">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tenés tiempo hasta el 11/6 15:55 hs
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pronosticá la final soñada
      </p>
      <Description1 />
    </div>
  );
}

function Icon5() {
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

function Action2() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Action 1">
      <Icon5 />
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

function List2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar4 />
      <Content5 />
      <Actions2 />
    </div>
  );
}

function Main3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <List2 />
        </div>
      </div>
    </div>
  );
}

function CardContainer2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[16px] items-end justify-end overflow-clip relative rounded-[inherit] w-full">
        <Main3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative shrink-0 w-[359px]">
      <CardContainer />
      <CardContainer1 />
      <CardContainer2 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Partidos
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1281c00} fill="var(--fill-0, #AAAABA)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly1() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Right">
          <path clipRule="evenodd" d={svgPaths.p248d3d00} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSmall() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-[104px] relative rounded-[8px]" data-name="Button/Small">
      <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] text-center tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Fecha 1
          </p>
          <IconRight />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon7() {
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

function ButtonIconOnly2() {
  return (
    <div className="bg-white max-w-[224px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
        <Icon7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[328px]" data-name="Navigation">
      <ButtonIconOnly1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ButtonSmall />
      </div>
      <ButtonIconOnly2 />
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#c5d4f8] relative rounded-[8px] shrink-0" data-name="Chip">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Por jugar
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#f1f4fd] relative rounded-[8px] shrink-0" data-name="Chip">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Finalizados
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[#f1f4fd] relative rounded-[8px] shrink-0" data-name="Chip">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Todos
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Chip />
      <Chip1 />
      <Chip2 />
    </div>
  );
}

function Chips() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Chips">
      <Frame />
    </div>
  );
}

function TitleSeparador() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Title + Separador">
      <Chips />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jueves 11/6
      </p>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇲🇽</p>
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar7 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        México
      </p>
    </div>
  );
}

function Team1Info() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team 1 info">
      <Avatar6 />
      <Title2 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input />
    </div>
  );
}

function InputOtp() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center min-h-px min-w-px relative" data-name="1">
      <Team1Info />
      <InputOtp />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-center justify-center relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        16:00
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input1 />
    </div>
  );
}

function InputOtp1() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers1 />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇿🇦</p>
      </div>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar9 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sudáfrica
      </p>
    </div>
  );
}

function Team2Info() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team 2 info">
      <Avatar8 />
      <Title4 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center min-h-px min-w-px relative" data-name="2">
      <InputOtp1 />
      <Team2Info />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component4 />
      <Title3 />
      <Component5 />
    </div>
  );
}

function Match1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component3 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo A · Estadio Azteca, Ciudad de México, México
      </p>
    </div>
  );
}

function Match() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 1">
      <Match1 />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇰🇷</p>
      </div>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar11 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        C. del Sur
      </p>
    </div>
  );
}

function TeamInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar10 />
      <Title5 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input2 />
    </div>
  );
}

function InputOtp2() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers2 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo />
      <InputOtp2 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-center justify-center relative shrink-0 w-[31px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        23:00
      </p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input3 />
    </div>
  );
}

function InputOtp3() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers3 />
    </div>
  );
}

function Avatar13() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🏳️</p>
      </div>
    </div>
  );
}

function Avatar12() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar13 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        TBD
      </p>
    </div>
  );
}

function TeamInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar12 />
      <Title7 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp3 />
      <TeamInfo1 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component7 />
      <Title6 />
      <Component8 />
    </div>
  );
}

function Match3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component6 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo D · Estadio Akron, Guadalajara, México
      </p>
    </div>
  );
}

function Match2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 2">
      <Match3 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Viernes 12/6
      </p>
    </div>
  );
}

function Avatar15() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇨🇦</p>
      </div>
    </div>
  );
}

function Avatar14() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar15 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Canadá
      </p>
    </div>
  );
}

function TeamInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar14 />
      <Title9 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input4 />
    </div>
  );
}

function InputOtp4() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers4 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo2 />
      <InputOtp4 />
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        16:00
      </p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input5 />
    </div>
  );
}

function InputOtp5() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers5 />
    </div>
  );
}

function Avatar17() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🏳️</p>
      </div>
    </div>
  );
}

function Avatar16() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar17 />
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        TBD
      </p>
    </div>
  );
}

function TeamInfo3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar16 />
      <Title11 />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp5 />
      <TeamInfo3 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component10 />
      <Title10 />
      <Component11 />
    </div>
  );
}

function Match5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component9 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo B · BMO Field, Toronto, Canadá
      </p>
    </div>
  );
}

function Match4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 3">
      <Match5 />
    </div>
  );
}

function Avatar19() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇺🇸</p>
      </div>
    </div>
  );
}

function Avatar18() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar19 />
    </div>
  );
}

function Title12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        USA
      </p>
    </div>
  );
}

function TeamInfo4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar18 />
      <Title12 />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input6 />
    </div>
  );
}

function InputOtp6() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers6 />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo4 />
      <InputOtp6 />
    </div>
  );
}

function Title13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        22:00
      </p>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input7 />
    </div>
  );
}

function InputOtp7() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers7 />
    </div>
  );
}

function Avatar21() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇵🇾</p>
      </div>
    </div>
  );
}

function Avatar20() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar21 />
    </div>
  );
}

function Title14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Paraguay
      </p>
    </div>
  );
}

function TeamInfo5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar20 />
      <Title14 />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp7 />
      <TeamInfo5 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component13 />
      <Title13 />
      <Component14 />
    </div>
  );
}

function Match7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component12 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo D · SoFi Stadium, Los Ágeles, USA
      </p>
    </div>
  );
}

function Match6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 4">
      <Match7 />
    </div>
  );
}

function Title15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sábado 13/6
      </p>
    </div>
  );
}

function Avatar23() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇶🇦</p>
      </div>
    </div>
  );
}

function Avatar22() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar23 />
    </div>
  );
}

function Title16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Qatar
      </p>
    </div>
  );
}

function TeamInfo6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar22 />
      <Title16 />
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input8 />
    </div>
  );
}

function InputOtp8() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers8 />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo6 />
      <InputOtp8 />
    </div>
  );
}

function Title17() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        16:00
      </p>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input9 />
    </div>
  );
}

function InputOtp9() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers9 />
    </div>
  );
}

function Avatar25() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇨🇭</p>
      </div>
    </div>
  );
}

function Avatar24() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar25 />
    </div>
  );
}

function Title18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Suiza
      </p>
    </div>
  );
}

function TeamInfo7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar24 />
      <Title18 />
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp9 />
      <TeamInfo7 />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component16 />
      <Title17 />
      <Component17 />
    </div>
  );
}

function Match9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component15 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo B · Levi’s Stadium, California, USA
      </p>
    </div>
  );
}

function Match8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 5">
      <Match9 />
    </div>
  );
}

function Avatar27() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇧🇷</p>
      </div>
    </div>
  );
}

function Avatar26() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar27 />
    </div>
  );
}

function Title19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brasil
      </p>
    </div>
  );
}

function TeamInfo8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar26 />
      <Title19 />
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input10 />
    </div>
  );
}

function InputOtp10() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers10 />
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo8 />
      <InputOtp10 />
    </div>
  );
}

function Title20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        19:00
      </p>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input11 />
    </div>
  );
}

function InputOtp11() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers11 />
    </div>
  );
}

function Avatar29() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇲🇦</p>
      </div>
    </div>
  );
}

function Avatar28() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar29 />
    </div>
  );
}

function Title21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Marruecos
      </p>
    </div>
  );
}

function TeamInfo9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar28 />
      <Title21 />
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp11 />
      <TeamInfo9 />
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component19 />
      <Title20 />
      <Component20 />
    </div>
  );
}

function Match11() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component18 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo C · MetLife Stadium, East Rutherford (NY/NJ), USA
      </p>
    </div>
  );
}

function Match10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 6">
      <Match11 />
    </div>
  );
}

function Avatar31() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇭🇹</p>
      </div>
    </div>
  );
}

function Avatar30() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar31 />
    </div>
  );
}

function Title22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Haití
      </p>
    </div>
  );
}

function TeamInfo10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar30 />
      <Title22 />
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input12 />
    </div>
  );
}

function InputOtp12() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers12 />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo10 />
      <InputOtp12 />
    </div>
  );
}

function Title23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        22:00
      </p>
    </div>
  );
}

function Input13() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input13 />
    </div>
  );
}

function InputOtp13() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers13 />
    </div>
  );
}

function Avatar33() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🏴󠁧󠁢󠁳󠁣󠁴󠁿</p>
      </div>
    </div>
  );
}

function Avatar32() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar33 />
    </div>
  );
}

function Title24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Marruecos
      </p>
    </div>
  );
}

function TeamInfo11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar32 />
      <Title24 />
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp13 />
      <TeamInfo11 />
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component22 />
      <Title23 />
      <Component23 />
    </div>
  );
}

function Match13() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component21 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo C · Gillette Stadium, Boston, USA
      </p>
    </div>
  );
}

function Match12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 7">
      <Match13 />
    </div>
  );
}

function Title25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Domingo 14/6
      </p>
    </div>
  );
}

function Avatar35() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇦🇺</p>
      </div>
    </div>
  );
}

function Avatar34() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar35 />
    </div>
  );
}

function Title26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Australia
      </p>
    </div>
  );
}

function TeamInfo12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar34 />
      <Title26 />
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input14 />
    </div>
  );
}

function InputOtp14() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers14 />
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo12 />
      <InputOtp14 />
    </div>
  );
}

function Title27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        01:00
      </p>
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input15 />
    </div>
  );
}

function InputOtp15() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers15 />
    </div>
  );
}

function Avatar37() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🏳️</p>
      </div>
    </div>
  );
}

function Avatar36() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar37 />
    </div>
  );
}

function Title28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        TBD
      </p>
    </div>
  );
}

function TeamInfo13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar36 />
      <Title28 />
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp15 />
      <TeamInfo13 />
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component25 />
      <Title27 />
      <Component26 />
    </div>
  );
}

function Match15() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component24 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo D · BC Place Stadium, Vancouver, Canadá
      </p>
    </div>
  );
}

function Match14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 8">
      <Match15 />
    </div>
  );
}

function Avatar39() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇩🇪</p>
      </div>
    </div>
  );
}

function Avatar38() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar39 />
    </div>
  );
}

function Title29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alemania
      </p>
    </div>
  );
}

function TeamInfo14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar38 />
      <Title29 />
    </div>
  );
}

function Input16() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input16 />
    </div>
  );
}

function InputOtp16() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers16 />
    </div>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo14 />
      <InputOtp16 />
    </div>
  );
}

function Title30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        14:00
      </p>
    </div>
  );
}

function Input17() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input17 />
    </div>
  );
}

function InputOtp17() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers17 />
    </div>
  );
}

function Avatar41() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇨🇼</p>
      </div>
    </div>
  );
}

function Avatar40() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar41 />
    </div>
  );
}

function Title31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Curazao
      </p>
    </div>
  );
}

function TeamInfo15() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar40 />
      <Title31 />
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp17 />
      <TeamInfo15 />
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component28 />
      <Title30 />
      <Component29 />
    </div>
  );
}

function Match17() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component27 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo E · NRG Stadium, Houston, USA
      </p>
    </div>
  );
}

function Match16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 9">
      <Match17 />
    </div>
  );
}

function Avatar43() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇳🇱</p>
      </div>
    </div>
  );
}

function Avatar42() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar43 />
    </div>
  );
}

function Title32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        P. Bajos
      </p>
    </div>
  );
}

function TeamInfo16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76px]" data-name="Team Info">
      <Avatar42 />
      <Title32 />
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input18 />
    </div>
  );
}

function InputOtp18() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers18 />
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo16 />
      <InputOtp18 />
    </div>
  );
}

function Title33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        17:00
      </p>
    </div>
  );
}

function Input19() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input19 />
    </div>
  );
}

function InputOtp19() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers19 />
    </div>
  );
}

function Avatar45() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇯🇵</p>
      </div>
    </div>
  );
}

function Avatar44() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar45 />
    </div>
  );
}

function Title34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Japón
      </p>
    </div>
  );
}

function TeamInfo17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76px]" data-name="Team Info">
      <Avatar44 />
      <Title34 />
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp19 />
      <TeamInfo17 />
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component31 />
      <Title33 />
      <Component32 />
    </div>
  );
}

function Match19() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component30 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Grupo F · AT&T Stadium, Dallas, USA`}</p>
    </div>
  );
}

function Match18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 10">
      <Match19 />
    </div>
  );
}

function Avatar47() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇨🇮</p>
      </div>
    </div>
  );
}

function Avatar46() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar47 />
    </div>
  );
}

function Title35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        C. de Marfil
      </p>
    </div>
  );
}

function TeamInfo18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76px]" data-name="Team Info">
      <Avatar46 />
      <Title35 />
    </div>
  );
}

function Input20() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input20 />
    </div>
  );
}

function InputOtp20() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers20 />
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo18 />
      <InputOtp20 />
    </div>
  );
}

function Title36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        20:00
      </p>
    </div>
  );
}

function Input21() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input21 />
    </div>
  );
}

function InputOtp21() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers21 />
    </div>
  );
}

function Avatar49() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇪🇨</p>
      </div>
    </div>
  );
}

function Avatar48() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar49 />
    </div>
  );
}

function Title37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ecuador
      </p>
    </div>
  );
}

function TeamInfo19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76px]" data-name="Team Info">
      <Avatar48 />
      <Title37 />
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp21 />
      <TeamInfo19 />
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component34 />
      <Title36 />
      <Component35 />
    </div>
  );
}

function Match21() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component33 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo E · Lincoln Financial Field, Filadelfia, USA
      </p>
    </div>
  );
}

function Match20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 11">
      <Match21 />
    </div>
  );
}

function Avatar51() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🏳️</p>
      </div>
    </div>
  );
}

function Avatar50() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar51 />
    </div>
  );
}

function Title38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        TBD
      </p>
    </div>
  );
}

function TeamInfo20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76px]" data-name="Team Info">
      <Avatar50 />
      <Title38 />
    </div>
  );
}

function Input22() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input22 />
    </div>
  );
}

function InputOtp22() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers22 />
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="1">
      <TeamInfo20 />
      <InputOtp22 />
    </div>
  );
}

function Title39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        23:00
      </p>
    </div>
  );
}

function Input23() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="min-h-[inherit] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeef1] border-[0.857px] border-solid inset-0 pointer-events-none rounded-[6.857px]" />
    </div>
  );
}

function InputNumbers23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.429px] items-start min-h-px min-w-px relative w-full" data-name="Input numbers">
      <Input23 />
    </div>
  );
}

function InputOtp23() {
  return (
    <div className="content-stretch flex flex-col gap-[3.429px] items-start relative shrink-0 size-[48px]" data-name="Input/OTP">
      <InputNumbers23 />
    </div>
  );
}

function Avatar53() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🇹🇳</p>
      </div>
    </div>
  );
}

function Avatar52() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar53 />
    </div>
  );
}

function Title40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Túnez
      </p>
    </div>
  );
}

function TeamInfo21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76px]" data-name="Team Info">
      <Avatar52 />
      <Title40 />
    </div>
  );
}

function Component38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp23 />
      <TeamInfo21 />
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="1">
      <Component37 />
      <Title39 />
      <Component38 />
    </div>
  );
}

function Match23() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component36 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] text-center tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grupo F · Estadio BBVA, Monterrey, México
      </p>
    </div>
  );
}

function Match22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Match 22">
      <Match23 />
    </div>
  );
}

function Partidos() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pb-[16px] relative shrink-0 w-full" data-name="Partidos">
      <TitleSeparador />
      <Title1 />
      <Match />
      <Match2 />
      <Title8 />
      <Match4 />
      <Match6 />
      <Title15 />
      <Match8 />
      <Match10 />
      <Match12 />
      <Title25 />
      <Match14 />
      <Match16 />
      <Match18 />
      <Match20 />
      <Match22 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] h-[2165px] items-center overflow-clip pb-[24px] relative shrink-0" data-name="Main">
      <Frame1 />
      <Title />
      <Navigation />
      <Partidos />
    </div>
  );
}

export default function ProdeCompetenciaSectionPronosticos() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="PRODE / Competencia / Section / Pronósticos">
      <HeaderApp />
      <Main />
    </div>
  );
}