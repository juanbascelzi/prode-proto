import React from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import svgPaths from "@/imports/svg-qyc8pfr528";
import { useTranslation } from '@/i18n/LanguageContext';

const STAGE_IDS = [
  "Todos",
  "Grupos · Fecha 1",
  "Grupos · Fecha 2",
  "Grupos · Fecha 3",
  "16 avos",
  "8 avos",
  "Cuartos",
  "Semifinal",
  "Final"
];

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2ac6bb80} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute content-stretch flex items-center justify-end p-[4px] right-0 rounded-[8px] top-0 hover:bg-gray-100 transition-colors" 
      data-name="Button/IconOnly"
    >
      <Icon />
    </button>
  );
}

function Header({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center pb-[16px] pt-[8px] px-[24px] relative w-full">
          <div className="bg-[#dfe0e6] h-[4px] rounded-[4px] shrink-0 w-[88px]" data-name="Dragger" />
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
            <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] max-w-[256px] min-h-px min-w-px relative text-[#303036] text-[16px] text-center tracking-[0.032px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t.matchesTitle}
            </p>
            <CloseButton onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StageItem({ stage, isSelected, onSelect }: { stage: string, isSelected: boolean, onSelect: (stage: string) => void }) {
  return (
    <button 
      onClick={() => onSelect(stage)}
      className="w-full bg-white relative shrink-0 transition-colors hover:bg-gray-50 active:bg-gray-100" 
      data-name="item"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
          <p className={`font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-center tracking-[0.028px] w-full text-[14px] ${isSelected ? 'text-[#29317f]' : 'text-[#636271]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {stage}
          </p>
        </div>
      </div>
    </button>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#c5d4f8] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

interface StageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStage: string;
  onStageSelect: (stage: string) => void;
}

export function StageDialog({ isOpen, onClose, selectedStage, onStageSelect }: StageDialogProps) {
  const { t } = useTranslation();
  const stageLabels: Record<string, string> = {
    "Todos": t.all,
    "Grupos · Fecha 1": t.groupsDate1,
    "Grupos · Fecha 2": t.groupsDate2,
    "Grupos · Fecha 3": t.groupsDate3,
    "16 avos": t.roundOf32,
    "8 avos": t.roundOf16,
    "Cuartos": t.quarterFinals,
    "Semifinal": t.semiFinals,
    "Final": t.final,
  };
  const getStageLabel = (id: string) => stageLabels[id] || id;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[1000] backdrop-blur-[2px]"
          />
          <Motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] bg-white rounded-tl-[16px] rounded-tr-[16px] z-[1001] shadow-[0px_-2px_24px_0px_rgba(223,224,230,0.8)] border border-[#eeeef1] overflow-hidden"
          >
            <Header onClose={onClose} />
            <div className="max-h-[70vh] overflow-y-auto px-[16px] pb-[32px]">
              {STAGE_IDS.map((stage, index) => (
                <div key={stage} className="flex flex-col w-full">
                  <StageItem 
                    stage={getStageLabel(stage)} 
                    isSelected={selectedStage === stage} 
                    onSelect={() => {
                      onStageSelect(stage);
                      onClose();
                    }} 
                  />
                  {index < STAGE_IDS.length - 1 && <Divider />}
                </div>
              ))}
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
