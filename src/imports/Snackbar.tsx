import svgPaths from "./svg-rf66w253vq";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p22c99780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#28c040] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Avatar">
      <Icon />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 size-[24px]" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.028px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.4]">Final guardada</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <Text />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x">
          <path clipRule="evenodd" d={svgPaths.p2ac6bb80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function CloseAction() {
  return (
    <div className="content-stretch flex items-start justify-end max-w-[224px] overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name=".Close Action">
      <X />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="bg-[#303036] min-w-[150px] relative shrink-0 w-full" data-name="Tooltip">
      <div className="flex flex-row justify-end min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start justify-end min-w-[inherit] p-[16px] relative w-full">
          <Avatar />
          <Frame />
          <CloseAction />
        </div>
      </div>
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="absolute inset-[0_99.39%_0_0] overflow-clip" data-name="track-and-stop">
      <div className="absolute bg-[#303036] h-[6px] left-0 right-[-0.1px] top-0" data-name="Rectangle" />
    </div>
  );
}

function ToastBar() {
  return (
    <div className="bg-[#cff6d5] h-[6px] overflow-clip relative shrink-0 w-full" data-name=".ToastBar">
      <TrackAndStop />
    </div>
  );
}

export default function Snackbar() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shadow-[-1px_8px_16px_0px_#b5b6c4] size-full" data-name="Snackbar">
      <Tooltip />
      <ToastBar />
    </div>
  );
}