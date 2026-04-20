import svgPaths from "./svg-gxuvbdyifx";

function Chip() {
  return (
    <div className="bg-[#f1f4fd] relative rounded-[8px] shrink-0" data-name="Chip">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
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
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
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
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Preguntas frecuentes
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Qué es el módulo de Pronósticos Deportivos?
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon />
    </div>
  );
}

function Accordion1() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title />
          <ButtonIconOnly />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#676779] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Es un módulo de Humand que permite a las comunidades crear competencias de pronósticos deportivos, donde los participantes suman puntos y compiten en un ranking.
        </p>
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion1 />
      <ExpandedAccordionBase />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Qué es una competencia?
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
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

function Accordion3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title1 />
          <ButtonIconOnly1 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Es una instancia dentro del módulo en la que un grupo de usuarios participa prediciendo partidos y acumulando puntos según sus aciertos.
        </p>
      </div>
    </div>
  );
}

function Accordion2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion3 />
      <ExpandedAccordionBase1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Puedo participar en más de una competencia?
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
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

function Accordion5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title2 />
          <ButtonIconOnly2 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sí. Puedes participar en múltiples competencias al mismo tiempo. Cada una funciona de manera independiente y los pronósticos se realizan por competencia, incluso si el partido es el mismo.
        </p>
      </div>
    </div>
  );
}

function Accordion4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion5 />
      <ExpandedAccordionBase2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Qué puedo pronosticar en cada partido?
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
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

function Accordion7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title3 />
          <ButtonIconOnly3 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          El marcador final del partido considerando los 90 minutos reglamentarios más el tiempo adicional, en caso de haber. En caso de empate, se puede pronosticar qué equipo clasifica. No se considera el marcador exacto de penales.
        </p>
      </div>
    </div>
  );
}

function Accordion6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion7 />
      <ExpandedAccordionBase3 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Hasta cuándo puedo cargar o modificar un pronóstico?
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
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

function Accordion9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title4 />
          <ButtonIconOnly4 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Hasta 1 minuto antes del inicio del partido. Una vez iniciado, el pronóstico queda bloqueado y no puede modificarse.
        </p>
      </div>
    </div>
  );
}

function Accordion8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion9 />
      <ExpandedAccordionBase4 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Puedo ver los pronósticos de otros participantes?
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
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

function Accordion11() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title5 />
          <ButtonIconOnly5 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase5() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          No. Los pronósticos de otros participantes no son visibles para el resto.
        </p>
      </div>
    </div>
  );
}

function Accordion10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion11 />
      <ExpandedAccordionBase5 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Cómo se calculan y cuándo se asignan los puntos?
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
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

function Accordion13() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title6 />
          <ButtonIconOnly6 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase6() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#636271] text-[0px] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[1.4]">{`Los puntos se asignan según el nivel de acierto del pronóstico. Para más detalle, consulta la sección `}</span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Sistema de Puntajes. `}</span>
          <span className="leading-[1.4]">Una vez finalizado el partido y cargado el resultado, el sistema asigna los puntos automáticamente.</span>
        </p>
      </div>
    </div>
  );
}

function Accordion12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion13 />
      <ExpandedAccordionBase6 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Qué son las predicciones especiales y otorgan puntos?
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly7() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon7 />
    </div>
  );
}

function Accordion15() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title7 />
          <ButtonIconOnly7 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase7() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Son pronósticos adicionales definidos por la competencia, como campeón, subcampeón y tercer puesto. El usuario obtiene puntos adicionales si acierta estas predicciones.
        </p>
      </div>
    </div>
  );
}

function Accordion14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion15 />
      <ExpandedAccordionBase7 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Cuándo debo hacer las predicciones especiales?
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly8() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon8 />
    </div>
  );
}

function Accordion17() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title8 />
          <ButtonIconOnly8 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase8() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Antes de que comience la competencia. Una vez iniciada, no se pueden modificar. Si no se realizan, no se asignan puntos adicionales.
        </p>
      </div>
    </div>
  );
}

function Accordion16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion17 />
      <ExpandedAccordionBase8 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Cómo funciona el ranking?
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly9() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon9 />
    </div>
  );
}

function Accordion19() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title9 />
          <ButtonIconOnly9 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase9() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          El ranking se ordena según la cantidad total de puntos acumulados dentro de la competencia.
        </p>
      </div>
    </div>
  );
}

function Accordion18() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion19 />
      <ExpandedAccordionBase9 />
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Qué pasa si hay empate en el ranking?
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly10() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon10 />
    </div>
  );
}

function Accordion21() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title10 />
          <ButtonIconOnly10 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase10() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          El sistema puede aplicar criterios de desempate definidos específicamente para la competencia.
        </p>
      </div>
    </div>
  );
}

function Accordion20() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion21 />
      <ExpandedAccordionBase10 />
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Quién crea y administra una competencia y define sus reglas y premios?
      </p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly11() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon11 />
    </div>
  );
}

function Accordion23() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title11 />
          <ButtonIconOnly11 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase11() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Los administradores de la comunidad crean y administran la competencia, y definen sus reglas y premios.
        </p>
      </div>
    </div>
  );
}

function Accordion22() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion23 />
      <ExpandedAccordionBase11 />
    </div>
  );
}

function Title12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Humand gestiona o garantiza premios?
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly12() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon12 />
    </div>
  );
}

function Accordion25() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title12 />
          <ButtonIconOnly12 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase12() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          No. Humand provee el módulo, pero la gestión y entrega de premios es responsabilidad del organizador.
        </p>
      </div>
    </div>
  );
}

function Accordion24() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion25 />
      <ExpandedAccordionBase12 />
    </div>
  );
}

function Title13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ¿Los horarios de los partidos están ajustados a mi zona horaria?
      </p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly13() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[224px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button/IconOnly">
      <Icon13 />
    </div>
  );
}

function Accordion27() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Title13 />
          <ButtonIconOnly13 />
        </div>
      </div>
    </div>
  );
}

function ExpandedAccordionBase13() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".Expanded accordion (base)">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] px-[16px] relative w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#636271] text-[16px] tracking-[0.032px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Sí. Los partidos se muestran automáticamente según tu zona horaria.
        </p>
      </div>
    </div>
  );
}

function Accordion26() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[328px]" data-name="Accordion">
      <Accordion27 />
      <ExpandedAccordionBase13 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[328px]">
      <Accordion />
      <Accordion2 />
      <Accordion4 />
      <Accordion6 />
      <Accordion8 />
      <Accordion10 />
      <Accordion12 />
      <Accordion14 />
      <Accordion16 />
      <Accordion18 />
      <Accordion20 />
      <Accordion22 />
      <Accordion24 />
      <Accordion26 />
    </div>
  );
}

export default function ContenidoInterno() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full" data-name="Contenido interno">
      <Frame />
      <Frame1 />
    </div>
  );
}