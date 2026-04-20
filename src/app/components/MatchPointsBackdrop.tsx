import React from 'react';
import { motion as Motion } from 'motion/react';
import { useTranslation } from '@/i18n/LanguageContext';

interface Match {
  id: number;
  time: string;
  team1: string;
  flag1: string;
  team2: string;
  flag2: string;
  group: string;
  score1: string;
  score2: string;
  finalScore1: string;
  finalScore2: string;
  points: string;
  status: string;
}

interface Props {
  match: Match | null;
  onClose: () => void;
}

function Overlay({ onClick }: { onClick: () => void }) {
  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="fixed inset-0 bg-[rgba(50,50,50,0.8)] z-[200]" 
      data-name="Overlay" 
    />
  );
}

function Bullet() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="bullet">
      <div className="w-1.5 h-1.5 rounded-full bg-[#636271]" />
    </div>
  );
}

export function MatchPointsBackdrop({ match, onClose }: Props) {
  const { t } = useTranslation();
  if (!match) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center z-[201] pointer-events-none">
      <Overlay onClick={onClose} />
      
      <Motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative bg-white w-full max-w-[450px] rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_-2px_24px_0px_rgba(181,182,196,0.3)] pointer-events-auto z-[202]"
        data-name="Dialog"
      >
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          {/* Header */}
          <div className="bg-white relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-col items-center p-[16px] pb-2 gap-[12px] relative w-full">
              <div className="bg-[#eeeef1] h-[4px] rounded-[4px] shrink-0 w-[88px]" data-name="Dragger" />
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full py-2">
                 <p className="flex items-center gap-2 font-bold text-[#303036] text-[18px]">
                   <span className="text-xl">{match.flag1}</span>
                   <span className="text-[16px] font-semibold">{match.team1} {match.finalScore1} - {match.finalScore2} {match.team2}</span>
                   <span className="text-xl">{match.flag2}</span>
                 </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="bg-white w-full p-[16px] flex flex-col items-center gap-6" data-name="Body">
            <div className="flex gap-[16px] items-center justify-center w-full">
               <div className="bg-white border border-[#eeeef1] px-[12px] py-[6px] rounded-[16px]">
                 <span className="text-[12px] font-bold text-[#636271]">{t.myPrediction}: {match.score1}-{match.score2}</span>
               </div>
               <div className="bg-[#f5fdf6] border border-[#cff6d5] px-[12px] py-[6px] rounded-[16px]">
                 <span className="text-[12px] font-bold text-[#1f622c]">{t.pointsLabel}: +{match.points}</span>
               </div>
            </div>

            <div className="flex flex-col gap-[8px] w-full px-2">
               <div className="flex gap-[4px] items-center">
                  <Bullet />
                  <p className="text-[16px] text-[#636271] tracking-[0.032px]">
                    <span className="font-bold">{t.pointsExact}</span> {t.exactResult}.
                  </p>
               </div>
               <div className="flex gap-[4px] items-center">
                  <Bullet />
                  <p className="text-[16px] text-[#636271] tracking-[0.032px]">
                    <span className="font-bold">{t.pointsWinner}</span> {t.matchWinner}.
                  </p>
               </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white w-full border-t border-[#eeeef1] p-[16px] pb-10">
            <button 
              onClick={onClose}
              className="w-full font-bold py-[12px] rounded-[8px] text-[#29317f] hover:bg-gray-50 transition-all text-[16px]"
            >
              {t.close}
            </button>
          </div>
        </div>
      </Motion.div>
    </div>
  );
}
