function Overlay() {
  return <div className="absolute bg-[rgba(50,50,50,0.8)] h-[640px] left-0 top-0 w-[360px]" data-name="Overlay" />;
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] max-w-[256px] min-h-px min-w-px relative text-[#303036] text-[0px] text-center tracking-[0.032px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn">
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] text-[18px] tracking-[0.036px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            🇲🇽
          </span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] text-[18px] tracking-[0.036px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`  `}</span>
          <span className="leading-[1.4] text-[16px]">{`México 2 - 1 Sudáfrica  `}</span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] text-[18px] tracking-[0.036px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            🇿🇦
          </span>
        </p>
      </div>
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

function Pills() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0" data-name="Pills">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[12px] text-center tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mi pronóstico: 2-1
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Pills1() {
  return (
    <div className="bg-[#f5fdf6] relative rounded-[16px] shrink-0" data-name="Pills">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#1f622c] text-[12px] text-center tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Puntos: +7
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cff6d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Pills />
      <Pills1 />
    </div>
  );
}

function Bullet() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #636271)" id="Icon" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Helperbase() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Helperbase">
      <Bullet />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#636271] text-[0px] text-[16px] tracking-[0.032px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>{`+5 puntos: `}</span>
        <span className="leading-[1.4]">resultado exacto.</span>
      </p>
    </div>
  );
}

function Bullet1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #636271)" id="Icon" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Helperbase1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Helperbase">
      <Bullet1 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#636271] text-[0px] text-[16px] tracking-[0.032px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
          +2 puntos:
        </span>
        <span className="leading-[1.4]">{` acertar ganador del partido.`}</span>
      </p>
    </div>
  );
}

function Replace() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Replace">
      <Frame />
      <Helperbase />
      <Helperbase1 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <Replace />
        </div>
      </div>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Button/Large">
      <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#29317f] text-[16px] text-center tracking-[0.032px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cerrar
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
    <div className="bg-white relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[360px]" data-name="Dialog">
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
    <div className="content-stretch flex flex-col items-center justify-end relative size-full" data-name="Grupo / Competencia / Backdrop / Score">
      <Overlay />
      <Dialog />
    </div>
  );
}