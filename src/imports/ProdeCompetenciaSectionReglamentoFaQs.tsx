import svgPaths from "./svg-d5o9btj0x2";

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
    <div className="bg-[#f1f4fd] relative rounded-[8px] shrink-0" data-name="Chip">
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
    <div className="bg-[#c5d4f8] relative rounded-[8px] shrink-0" data-name="Chip">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Preguntas frecuentes
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#3a3a45] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¿Qué es un ProDe?
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly1() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon1 />
    </div>
  );
}

function Accordion() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Title1 />
      <ButtonIconOnly1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#3a3a45] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¿Pregunta 2?
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly2() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon2 />
    </div>
  );
}

function Accordion1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Title2 />
      <ButtonIconOnly2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#3a3a45] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¿Pregunta 3?
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly3() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon3 />
    </div>
  );
}

function Accordion2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Title3 />
      <ButtonIconOnly3 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Participación
      </p>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#3a3a45] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¿Pregunta 4?
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly4() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon4 />
    </div>
  );
}

function Accordion3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Title5 />
      <ButtonIconOnly4 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#3a3a45] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¿Pregunta 5?
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly5() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon5 />
    </div>
  );
}

function Accordion4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Title6 />
      <ButtonIconOnly5 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#3a3a45] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¿Pregunta 6?
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly6() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon6 />
    </div>
  );
}

function Accordion5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Title7 />
      <ButtonIconOnly6 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] h-[792px] items-start overflow-clip px-[16px] py-[24px] relative shrink-0 w-[360px]" data-name="Main">
      <Frame />
      <Title />
      <Accordion />
      <Accordion1 />
      <Accordion2 />
      <Title4 />
      <Accordion3 />
      <Accordion4 />
      <Accordion5 />
    </div>
  );
}

export default function ProdeCompetenciaSectionReglamentoFaQs() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col items-center relative size-full" data-name="PRODE / Competencia / Section / Reglamento / FAQs">
      <HeaderApp />
      <Main />
    </div>
  );
}