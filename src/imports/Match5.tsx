function Pills() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0" data-name="Pills">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#636271] text-[12px] text-center tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mi pronóstico: 1-1
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Pills1() {
  return (
    <div className="bg-[#fdfaec] relative rounded-[16px] shrink-0 w-[81px]" data-name="Pills">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit] w-full">
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#7e4317] text-[12px] text-center tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Puntos: +0
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fbec9e] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MatchInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Match Info">
      <Pills />
      <Pills1 />
    </div>
  );
}

function MatchInfo() {
  return (
    <div className="content-stretch flex gap-[15px] h-[24px] items-center justify-end relative shrink-0 w-full" data-name="Match Info">
      <MatchInfo1 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">🇰🇷</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        C. del Sur
      </p>
    </div>
  );
}

function TeamInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center relative shrink-0 w-[76.5px]" data-name="Team Info">
      <Avatar />
      <Title />
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] p-[13.714px] relative size-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#303036] text-[27.429px] tracking-[0.0549px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            1
          </p>
        </div>
      </div>
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

function Component1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center min-h-px min-w-px relative" data-name="1">
      <TeamInfo />
      <InputOtp />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[22px]" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-[72px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        -
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-[48px] min-w-px relative rounded-[6.857px]" data-name="Input 1">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] p-[13.714px] relative size-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#303036] text-[27.429px] tracking-[0.0549px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            1
          </p>
        </div>
      </div>
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

function Avatar3() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 size-[40px] text-[#303036] text-[32px] text-center tracking-[0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">🏳️</p>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar3 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Títle">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#303036] text-[12px] text-center tracking-[0.024px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TBD
      </p>
    </div>
  );
}

function TeamInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Team Info">
      <Avatar2 />
      <Title2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[62px] items-center justify-between min-h-px min-w-px relative" data-name="2">
      <InputOtp1 />
      <TeamInfo1 />
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

function Match() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Match / 1">
      <div aria-hidden="true" className="absolute border border-[#eeeef1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <MatchInfo />
      <Component />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#303036] text-[0px] text-[10px] text-center tracking-[0.02px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Grupo A ·
        </span>
        <span className="leading-[1.4]">{`  Estadio Akron, Guadalajara, México`}</span>
      </p>
    </div>
  );
}

export default function Match1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Match 5">
      <Match />
    </div>
  );
}