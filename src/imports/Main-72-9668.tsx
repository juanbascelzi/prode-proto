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
    <div className="bg-[#c5d4f8] relative rounded-[8px] shrink-0" data-name="Chip">
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
    <div className="bg-[#f1f4fd] relative rounded-[8px] shrink-0" data-name="Chip">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Premios de la competencia
      </p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[12px] tracking-[0.024px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Lugar a definir
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🏆 Primer puesto
      </p>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Un viaje
      </p>
      <Description />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Content />
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

function Description1() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[12px] tracking-[0.024px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        A definir
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🥈 Segundo puesto
      </p>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Un día de Spa para dos personas
      </p>
      <Description1 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Content1 />
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

function Description2() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[12px] tracking-[0.024px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Restaurante a definir
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636271] text-[10px] tracking-[0.02px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🥉 Tercero puesto
      </p>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Una cena para dos personas
      </p>
      <Description2 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Content2 />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Condiciones
      </p>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#636271] text-[12px] tracking-[0.024px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Los empleados que resulten ganadores deberán pertenecer a la empresa al momento de recibir el premio. En caso de no cumplir con esta condición, el premio se otorgará al siguiente participante en la tabla de posiciones.
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name=".Content">
      <Description3 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List">
      <Content3 />
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

export default function Main() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full" data-name="Main">
      <Frame />
      <Title />
      <CardContainer />
      <CardContainer1 />
      <CardContainer2 />
      <Title1 />
      <CardContainer3 />
    </div>
  );
}