import React, { useState, useEffect } from 'react';
import svgPaths from "./svg-lmlj2v2sfr";
import { motion, AnimatePresence } from 'motion/react';
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
  status: string;
  winner?: number | null; // 1 for team1, 2 for team2
}

interface Props {
  match: Match | null;
  onClose: () => void;
  onSave: (id: number, score1: string, score2: string, winner?: number | null) => void;
}

function Overlay({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="fixed inset-0 bg-[rgba(50,50,50,0.8)] z-[200]" 
      data-name="Overlay" 
    />
  );
}

function IconClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p28fcbf80} fill="var(--fill-0, #303036)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1bc1c800} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconMinus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p31b5f680} fill="var(--fill-0, #29317F)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

export default function GrupoCompetenciaBackdropScore({ match, onClose, onSave }: Props) {
  const { t } = useTranslation();
  const [s1, setS1] = useState("0");
  const [s2, setS2] = useState("0");
  const [winner, setWinner] = useState<number | null>(null);

  useEffect(() => {
    if (match) {
      setS1(match.score1 || "0");
      setS2(match.score2 || "0");
      setWinner(match.winner || null);
    }
  }, [match]);

  // Reset winner if score is no longer a tie
  useEffect(() => {
    if (s1 !== s2) {
      setWinner(null);
    }
  }, [s1, s2]);

  if (!match) return null;

  const isEliminationPhase = (groupName: string) => {
    const name = groupName.toLowerCase();
    return (
      name.includes("dieciseisavos") ||
      name.includes("octavos") ||
      name.includes("cuartos") ||
      name.includes("semifinal") ||
      name.includes("final") ||
      name.includes("tercer puesto")
    );
  };

  const isElimination = isEliminationPhase(match.group);
  const isTie = s1 === s2 && s1 !== "";
  const showTieBreaker = isElimination && isTie;

  const handleIncrement = (team: 1 | 2) => {
    if (team === 1) setS1(prev => (parseInt(prev || "0") + 1).toString());
    else setS2(prev => (parseInt(prev || "0") + 1).toString());
  };

  const handleDecrement = (team: 1 | 2) => {
    if (team === 1) setS1(prev => Math.max(0, parseInt(prev || "0") - 1).toString());
    else setS2(prev => Math.max(0, parseInt(prev || "0") - 1).toString());
  };

  const team1Name = match.team1;
  const team2Name = match.team2;
  const flag1 = match.flag1;
  const flag2 = match.flag2;

  const isChanged = s1 !== (match.score1 || "0") || s2 !== (match.score2 || "0") || winner !== (match.winner || null);
  const isSaveDisabled = !isChanged || (showTieBreaker && winner === null);

  return (
    <div className="fixed inset-0 flex items-end justify-center z-[201] pointer-events-none">
      <Overlay onClick={onClose} />
      
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative bg-white w-full max-w-[450px] rounded-tl-[24px] rounded-tr-[24px] border-t border-l border-r border-[#eeeef1] pointer-events-auto z-[202]"
        data-name="Dialog"
      >
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          
          {/* Header */}
          <div className="bg-white relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-col items-center p-[16px] pb-2 gap-[12px] relative w-full">
              <div className="bg-[#eeeef1] h-[4px] rounded-[4px] shrink-0 w-[40px] opacity-40" data-name="Dragger" />
              <div className="flex items-center justify-between w-full">
                <div className="w-10" />
                <p className="font-semibold text-[#303036] text-[16px] text-center tracking-[0.032px]">
                  {team1Name} - {team2Name}
                </p>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <IconClose />
                </button>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="bg-white w-full p-[16px] flex flex-col items-center gap-8" data-name="Body">
            <div className="flex items-center justify-center gap-4 w-full py-4">
              
              {/* Team 1 Flag */}
              <div className="text-[48px] leading-none shrink-0">{flag1}</div>

              {/* Team 1 Controls */}
              <div className="flex flex-col items-center gap-3">
                <button 
                  onClick={() => handleIncrement(1)}
                  className="bg-white border border-[#c5d4f8] p-2 rounded-[8px] hover:bg-[#f1f4fd] active:scale-95 transition-all shrink-0"
                >
                  <IconPlus />
                </button>
                <div className="bg-white border border-[#eeeef1] rounded-[12px] min-w-[64px] h-[64px] flex items-center justify-center">
                  <span className="font-semibold text-[#303036] text-[32px]">
                    {s1}
                  </span>
                </div>
                <button 
                  onClick={() => handleDecrement(1)}
                  className="bg-white border border-[#c5d4f8] p-2 rounded-[8px] hover:bg-[#f1f4fd] active:scale-95 transition-all shrink-0"
                >
                  <IconMinus />
                </button>
              </div>

              {/* VS Label */}
              <div className="font-medium text-[#303036] text-[18px] px-1">{t.vs}</div>

              {/* Team 2 Controls */}
              <div className="flex flex-col items-center gap-3">
                <button 
                  onClick={() => handleIncrement(2)}
                  className="bg-white border border-[#c5d4f8] p-2 rounded-[8px] hover:bg-[#f1f4fd] active:scale-95 transition-all shrink-0"
                >
                  <IconPlus />
                </button>
                <div className="bg-white border border-[#eeeef1] rounded-[12px] min-w-[64px] h-[64px] flex items-center justify-center">
                  <span className="font-semibold text-[#303036] text-[32px]">
                    {s2}
                  </span>
                </div>
                <button 
                  onClick={() => handleDecrement(2)}
                  className="bg-white border border-[#c5d4f8] p-2 rounded-[8px] hover:bg-[#f1f4fd] active:scale-95 transition-all shrink-0"
                >
                  <IconMinus />
                </button>
              </div>

              {/* Team 2 Flag */}
              <div className="text-[48px] leading-none shrink-0">{flag2}</div>
            </div>

            {/* Tie Breaker Section */}
            <AnimatePresence>
              {showTieBreaker && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full flex flex-col gap-6 overflow-hidden"
                >
                  <div className="h-px bg-[#eeeef1] w-full opacity-60" />
                  
                  <div className="flex flex-col items-center text-center gap-2">
                    <p className="font-bold text-[#303036] text-[16px]">
                      {t.penaltyQuestion}
                    </p>
                    <p className="text-[#636271] text-[12px] leading-[1.4] max-w-[320px]">
                      {t.penaltyDescription}
                    </p>
                  </div>

                  <div className="flex gap-3 w-full pb-4">
                    <button 
                      onClick={() => setWinner(1)}
                      className={`flex-1 flex items-center justify-center gap-3 h-[80px] rounded-[16px] border transition-all relative ${
                        winner === 1 
                          ? "bg-white border-[#496BE3] ring-[#496BE3] ring-inset ring-1" 
                          : "bg-white border-[#F1F1F4]"
                      }`}
                    >
                      <span className="text-[24px] leading-none">{flag1}</span>
                      <span className={`text-[16px] font-semibold text-[#303036]`}>
                        {team1Name}
                      </span>
                    </button>

                    <button 
                      onClick={() => setWinner(2)}
                      className={`flex-1 flex items-center justify-center gap-3 h-[80px] rounded-[16px] border transition-all relative ${
                        winner === 2 
                          ? "bg-white border-[#496BE3] ring-[#496BE3] ring-inset ring-1" 
                          : "bg-white border-[#F1F1F4]"
                      }`}
                    >
                      <span className="text-[24px] leading-none">{flag2}</span>
                      <span className={`text-[16px] font-semibold text-[#303036]`}>
                        {team2Name}
                      </span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="bg-white w-full border-t border-[#eeeef1] p-[16px] pb-8">
            <button 
              onClick={() => onSave(match.id, s1, s2, winner)}
              disabled={isSaveDisabled}
              className={`w-full font-['Roboto:SemiBold',sans-serif] font-semibold py-[12px] rounded-[8px] transition-all ${
                !isSaveDisabled
                  ? "bg-[#496BE3] text-white active:scale-[0.98]" 
                  : "bg-[#dfe0e6] text-[#aaaaba] cursor-not-allowed"
              }`}
            >
              {t.savePrediction}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
