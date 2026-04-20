import { useState } from 'react';
import svgPaths from "./svg-w0585y7c12";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import { useTranslation } from '@/i18n/LanguageContext';
import { LANGUAGE_OPTIONS } from '@/i18n/translations';
const trophyIcon = "/trophy.png";

function Bg() {
  return <div className="absolute contents inset-0" data-name="BG" />;
}

function Battery() {
  return (
    <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Battery">
      <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]" data-name="Rectangle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 11.3333">
          <path d={svgPaths.p7e6b880} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
      <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]" data-name="Combined Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]" data-name="Rectangle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 7.33333">
          <path d={svgPaths.p3544af00} fill="var(--fill-0, black)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Right Side">
      <Battery />
      <div className="absolute h-[10.966px] right-[44.03px] top-[17.33px] w-[15.272px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
          <path d={svgPaths.p3d78f640} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[10.667px] right-[64.33px] top-[17.67px] w-[17px]" data-name="Mobile Signal">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
          <path d={svgPaths.p2075b000} fill="var(--fill-0, black)" id="Mobile Signal" />
        </svg>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[33.45px] top-[17.17px]" data-name="Left Side">
      <div className="absolute h-[11.089px] left-[33.45px] top-[17.17px] w-[28.426px]" data-name="9:41">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4262 11.0889">
          <g id="9:41">
            <path d={svgPaths.p1218b780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p25dc35c0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p38b62380} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3a930400} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IPhone() {
  return (
    <div className="bg-[#f2f2f7] h-[44px] overflow-clip relative shrink-0 w-full" data-name="iPhone">
      <Bg />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Title() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#3a3a45] text-[32px] tracking-[0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.apps}
      </p>
    </div>
  );
}

function LanguageSelector() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const current = LANGUAGE_OPTIONS.find(o => o.code === language)!;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-[-1px_2px_6px_0px_#e9e9f4] border border-[#eeeef1] text-[13px] font-semibold text-[#303036]"
      >
        <span>{current.flag}</span>
        <span>{current.code.toUpperCase()}</span>
      </button>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 bg-white rounded-[12px] shadow-lg border border-[#eeeef1] overflow-hidden z-50 min-w-[180px]">
            {LANGUAGE_OPTIONS.map(opt => (
              <button
                key={opt.code}
                onClick={() => { setLanguage(opt.code); setIsOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-[14px] font-medium transition-colors ${language === opt.code ? 'bg-[#f1f4fd] text-[#29317f]' : 'text-[#303036] hover:bg-gray-50'}`}
              >
                <span className="text-[18px]">{opt.flag}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Iconly() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p3208640} fill="var(--fill-0, #886BFF)" fillRule="evenodd" id="Vector" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p4249200} fill="var(--fill-0, #886BFF)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p53fc4f0} fill="var(--fill-0, #886BFF)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly />
    </div>
  );
}

function Title1() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{t.appNames.forms}</p>
    </div>
  );
}

function IconlyQuickAction() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction />
      <Title1 />
    </div>
  );
}

function Component2User() {
  return (
    <div className="absolute inset-[12.5%_8.34%]" data-name="2-User">
      <div className="absolute inset-[0_-0.01%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3329 29.9998">
          <g id="2-User">
            <path d={svgPaths.p278b2580} fill="var(--fill-0, #496BE3)" id="Fill-1" />
            <path d={svgPaths.p9562e80} fill="var(--fill-0, #496BE3)" id="Fill-3" opacity="0.4" />
            <path d={svgPaths.p8d2b0} fill="var(--fill-0, #496BE3)" id="Fill-5" opacity="0.4" />
            <path d={svgPaths.p34089300} fill="var(--fill-0, #496BE3)" id="Fill-7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyBulk2User() {
  return (
    <div className="absolute contents inset-[12.5%_8.34%]" data-name="Iconly/Bulk/2-User">
      <Component2User />
    </div>
  );
}

function Iconly1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Iconly">
      <IconlyBulk2User />
    </div>
  );
}

function QuickAction1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly1 />
    </div>
  );
}

function Title2() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.people}
      </p>
    </div>
  );
}

function IconlyQuickAction1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction1 />
      <Title2 />
    </div>
  );
}

function Iconly2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p2fb98100} fill="var(--fill-0, #1CA332)" fillRule="evenodd" id="Vector" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p23aba500} fill="var(--fill-0, #1CA332)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3deb9580} fill="var(--fill-0, #1CA332)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p8083140} fill="var(--fill-0, #1CA332)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly2 />
    </div>
  );
}

function Title3() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.timeControl}
      </p>
    </div>
  );
}

function IconlyQuickAction2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction2 />
      <Title3 />
    </div>
  );
}

function Iconly3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path d={svgPaths.pc677700} fill="var(--fill-0, #E9582B)" id="Vector" />
          <g id="Group" opacity="0.4">
            <path d={svgPaths.p2ad4d100} fill="var(--fill-0, #E9582B)" id="Vector_2" />
            <path d={svgPaths.p100a0c00} fill="var(--fill-0, #E9582B)" id="Vector_3" />
            <path d={svgPaths.p2b895000} fill="var(--fill-0, #E9582B)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuickAction3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly3 />
    </div>
  );
}

function Title4() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.orgChart}
      </p>
    </div>
  );
}

function IconlyQuickAction3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction3 />
      <Title4 />
    </div>
  );
}

function Iconly4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p13631300} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p3f39f480} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p21b00700} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly4 />
    </div>
  );
}

function Title5() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.files}
      </p>
    </div>
  );
}

function IconlyQuickAction4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction4 />
      <Title5 />
    </div>
  );
}

function Iconly5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path d={svgPaths.p25cc2f00} fill="var(--fill-0, #3851D8)" id="Vector" />
          <path d={svgPaths.p3b8dd5f0} fill="var(--fill-0, #3851D8)" id="Vector_2" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p31891e00} fill="var(--fill-0, #3851D8)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction5({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px] cursor-pointer active:scale-95 transition-transform" 
      data-name="Quick action"
    >
      <ImageWithFallback 
        src={trophyIcon} 
        className="w-[52px] h-[52px] object-contain" 
        alt="Pronósticos" 
      />
    </div>
  );
}

function Title6() {
  const { t } = useTranslation();
  const parts = t.appNames.predictions.split('\n');
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {parts[0]}
        {parts[1] && <><br aria-hidden="true" />{parts[1]}</>}
      </p>
    </div>
  );
}

function IconlyQuickAction5({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction5 onClick={onClick} />
      <Title6 />
    </div>
  );
}

function Iconly6() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p3d882800} fill="var(--fill-0, #30A2BC)" fillRule="evenodd" id="Vector" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p33c9ac00} fill="var(--fill-0, #30A2BC)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly6 />
    </div>
  );
}

function Title7() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.onboarding}
      </p>
    </div>
  );
}

function IconlyQuickAction6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction6 />
      <Title7 />
    </div>
  );
}

function Iconly7() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p3924aa00} fill="var(--fill-0, #886BFF)" fillRule="evenodd" id="Vector" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p27de8ee0} fill="var(--fill-0, #886BFF)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly7 />
    </div>
  );
}

function Title8() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.surveys}
      </p>
    </div>
  );
}

function IconlyQuickAction7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction7 />
      <Title8 />
    </div>
  );
}

function Iconly8() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p8b41f00} fill="var(--fill-0, #E74444)" fillRule="evenodd" id="Vector" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p31417580} fill="var(--fill-0, #E74444)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1dabcd80} fill="var(--fill-0, #E74444)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly8 />
    </div>
  );
}

function Title9() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.marketplace}
      </p>
    </div>
  );
}

function IconlyQuickAction8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction8 />
      <Title9 />
    </div>
  );
}

function Iconly9() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path d={svgPaths.p1e6e3b00} fill="var(--fill-0, #496BE3)" id="Vector" opacity="0.4" />
          <path d={svgPaths.p6c27100} fill="var(--fill-0, #496BE3)" id="Vector_2" />
          <path d={svgPaths.p1951b900} fill="var(--fill-0, #496BE3)" id="Vector_3" />
          <path d={svgPaths.p2f218c00} fill="var(--fill-0, #496BE3)" id="Vector_4" />
          <path d={svgPaths.p2ef1df00} fill="var(--fill-0, #496BE3)" id="Vector_5" />
          <path d={svgPaths.p13ad7e00} fill="var(--fill-0, #496BE3)" id="Vector_6" />
          <path d={svgPaths.p3c3a2980} fill="var(--fill-0, #496BE3)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly9 />
    </div>
  );
}

function Title10() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.vacations}
      </p>
    </div>
  );
}

function IconlyQuickAction9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction9 />
      <Title10 />
    </div>
  );
}

function Iconly10() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p2d549800} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p21fa5bc0} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1be6f00} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p376d4e40} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3e5b1c00} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p6ffe00} fill="var(--fill-0, #F0B623)" fillRule="evenodd" id="Vector_6" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly10 />
    </div>
  );
}

function Title11() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.performance}
      </p>
    </div>
  );
}

function IconlyQuickAction10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction10 />
      <Title11 />
    </div>
  );
}

function Iconly11() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path d={svgPaths.p7e0b070} fill="var(--fill-0, #30A2BC)" id="Vector" />
          <path d={svgPaths.pdd84880} fill="var(--fill-0, #30A2BC)" id="Vector_2" />
          <g id="Group" opacity="0.4">
            <path d={svgPaths.p2107e900} fill="var(--fill-0, #30A2BC)" id="Vector_3" />
            <path d={svgPaths.p1c6a2f80} fill="var(--fill-0, #30A2BC)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuickAction11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly11 />
    </div>
  );
}

function Title12() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.agentWorkspace}
      </p>
    </div>
  );
}

function IconlyQuickAction11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction11 />
      <Title12 />
    </div>
  );
}

function Iconly12() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p395cbd70} fill="var(--fill-0, #886BFF)" fillRule="evenodd" id="Vector" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p1c53d00} fill="var(--fill-0, #886BFF)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly12 />
    </div>
  );
}

function Title13() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.servicePortal}
      </p>
    </div>
  );
}

function IconlyQuickAction12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction12 />
      <Title13 />
    </div>
  );
}

function Iconly13() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p291c7510} fill="var(--fill-0, #35A48E)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p2f83fe80} fill="var(--fill-0, #35A48E)" id="Vector_2" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p12e0a000} fill="var(--fill-0, #35A48E)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction13() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly13 />
    </div>
  );
}

function Title14() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.learning}
      </p>
    </div>
  );
}

function IconlyQuickAction13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction13 />
      <Title14 />
    </div>
  );
}

function Iconly14() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p1d226d90} fill="var(--fill-0, #E74444)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.paea4b00} fill="var(--fill-0, #E74444)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1423b100} fill="var(--fill-0, #E74444)" fillRule="evenodd" id="Vector_3" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly14 />
    </div>
  );
}

function Title15() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.goals}
      </p>
    </div>
  );
}

function IconlyQuickAction14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction14 />
      <Title15 />
    </div>
  );
}

function Iconly15() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path clipRule="evenodd" d={svgPaths.p3411180} fill="var(--fill-0, #A33896)" fillRule="evenodd" id="Vector" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.pb361700} fill="var(--fill-0, #A33896)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction15() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly15 />
    </div>
  );
}

function Title16() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.peopleExp}
      </p>
    </div>
  );
}

function IconlyQuickAction15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction15 />
      <Title16 />
    </div>
  );
}

function Iconly16() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <g id="Group" opacity="0.4">
            <path clipRule="evenodd" d={svgPaths.p2d669480} fill="var(--fill-0, #30A2BC)" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p6af5880} fill="var(--fill-0, #30A2BC)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p2c1f1300} fill="var(--fill-0, #30A2BC)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p22f94300} fill="var(--fill-0, #30A2BC)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly16 />
    </div>
  );
}

function Title17() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.events}
      </p>
    </div>
  );
}

function IconlyQuickAction16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction16 />
      <Title17 />
    </div>
  );
}

function Iconly17() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Iconly">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Iconly">
          <path d={svgPaths.p3cbb0600} fill="var(--fill-0, #496BE3)" id="Vector" opacity="0.4" />
          <path d={svgPaths.p354dfb80} fill="var(--fill-0, #496BE3)" id="Vector_2" />
          <path d={svgPaths.p38346580} fill="var(--fill-0, #496BE3)" id="Vector_3" />
          <path d={svgPaths.p2333fc00} fill="var(--fill-0, #496BE3)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction17() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[80px] min-w-[80px] overflow-clip p-[8px] relative rounded-[16px] shadow-[-1px_4px_8px_0px_#e9e9f4] shrink-0 size-[80px]" data-name="Quick action">
      <Iconly17 />
    </div>
  );
}

function Title18() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Títle">
      <p className="css-4hzbpn font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[12px] text-center tracking-[0.024px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.knowledgeLibrary}
      </p>
    </div>
  );
}

function IconlyQuickAction17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="Iconly/Quick action">
      <QuickAction17 />
      <Title18 />
    </div>
  );
}

function Grid({ onProdeClick }: { onProdeClick?: () => void }) {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid">
      <IconlyQuickAction />
      <IconlyQuickAction1 />
      <IconlyQuickAction2 />
      <IconlyQuickAction3 />
      <IconlyQuickAction4 />
      <IconlyQuickAction6 />
      <IconlyQuickAction7 />
      <IconlyQuickAction5 onClick={onProdeClick} />
      <IconlyQuickAction8 />
      <IconlyQuickAction9 />
      <IconlyQuickAction10 />
      <IconlyQuickAction11 />
      <IconlyQuickAction12 />
      <IconlyQuickAction13 />
      <IconlyQuickAction14 />
      <IconlyQuickAction15 />
      <IconlyQuickAction16 />
      <IconlyQuickAction17 />
    </div>
  );
}

function Body({ onProdeClick }: { onProdeClick?: () => void }) {
  return (
    <div className="bg-[#f2f2f7] relative shrink-0 w-full" data-name="Body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="flex items-center justify-between w-full">
            <Title />
            <LanguageSelector />
          </div>
          <Grid onProdeClick={onProdeClick} />
        </div>
      </div>
    </div>
  );
}

function SmartHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="smart-home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="smart-home">
          <path clipRule="evenodd" d={svgPaths.p1a2d8e00} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTabBase() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[43px] min-w-[48px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name=".button.tab.base">
      <SmartHome />
      <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#496be3] text-[10px] text-center tracking-[0.02px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.home}
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p139dbc00} fill="var(--fill-0, #676779)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#496be3] left-[20px] rounded-[100px] size-[8px] top-[50px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function ButtonTabBase1() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[43px] min-w-[48px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name=".button.tab.base">
      <Icon />
      <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[10px] text-center tracking-[0.02px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.chats}
      </p>
      <Badge />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p194dc300} fill="var(--fill-0, #496BE3)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTabBase2() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-center justify-end min-h-[43px] min-w-[48px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name=".button.tab.base">
      <Icon1 />
      <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#496be3] text-[10px] text-center tracking-[0.02px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.apps}
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p588400} fill="var(--fill-0, #676779)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTabBase3() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[43px] min-w-[48px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name=".button.tab.base">
      <Icon2 />
      <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[10px] text-center tracking-[0.02px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.appNames.recommendations}
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p16a46f80} fill="var(--fill-0, #676779)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTabBase4() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[43px] min-w-[48px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name=".button.tab.base">
      <Icon3 />
      <p className="css-ew64yg font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#676779] text-[10px] text-center tracking-[0.02px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.profile}
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3dc9000} fill="var(--fill-0, #676779)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconOnly() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-1/2 max-w-[224px] opacity-0 overflow-clip p-[8px] rounded-[24px] shadow-[-1px_4px_8px_0px_#e9e9f4] size-[54px] top-[-7px]" data-name="Button/IconOnly">
      <Icon4 />
    </div>
  );
}

function Tabbar() {
  return (
    <div className="bg-white content-stretch flex items-end justify-between px-4 py-[8px] relative shadow-[0px_-2px_24px_0px_rgba(170,170,186,0.45)] shrink-0 w-full" data-name="Tabbar">
      <ButtonTabBase />
      <ButtonTabBase1 />
      <div className="flex flex-row items-end self-stretch">
        <ButtonTabBase2 />
      </div>
      <ButtonTabBase3 />
      <ButtonTabBase4 />
      <ButtonIconOnly />
    </div>
  );
}

export default function MulticolorGrid({ onProdeClick }: { onProdeClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full bg-[#f2f2f7] min-h-screen" data-name="MulticolorGrid">
      <IPhone />
      <div className="flex-1 w-full overflow-y-auto">
        <Body onProdeClick={onProdeClick} />
      </div>
      <div className="w-full bg-white">
        <Tabbar />
      </div>
    </div>
  );
}