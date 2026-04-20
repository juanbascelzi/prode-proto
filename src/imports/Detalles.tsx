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
        Sistema de puntajes
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1. ¿Qué se pronostica en cada partido?
      </p>
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#636271] text-[0px] text-[14px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">
          <span className="leading-[1.4]">{`En cada partido el usuario pronostica el `}</span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            marcador final del partido.
          </span>
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4]">{`Fase de grupos: se toma el resultado al finalizar los `}</span>
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              90 minutos.
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4]">{`Fase eliminatoria: se toma el resultado al finalizar el partido `}</span>
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              incluyendo alargue
            </span>
            <span className="leading-[1.4]">, si lo hubiera.</span>
          </li>
        </ul>
        <p>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` 👉  Siempre se considera el resultado final del partido,`}</span>
          <span className="leading-[1.4]">{` no el resultado de los penales.`}</span>
        </p>
      </div>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        2. Puntaje por resultado del partido
      </p>
      <div className="font-['Roboto:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#636271] text-[0px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.4] mb-0 text-[14px] whitespace-pre-wrap">Según el pronóstico del marcador:</p>
        <ul className="list-disc mb-0 text-[14px] whitespace-pre-wrap">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              3 puntos
            </span>
            <span className="leading-[1.4]">{` → marcador `}</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              exacto
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              1 punto
            </span>
            <span className="leading-[1.4]">{` → resultado `}</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              global correcto
            </span>
            <span className="leading-[1.4]">{` (gana local, gana visitante o empate), pero marcador incorrecto`}</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`0 puntos `}</span>
            <span className="leading-[1.4]">
              → resultado incorrecto
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] mb-0 text-[#303036] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Ejemplos
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-0 text-[14px] whitespace-pre-wrap">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Ejemplo A
          </span>
          <span className="leading-[1.4]">{` `}</span>
        </p>
        <p className="leading-[1.4] mb-0 text-[14px] whitespace-pre-wrap">Pronóstico: Argentina 2–1 México</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px] whitespace-pre-wrap">
            <span className="leading-[1.4]">{`Resultado: Argentina 2–1 México → `}</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              3 puntos
            </span>
          </li>
        </ul>
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px] underline whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Ejemplo B
        </p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] whitespace-pre-wrap">
            <span className="leading-[1.4] text-[14px]">Pronóstico: Argentina 2–0 México</span>
          </li>
        </ul>
        <p className="mb-0 text-[14px] whitespace-pre-wrap">
          <span className="leading-[1.4]">{`      Resultado: Argentina 2–1 México → `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            1 punto
          </span>
        </p>
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px] underline whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Ejemplo C
        </p>
        <p className="leading-[1.4] mb-0 text-[14px] whitespace-pre-wrap">{`      Pronóstico: Argentina 1–1 México`}</p>
        <p className="text-[14px] whitespace-pre-wrap">
          <span className="leading-[1.4]">{`      Resultado: Argentina 2–1 México → `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            0 puntos
          </span>
        </p>
      </div>
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

function Title3() {
  return (
    <div className="content-stretch flex flex-col h-[772px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        3. Bonus por definición por penales (solo eliminatorias)
      </p>
      <div className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#636271] text-[0px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Este bonus aplica `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            únicamente si el partido termina empatado
          </span>
          <span className="leading-[1.4]">
            {` y se define por penales.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Además de los puntos del marcador, el usuario puede sumar `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            un solo bonus:
          </span>
        </p>
        <ul className="list-disc mb-0 text-[14px]">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              +2 puntos →
            </span>
            <span className="leading-[1.4]">{` acierta la `}</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              cantidad total de penales convertidos
            </span>
            <span className="leading-[1.4]">{` (entre ambos equipos).`}</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              +1 punto →
            </span>
            <span className="leading-[1.4]">{` no acierta el total, pero acierta `}</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              quién clasifica.
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              +0 puntos →
            </span>
            <span className="leading-[1.4]">
              {` no acierta ninguno.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="mb-0">
          <span className="leading-[1.4] text-[14px]">{`⚠️  `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            El bonus no es acumulable.
          </span>
          <span className="leading-[1.4] text-[14px]">
            {` Si se acierta el total de penales (+2), no se suma el punto por clasificado.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[#303036] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Ejemplos
          </span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[#303036] text-[16px] tracking-[0.032px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Ejemplo D – Total de penales correcto
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Resultado del partido: 1–1</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Penales: 4–3 → total convertidos = 7</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Clasifica: Croacia</span>
          </li>
        </ul>
        <p className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Pronóstico del usuario:
        </p>
        <ul className="list-disc mb-0 text-[14px]">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4]">{`Marcador: 1–1 → `}</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              1 o 3 puntos
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4]">{`Total penales: 7 → `}</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              +2 puntos
            </span>
          </li>
        </ul>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`👉 Total = puntos del marcador `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            + 2
          </span>
          <span className="leading-[1.4]">
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Ejemplo E – Clasificado correcto
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Resultado del partido: 0–0</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Penales: 5–4 → total convertidos = 9</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Clasifica: Francia</span>
          </li>
        </ul>
        <p className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Pronóstico del usuario:
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
            <span className="leading-[1.4]">Marcador: 0–0</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` → 3 puntos`}</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Total penales: 8 → incorrecto</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
            <span className="leading-[1.4]">Clasifica: Francia →</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` +1 punto`}</span>
          </li>
        </ul>
        <p className="text-[14px]">
          <span className="leading-[1.4]">👉 Total =</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            {` 4 puntos`}
            <br aria-hidden="true" />
          </span>
          <span className="leading-[1.4]">
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
      </div>
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

function Title4() {
  return (
    <div className="content-stretch flex flex-col h-[751px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4. Predicciones del torneo: Podio del Mundial 🥇🥈🥉
      </p>
      <div className="font-['Roboto:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[20px] leading-[0] relative shrink-0 text-[#636271] text-[0px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Al inicio de la competencia, cada usuario debe elegir el `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            podio completo
          </span>
          <span className="leading-[1.4]">{` del Mundial:`}</span>
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              1er puesto (Campeón)
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              2do puesto (Subcampeón)
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              3er puesto
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Estas predicciones se puntúan `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            una sola vez,
          </span>
          <span className="leading-[1.4]">
            {` al finalizar el torneo.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Puntaje por Podio
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              🥇 Campeón correcto: +10 puntos
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[14px] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              🥈 Subcampeón correcto: +6 puntos
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              🥉 Tercer puesto correcto: +3 puntos
            </span>
            <span className="leading-[1.4]">
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">📌 Los puest</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            os no se intercambi
          </span>
          <span className="leading-[1.4]">an: cada posición debe coincidir exactamente</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] text-[#303036] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            .<br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold mb-0 text-[14px]">
          <span className="leading-[1.4] text-[#303036]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Ejem
          </span>
          <span className="leading-[1.4]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            pl
          </span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.4] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            os
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0 text-[14px]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Ejemplo F – Podio perfe
          </span>
          <span className="leading-[1.4]">cto</span>
        </p>
        <p className="leading-[1.4] mb-0 text-[14px]">Pronóstico: Brasil (1°), Francia (2°), Argentina (3°)</p>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">Resultado real: igual al pronóstico → +19 punt</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            os
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0 text-[14px]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Ejemplo G – Solo campeón corre
          </span>
          <span className="leading-[1.4]">cto</span>
        </p>
        <p className="leading-[1.4] mb-0 text-[14px]">Pronóstico: Brasil (1°), Argentina (2°), Francia (3°)</p>
        <p className="leading-[1.4] mb-0 text-[14px]">Resultado real: Brasil (1°), Francia (2°), Croacia (3°)</p>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">👉 Puntaje: +10 punt</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            os
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0 text-[14px]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:SemiBold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.4] tracking-[0.028px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Ejemplo H – Campeón y tercer puesto corre
          </span>
          <span className="leading-[1.4]">ctos</span>
        </p>
        <p className="leading-[1.4] text-[14px]">👉 Puntaje: +13 puntos (10 + 3)</p>
      </div>
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

function Title5() {
  return (
    <div className="content-stretch flex flex-col h-[1025px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5. Criterios de desempate del ranking
      </p>
      <div className="font-['Roboto:Regular','Noto_Sans:SemiBold',sans-serif] font-normal h-[20px] leading-[0] relative shrink-0 text-[#636271] text-[0px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Si dos o más jugadores terminan con `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`la misma cantidad de puntos, `}</span>
          <span className="leading-[1.4]">el ranking se define aplicando los siguientes criterios</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` en este orden,`}</span>
          <span className="leading-[1.4]">
            {` hasta romper el empate:`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            1 → Mayor cantidad de marcadores exactos
          </span>
        </p>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Queda arriba quien tenga `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            más partidos con marcador exacto
          </span>
          <span className="leading-[1.4]">
            {` (los que otorgan 3 puntos).`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            2 →
          </span>
          <span className="leading-[1.4]">{` `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Mayor cantidad de aciertos de penales exactos
            <br aria-hidden="true" />
          </span>
          <span className="leading-[1.4]">{`Queda arriba quien haya acertado `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            más veces la cantidad total de penales convertidos
          </span>
          <span className="leading-[1.4]">
            {` en definiciones por penales (bonus de +2).`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            3 → Mayor cantidad de aciertos de clasificado por penales
          </span>
        </p>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Queda arriba quien haya acertado `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            más veces quién clasifica
          </span>
          <span className="leading-[1.4]">
            {` en partidos definidos por penales cuando no acertó el total (bonus de +1).`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          4 → Mayor cantidad de aciertos de resultado global
        </p>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Queda arriba quien tenga `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            más aciertos de resultado global
          </span>
          <span className="leading-[1.4]">
            {` (ganó local / ganó visitante / empate), aunque no haya acertado el marcador exacto (los que dan 1 punto).`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          5 → Menor cantidad de partidos sin pronóstico
        </p>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">Queda arriba quien haya dejado</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` menos partidos sin pronosticar,`}</span>
          <span className="leading-[1.4]">
            {` premiando la participación.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          6 → Anticipación del primer pronóstico en la competencia
        </p>
        <p className="mb-0 text-[14px]">
          <span className="leading-[1.4]">{`Si el empate persiste, se compara `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`quién fue el primero en cargar cualquier pronóstico dentro de la competencia, `}</span>
          <span className="leading-[1.4]">sin importar si fue correcto o no.</span>
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
            <span className="leading-[1.4]">Gana quien tenga el</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` primer pronóstico registrado `}</span>
            <span className="leading-[1.4]">(fecha y hora más tempranas).</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Quien no haya cargado ningún pronóstico queda por debajo de quien sí lo hizo.</span>
          </li>
        </ul>
        <p className="text-[14px]">
          <span className="leading-[1.4]">{`👉 Este criterio `}</span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            premia la participación temprana en la competencia.
          </span>
          <span className="leading-[1.4]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Roboto:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
      </div>
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

function Title6() {
  return (
    <div className="content-stretch flex flex-col h-[307px] items-start relative shrink-0 w-[280px] whitespace-pre-wrap" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[16px] tracking-[0.032px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        6. Ejemplo de desempate
      </p>
      <div className="font-['Roboto:Regular','Noto_Sans:Regular','Noto_Sans:SemiBold',sans-serif] font-normal leading-[0] relative shrink-0 text-[#636271] text-[0px] tracking-[0.028px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.4] mb-0 text-[14px]">&nbsp;</p>
        <p className="font-['Roboto:SemiBold','Noto_Sans:Regular','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Juan y Ana terminan con 42 puntos:
        </p>
        <ol start="1">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Marcadores exactos: Juan 8 / Ana 8 → empate</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Penales exactos: Juan 1 / Ana 1 → empate</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Clasificados por penales: Juan 2 / Ana 2 → empate</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Resultados globales: Juan 15 / Ana 15 → empate</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.4] text-[14px]">Partidos sin pronóstico: Juan 0 / Ana 0 → empate</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
            <span className="leading-[1.4]">{`Primer pronóstico cargado: `}</span>
            <span className="font-['Roboto:SemiBold','Noto_Sans:Regular','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] tracking-[0.028px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Juan fue el primero → Juan queda arriba
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[3720px] items-center p-[24px] relative rounded-[16px] shrink-0 w-[328px]">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Title1 />
      <Divider />
      <Title2 />
      <Divider1 />
      <Title3 />
      <Divider2 />
      <Title4 />
      <Divider3 />
      <Title5 />
      <Divider4 />
      <Title6 />
    </div>
  );
}

export default function Detalles() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full" data-name="Detalles">
      <Frame1 />
      <Title />
      <Frame />
    </div>
  );
}