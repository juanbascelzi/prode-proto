import svgPaths from "./svg-8p0rx3ij7l";

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
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] text-center tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Pronósticos</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[42px] items-center min-h-px min-w-px relative" data-name="1">
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Content">
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] text-center tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Resultados</p>
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
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#213478] text-[14px] text-center tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.4]">Reglamento</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[42px] items-center min-h-px min-w-px relative" data-name="3">
      <Content2 />
      <div className="bg-[#496be3] h-[2px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Select" />
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

function Chip() {
  return (
    <div className="bg-[#f1f4fd] relative rounded-[8px] shrink-0" data-name="Chip">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Detalles
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#c5d4f8] relative rounded-[8px] shrink-0" data-name="Chip">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Premios
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
          FAQ’s
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Chip />
      <Chip1 />
      <Chip2 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.4] relative shrink-0 w-[328px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detalles de la competencia
      </p>
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Estos son los increíbles premios que recibirán los ganadores de la tabla general al finalizar la competencia.
      </p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🏆</p>
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

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Primer puesto
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Un viaje a Mendoza todo pago
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar />
      <Content3 />
    </div>
  );
}

function Main1() {
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

function CardContainer() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-[328px]" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Main1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🥈</p>
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

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Segundo puesto
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Una TV 84 pulgadas 4K
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar2 />
      <Content4 />
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
    <div className="relative rounded-[16px] shrink-0 w-[328px]" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Main2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🥉</p>
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

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tercero puesto
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Un parlante bluetooth JBL
      </p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar4 />
      <Content5 />
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
    <div className="relative rounded-[16px] shrink-0 w-[328px]" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Main3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.4] relative shrink-0 w-[328px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Distinciones
      </p>
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Los ganadores del Prode recibirán increíbles premios al finalizar la competencia.
      </p>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[18px] text-center tracking-[0.036px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">4</p>
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

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cuarto puesto
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Una pizza y una docena de empandas
      </p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar6 />
      <Content6 />
    </div>
  );
}

function Main4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <List3 />
        </div>
      </div>
    </div>
  );
}

function CardContainer3() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-[328px]" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Main4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[12px] text-center tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">1-20</p>
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

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Del puesto 1 al 20
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Un pack de cervezas
      </p>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.3]">🍻</p>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Action 1">
      <Avatar10 />
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

function List4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar8 />
      <Content7 />
      <Actions />
    </div>
  );
}

function Main5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <List4 />
        </div>
      </div>
    </div>
  );
}

function CardContainer4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-[328px]" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Main5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Avatar12() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[10px] text-center tracking-[0.02px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">21-40</p>
      </div>
    </div>
  );
}

function Avatar11() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Avatar">
      <Avatar12 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.4] min-h-px min-w-px relative" data-name=".Content">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Del puesto 21 al 40
      </p>
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empanadas para todos
      </p>
    </div>
  );
}

function Avatar13() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[24px] text-center tracking-[0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">🥟</p>
      </div>
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex items-end justify-end pr-[8px] relative shrink-0" data-name="Action 1">
      <Avatar13 />
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

function List5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Avatar11 />
      <Content8 />
      <Actions1 />
    </div>
  );
}

function Main6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <List5 />
        </div>
      </div>
    </div>
  );
}

function CardContainer5() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-[328px]" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Main6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] h-[792px] items-start overflow-clip px-[16px] py-[24px] relative shrink-0 w-[360px]" data-name="Main">
      <Frame />
      <Title />
      <CardContainer />
      <CardContainer1 />
      <CardContainer2 />
      <Title1 />
      <CardContainer3 />
      <CardContainer4 />
      <CardContainer5 />
    </div>
  );
}

export default function ProdeCompetenciaSectionReglamentoPremios() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col items-center relative size-full" data-name="PRODE / Competencia / Section / Reglamento / Premios">
      <HeaderApp />
      <Main />
    </div>
  );
}