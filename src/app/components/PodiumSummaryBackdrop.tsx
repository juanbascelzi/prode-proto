import React from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-4phu5ndzz7";
import { useTranslation } from '@/i18n/LanguageContext';

interface PodiumSelection {
  first: { name: string; flag: string };
  second: { name: string; flag: string };
  third: { name: string; flag: string };
}

interface PodiumSummaryBackdropProps {
  isOpen: boolean;
  onClose: () => void;
  selection: PodiumSelection | null;
  onModify: () => void;
}

function IconClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p28fcbf80} fill="#303036" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconInfo() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p39febe00} fill="#636271" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function PodiumItem({ rank, label, team }: { rank: string, label: string, team?: { name: string, flag: string } }) {
  return (
    <div className="flex gap-[8px] items-center w-full py-1">
      <div className="bg-[#f1f4fd] rounded-full size-[40px] flex items-center justify-center text-[24px]">
        {rank}
      </div>
      <div className="flex flex-col">
        <p className="text-[#636271] text-[12px] font-normal leading-tight">{label}</p>
        <p className="text-[#303036] text-[16px] font-semibold leading-tight flex items-center gap-1.5">
          <span>{team?.flag || '🏳️'}</span>
          <span>{team?.name || '-'}</span>
        </p>
      </div>
    </div>
  );
}

export function PodiumSummaryBackdrop({ isOpen, onClose, selection, onModify }: PodiumSummaryBackdropProps) {
  const { t } = useTranslation();
  if (!selection) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[2000] backdrop-blur-[2px]"
          />

          {/* Bottom Sheet */}
          <Motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100) onClose();
            }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] bg-white rounded-t-[24px] z-[2001] shadow-[0px_-4px_32px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            {/* Header with Dragger */}
            <div className="flex flex-col items-center px-4 pt-3 pb-2">
              <div className="bg-[#eeeef1] h-[4px] rounded-[4px] w-[88px] mb-4" />
              <div className="relative w-full flex items-center justify-center h-10">
                <h2 className="text-[16px] font-semibold text-[#303036] text-center">{t.yourIdealPodium}</h2>
                <button 
                  onClick={onClose}
                  className="absolute right-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <IconClose />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-4 py-4 flex flex-col gap-4">
              <PodiumItem rank="🏆" label={t.champion} team={selection.first} />
              <div className="h-px bg-[#eeeef1] w-full" />
              <PodiumItem rank="🥈" label={t.secondPlace} team={selection.second} />
              <div className="h-px bg-[#eeeef1] w-full" />
              <PodiumItem rank="🥉" label={t.thirdPlace} team={selection.third} />
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-[#eeeef1] flex flex-col gap-4">
              <div className="flex items-center justify-center gap-1.5 text-[#636271]">
                <IconInfo />
                <p className="text-[14px] font-normal">{t.canModifyUntil}</p>
              </div>
              <button
                onClick={onModify}
                className="w-full bg-[#496be3] hover:bg-[#3d59c1] text-white py-3.5 rounded-[12px] font-semibold text-[16px] transition-all active:scale-[0.98]"
              >
                {t.modifyPodium}
              </button>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
