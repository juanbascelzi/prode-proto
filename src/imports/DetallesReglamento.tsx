function Chip() {
  return (
    <div className="bg-[#c5d4f8] relative rounded-[8px] shrink-0" data-name="Chip">
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

function Frame1() {
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
        Sistema de puntaje
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🏆 Reglas de puntaje → Prode Humand
      </p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1. Qué resultado se toma
      </p>
      <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#636271] text-[0px] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[1.4]">Se toma el resultado del</span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` partido completo: 90’ + alargue`}</span>
          <span className="leading-[1.4]">{` si hay.`}</span>
        </li>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Penales no cuentan
          </span>
          <span className="leading-[1.4]">{` para el marcador.`}</span>
        </li>
        <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[1.4]">{`En `}</span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            eliminación directa,
          </span>
          <span className="leading-[1.4]">{` si hay penales, sí cuenta `}</span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            quién clasifica.
          </span>
        </li>
      </ul>
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

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#636271] text-[0px] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <span className="leading-[1.4]">{`En cada partido ganás `}</span>
        <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          solo el mayor puntaje que corresponda
        </span>
        <span className="leading-[1.4]">{` (no se suman entre sí).`}</span>
      </p>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        A) Si acertás el marcador exacto
      </p>
      <ul className="block font-['Roboto:Regular','Noto_Sans_Symbols:SemiBold',sans-serif] font-normal h-[20px] leading-[0] relative shrink-0 text-[#636271] text-[0px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px] whitespace-pre-wrap">
          <span className="font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            12 puntos →
          </span>
          <span className="leading-[1.4]">{` acertás el resultado y los goles de ambos equipos.`}</span>
        </li>
      </ul>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Títle">
      <p className="leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        B) Si no acertás el marcador exacto, pero fuiste muy cercano
      </p>
      <ul className="block leading-[0] list-disc relative shrink-0 text-[#636271] text-[0px] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[1.4]">{`8 puntos `}</span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            si:
          </span>
        </li>
        <ul>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`El partido terminó en `}</span>
            <span className="leading-[1.4]">empate</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` y vos también pronosticaste `}</span>
            <span className="leading-[1.4]">{`empate `}</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`(aunque no sean los mismos goles), `}</span>
            <span className="leading-[1.4]">o</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Acertaste el `}</span>
            <span className="leading-[1.4]">ganador</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` y también la `}</span>
            <span className="leading-[1.4]">diferencia de goles</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` (ej: real 3–1 y vos pusiste 2–0, ambos diferencia +2).`}</span>
          </li>
        </ul>
      </ul>
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col font-semibold items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        C) Si acertás solo el resultado (ganador)
      </p>
      <ul className="block font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols:Regular',sans-serif] leading-[0] relative shrink-0 text-[#636271] text-[0px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <li className="list-disc mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px] whitespace-pre-wrap">
          <span className="leading-[1.4]">{`2 puntos → `}</span>
          <span className="font-['Roboto:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`acertás exactamente los goles de `}</span>
          <span className="leading-[1.4]">uno</span>
          <span className="font-['Roboto:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` de los dos equipos (A o B), aunque el resultado te haya dado mal.`}</span>
        </li>
        <ul>
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*2)] whitespace-pre-wrap">
            <span className="font-['Roboto:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols:Regular',sans-serif] font-normal leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Ej: real 3–1, pronóstico 3–0 → suma 2.
            </span>
          </li>
        </ul>
      </ul>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold items-start relative shrink-0 w-full" data-name="Títle">
      <p className="leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        E) Si no acertás nada
      </p>
      <ul className="block leading-[0] relative shrink-0 text-[#636271] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <li className="list-disc ms-[21px] whitespace-pre-wrap">
          <span className="leading-[1.4]">0 puntos</span>
        </li>
      </ul>
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

function Title8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🥅 Bonus en eliminación directa: “Quién clasifica”
      </p>
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

function Divider3() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[1888px] items-center p-[24px] relative rounded-[16px] shrink-0 w-[328px]">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Title1 />
      <Title2 />
      <Divider />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ⚽ Puntaje por partido
      </p>
      <Title3 />
      <Title4 />
      <Title5 />
      <Title6 />
      <Title7 />
      <Divider1 />
      <Title8 />
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#636271] text-[0px] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Si el partido se define por penales:
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              +3 puntos
            </span>
            <span className="leading-[1.4]">{` si acertás `}</span>
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              quién clasifica
            </span>
            <span className="leading-[1.4]">{` a la siguiente ronda.`}</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4]">{`Este bonus `}</span>
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              se suma
            </span>
            <span className="leading-[1.4]">{` a los puntos del partido.`}</span>
          </li>
        </ul>
      </div>
      <Divider2 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🥇 Pronósticos especiales – Podio del torneo
      </p>
      <div className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#636271] text-[0px] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">
          <span className="leading-[1.4]">{`Se eligen antes de empezar el torneo `}</span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            y suman a la tabla general:
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4]">{`🥇 Campeón: `}</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              20 pts
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4]">🥈 Subcampeón:</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` 10 pts`}</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4]">🥉 Tercer puesto</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              : 6 p
            </span>
            <span className="leading-[1.4]">ts</span>
          </li>
        </ul>
      </div>
      <Divider3 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[18px] tracking-[0.036px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        🔥 Reglas de desempate del ranking (en orden)
      </p>
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#636271] text-[0px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0 text-[14px] whitespace-pre-wrap">
          <span className="leading-[1.4]">{`Si dos o más usuarios quedan con `}</span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            el mismo puntaje total,
          </span>
          <span className="leading-[1.4]">
            {` se desempata así:`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <ol start="1">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] whitespace-pre-wrap">
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Más partidos con 12 puntos (marcador exacto)
            </span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*2)] whitespace-pre-wrap">
              <span className="leading-[1.4] text-[14px]">Premia máxima precisión.</span>
            </li>
          </ul>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] whitespace-pre-wrap">
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Más partidos con 8 puntos (cercanos: empate o diferencia correcta)
            </span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*2)] whitespace-pre-wrap">
              <span className="leading-[1.4] text-[14px]">Premia el “casi exacto” de forma consistente con el sistema.</span>
            </li>
          </ul>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] whitespace-pre-wrap">
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Más aciertos de “Quién clasifica” (+3) en eliminación directa
            </span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*2)] whitespace-pre-wrap">
              <span className="leading-[1.4] text-[14px]">Premia lectura táctica de playoffs.</span>
            </li>
          </ul>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] whitespace-pre-wrap">
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Más aciertos parciales de 2 puntos (goles de un equipo)
            </span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*2)] whitespace-pre-wrap">
              <span className="leading-[1.4] text-[14px]">Premia consistencia precisa aunque no siempre acierte resultado</span>
            </li>
          </ul>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px] whitespace-pre-wrap">
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Timestamp del primer pronóstico hecho (más temprano gana) ✅ `}</span>
            <span className="leading-[1.4]">(desempate garantizado 100%)</span>
          </li>
          <ul className="list-disc whitespace-pre-wrap">
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*2)] text-[14px]">
              <span className="leading-[1.4]">Si quieres que premie 'compromiso', este criterio es ideal</span>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}

export default function DetallesReglamento() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full" data-name="Detalles reglamento">
      <Frame1 />
      <Title />
      <Frame />
    </div>
  );
}