import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { toast, Toaster } from 'sonner';
import { useTranslation } from '@/i18n/LanguageContext';

const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const CheckIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

import ProdeCompetenciaRankingTable from '@/imports/ProdeCompetenciaRankingTable';
import GrupoCompetenciaBackdropScore from '@/imports/GrupoCompetenciaBackdropScore';
import ProdeCompetenciaSectionReglamentoDetalles from '@/imports/ProdeCompetenciaSectionReglamentoDetalles';
import { CustomToast } from '@/app/components/Toast';
import { PodiumSelector } from '@/app/components/PodiumSelector';
import { PodiumCard } from '@/app/components/PodiumCard';
import { PodiumSummaryBackdrop } from '@/app/components/PodiumSummaryBackdrop';
import { FixtureView } from '@/app/components/FixtureView';
import { StageSelector } from '@/app/components/StageSelector';
import { StageDialog } from '@/app/components/StageDialog';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

import { RankingCard } from '@/app/components/RankingCard';
import { NextMatchCard } from '@/app/components/NextMatchCard';
import { MatchPointsBackdrop } from '@/app/components/MatchPointsBackdrop';
import { CompletionStateCard } from '@/app/components/CompletionStateCard';
import MulticolorGrid from '@/imports/MulticolorGrid';

// Mock data based on the screenshot
const INITIAL_MATCHES = [
  {
    date: "Jueves 11/6",
    matches: [
      { id: 1, time: "16:00", team1: "México", flag1: "🇲🇽", team2: "Sudáfrica", flag2: "🇿🇦", group: "Grupo A · Estadio Azteca, Ciudad de México, México", score1: "", score2: "", status: "por jugar" },
      { id: 2, time: "23:00", team1: "C. del Sur", flag1: "🇰🇷", team2: "TBD", flag2: "🏳️", group: "Grupo C · Estadio Akron, Guadalajara, México", score1: "", score2: "", status: "por jugar" }
    ]
  },
  {
    date: "Viernes 12/6",
    matches: [
      { id: 10, time: "Finalizado", team1: "México", flag1: "🇲🇽", team2: "Sudáfrica", flag2: "🇿🇦", group: "Grupo A · Estadio Azteca, Ciudad de México, México", score1: "2", score2: "1", finalScore1: "2", finalScore2: "1", points: "7", status: "finalizado" },
      { id: 3, time: "16:00", team1: "Canadá", flag1: "🇨🇦", team2: "TBD", flag2: "🏳️", group: "Grupo B · BMO Field, Toronto, Canadá", score1: "", score2: "", status: "por jugar" },
      { id: 4, time: "22:00", team1: "USA", flag1: "🇺🇸", team2: "Paraguay", flag2: "🇵🇾", group: "Grupo D · SoFi Stadium, Los Ángeles, USA", score1: "", score2: "", status: "por jugar" }
    ]
  },
  {
    date: "Sábado 13/6",
    matches: [
      { id: 11, time: "Finalizado", team1: "Argentina", flag1: "🇦🇷", team2: "Arabia Saudita", flag2: "🇸🇦", group: "Grupo C · Lusail Stadium", score1: "1", score2: "2", finalScore1: "1", finalScore2: "2", points: "0", status: "finalizado" },
      { id: 5, time: "16:00", team1: "Qatar", flag1: "🇶🇦", team2: "Suiza", flag2: "🇨🇭", group: "Grupo B · Levi's Stadium, California, USA", score1: "", score2: "", status: "por jugar" },
      { id: 6, time: "19:00", team1: "Brasil", flag1: "🇧🇷", team2: "Marruecos", flag2: "🇲🇦", group: "Grupo C · MetLife Stadium, East Rutherford, USA", score1: "", score2: "", status: "por jugar" },
      { id: 7, time: "22:00", team1: "Haití", flag1: "🇭🇹", team2: "Marruecos", flag2: "🇲🇦", group: "Grupo C · Gillette Stadium, Boston, USA", score1: "", score2: "", status: "por jugar" }
    ]
  },
  {
    date: "Domingo 28/6",
    matches: [
      { id: 20, time: "14:00", team1: "Argentina", flag1: "🇦🇷", team2: "Francia", flag2: "🇫🇷", group: "Octavos de final · Estadio Lusail", score1: "3", score2: "3", winner: 1, status: "por jugar" }
    ]
  }
];

const MatchCard = ({ match, onClick }: { match: any, onClick: () => void }) => {
  const { t } = useTranslation();
  const hasScore = match.score1 !== "" && match.score2 !== "";
  const isFinalizado = match.status === "finalizado";
  const isKnockout = match.group && (
    match.group.includes("Octavos") || 
    match.group.includes("Cuartos") || 
    match.group.includes("Semifinal") || 
    match.group.includes("Final")
  );
  const isTie = hasScore && match.score1 === match.score2;
  const showTieBreakerInfo = isKnockout && isTie && match.winner;

  if (isFinalizado) {
    const isZeroPoints = match.points === "0";
    
    return (
      <div 
        id={`match-card-${match.id}`}
        onClick={onClick}
        className="bg-white rounded-[16px] border border-[#eeeef1] p-[16px] flex flex-col gap-[16px] w-full max-w-[360px] transition-all cursor-pointer active:scale-[0.98] hover:shadow-sm"
      >
        <div className="flex justify-between items-center h-[24px]">
          <div className="px-2 py-1 rounded-[16px] border border-[#eeeef1] bg-white">
            <span className="text-[12px] font-semibold text-[#636271]">{t.myPrediction}: {match.score1}-{match.score2}</span>
          </div>
          <div className={`px-2 py-1 rounded-[16px] border ${
            isZeroPoints 
              ? "bg-[#fdfaec] border-[#fbec9e]" 
              : "bg-[#F5FDF6] border-[#D5F6DD]"
          }`}>
            <span className={`text-[12px] font-semibold ${
              isZeroPoints ? "text-[#7e4317]" : "text-[#1F622C]"
            }`}>
              {t.pointsLabel}: +{match.points}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 px-2">
          <div className="flex flex-col items-center gap-1 w-[80px]">
            <div className="text-[32px] leading-none mb-1">{match.flag1}</div>
            <span className="text-[12px] font-bold text-[#303036] text-center">{match.team1}</span>
          </div>
          
          <div className="flex items-center gap-6">
             <span className="text-[28px] font-bold text-[#303036] leading-none">{match.finalScore1}</span>
             <span className="text-[24px] font-bold text-[#303036] leading-none opacity-40">-</span>
             <span className="text-[28px] font-bold text-[#303036] leading-none">{match.finalScore2}</span>
          </div>

          <div className="flex flex-col items-center gap-1 w-[80px]">
            <div className="text-[32px] leading-none mb-1">{match.flag2}</div>
            <span className="text-[12px] font-bold text-[#303036] text-center">{match.team2}</span>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      id={`match-card-${match.id}`}
      onClick={onClick}
      className={`relative rounded-[16px] border p-4 flex flex-col gap-2 w-full max-w-[360px] cursor-pointer transition-all active:scale-[0.98] ${
        hasScore 
          ? "bg-white border-[#CFF6D5] hover:border-[#A5E8B1]" 
          : "bg-white border-[#FBEC9E] hover:border-[#f9e27a]"
      }`}
    >
      {hasScore && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full border border-[#CFF6D5] bg-[#F5FDF6] flex items-center justify-center shadow-sm z-10">
          <CheckIcon className="w-3 h-3 text-[#1F622C]" strokeWidth={4} />
        </div>
      )}
      <div className="flex items-center justify-between gap-2 mt-2">
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="relative inline-block">
            <span className="text-3xl leading-none">{match.flag1}</span>
          </div>
          <span className="text-[12px] font-bold text-[#303036] text-center">{match.team1}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className={`w-14 h-14 border rounded-[8px] flex items-center justify-center font-bold text-2xl transition-colors ${
            hasScore 
              ? "bg-white border-[#CFF6D5] text-[#303036]" 
              : "bg-white border-[#eeeef1] text-[#AAAABA]"
          }`}>
            {match.score1 || "-"}
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-[14px] font-bold text-[#303036]">{match.time}</span>
          </div>
          
          <div className={`w-14 h-14 border rounded-[8px] flex items-center justify-center font-bold text-2xl transition-colors ${
            hasScore 
              ? "bg-white border-[#CFF6D5] text-[#303036]" 
              : "bg-white border-[#eeeef1] text-[#AAAABA]"
          }`}>
            {match.score2 || "-"}
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-1 flex-1">
          <div className="text-3xl leading-none">{match.flag2}</div>
          <span className="text-[12px] font-bold text-[#303036] text-center">{match.team2}</span>
        </div>
      </div>

      {showTieBreakerInfo && (
        <div className="w-full flex justify-center mt-2">
          <p className="text-[10px] font-semibold text-[#303036] text-center tracking-[0.02px]">
            {t.predictionIn} {match.winner === 1 ? match.team1 : match.team2} {match.winner === 1 ? match.flag1 : match.flag2}
          </p>
        </div>
      )}
    </div>
  );
};

const StatsCards = ({ onRankingClick, onNextMatchClick, podiumSelection, nextMatch }: { onRankingClick: (view?: string) => void, onNextMatchClick: () => void, podiumSelection: any, nextMatch: any }) => {
  // La card desaparece en cuanto se guarda la selección
  const hasPodium = !!podiumSelection;

  return (
    <section className="px-4 py-6 flex flex-col gap-4">
      <RankingCard 
        position={5} 
        points={32} 
        onClick={() => onRankingClick('ranking')} 
      />
      
      <PodiumCard 
        onClick={() => onRankingClick('final-sonada')}
        selection={podiumSelection}
      />

      {nextMatch && (
        <NextMatchCard 
          match={nextMatch} 
          onClick={onNextMatchClick} 
        />
      )}
    </section>
  );
};

export default function App() {
  const { t } = useTranslation();
  const [matchData, setMatchData] = useState(INITIAL_MATCHES);
  const [activeFilter, setActiveFilter] = useState("upcoming");
  const [selectedStage, setSelectedStage] = useState("Grupos · Fecha 1");
  const [view, setView] = useState("home");
  const [activeTab, setActiveTab] = useState("predictions");
  const [selectedMatch, setSelectedMatch] = useState<any | null>(null);
  const [selectedFinalizedMatch, setSelectedFinalizedMatch] = useState<any | null>(null);
  const [podiumSelection, setPodiumSelection] = useState<any>(null);
  const [isStageDialogOpen, setIsStageDialogOpen] = useState(false);
  const [isPodiumSummaryOpen, setIsPodiumSummaryOpen] = useState(false);

  const handleScoreChange = (matchId: number, s1: string, s2: string, winner?: number | null) => {
    setMatchData(prev => prev.map(group => ({
      ...group,
      matches: group.matches.map(m => m.id === matchId ? { ...m, score1: s1, score2: s2, winner: winner } : m)
    })));
    setSelectedMatch(null);
    toast.custom((toastId) => <CustomToast message={t.predictionSaved} t={toastId} />);
  };

  const handlePodiumSave = (selection: any) => {
    setPodiumSelection(selection);
    setView("dashboard");
    setActiveTab("predictions");
  };

  const handleNextMatchClick = () => {
    setActiveTab("predictions");
    
    // Check if there are any pending predictions
    const hasPending = matchData.some(group => 
      group.matches.some(m => m.status === "por jugar" && m.score1 === "" && m.score2 === "")
    );

    if (hasPending) {
      setSelectedStage("Todos");
      setActiveFilter("pending");
      setTimeout(() => {
        const element = document.getElementById('filters-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If no pending, just go to the first upcoming match as before
      const nextMatch = matchData.flatMap(g => g.matches).find(m => m.status === "por jugar");
      if (nextMatch) {
        setTimeout(() => {
          const element = document.getElementById(`match-card-${nextMatch.id}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setSelectedMatch(nextMatch);
          }
        }, 100);
      }
    }
  };

  const handleBackToHome = () => {
    setView("home");
    setActiveTab("predictions");
  };

  const TAB_VARIANTS = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const PAGE_TRANSITION = {
    duration: 0.3,
    ease: "easeInOut"
  };

  const handleTabChangeInReglamento = (tab: string) => {
    if (tab === "Fixture") {
      setActiveTab("predictions");
    } else if (tab === "Reglamento") {
      setActiveTab("rules");
    } else {
      setActiveTab("predictions");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans max-w-[450px] mx-auto relative overflow-x-hidden">
      <Toaster position="bottom-center" />
      
      <AnimatePresence mode="wait">
        {view === "home" ? (
          <Motion.div 
            key="home" 
            variants={TAB_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={PAGE_TRANSITION}
            className="h-screen"
          >
            <MulticolorGrid onProdeClick={() => setView("dashboard")} />
          </Motion.div>
        ) : view === "ranking" ? (
          <Motion.div 
            key="ranking" 
            variants={TAB_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={PAGE_TRANSITION}
          >
            <ProdeCompetenciaRankingTable 
              onBack={() => setView("dashboard")} 
              onFinalClick={() => {
                if (podiumSelection) {
                  setIsPodiumSummaryOpen(true);
                } else {
                  setView("final-sonada");
                }
              }}
              finalSelection={podiumSelection}
            />
          </Motion.div>
        ) : view === "final-sonada" ? (
          <Motion.div 
            key="final-sonada" 
            variants={TAB_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={PAGE_TRANSITION}
          >
            <PodiumSelector 
              onBack={() => setView("dashboard")} 
              onSave={handlePodiumSave} 
              initialSelection={podiumSelection}
            />
          </Motion.div>
        ) : (
          <Motion.div 
            key="dashboard" 
            variants={TAB_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={PAGE_TRANSITION}
          >
            {/* HEADER FIJO */}
            <AnimatePresence>
              <Motion.header 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={PAGE_TRANSITION}
                className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] bg-white border-b border-[#eeeef1] z-[100]"
              >
                <div className="px-4 py-3 flex items-center justify-between">
                  <button className="p-2 hover:bg-gray-100 rounded-[8px] transition-colors active:scale-90" onClick={handleBackToHome}>
                    <ArrowLeft className="w-6 h-6 text-[#303036]" />
                  </button>
                  <div className="flex items-center justify-center gap-2 flex-1">
                    <h1 className="text-[16px] font-semibold text-[#303036]">{t.sportsPredictions}</h1>
                  </div>
                  <div className="w-10" />
                </div>
                <nav className="flex px-4">
                  {([
                    { id: "predictions", label: t.tabPredictions },
                    { id: "ranking", label: t.tabRanking },
                    { id: "rules", label: t.tabRules },
                  ] as const).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 text-[14px] font-semibold transition-all relative ${activeTab === tab.id ? "text-[#213478]" : "text-[#636271]"}`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <Motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#496be3] rounded-t-[4px]"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  ))}
                </nav>
              </Motion.header>
            </AnimatePresence>

            {/* Espaciado para el header fijo */}
            <div className="h-[108px]" />
            
            <main className="flex flex-col w-full min-h-screen">
              <AnimatePresence mode="wait">
                {activeTab === "predictions" ? (
                  <Motion.div
                    key="pronosticos"
                    variants={TAB_VARIANTS}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={PAGE_TRANSITION}
                    className="flex flex-col pb-6"
                  >
                    <StatsCards 
                      onRankingClick={(target) => {
                        if (target === 'final-sonada') {
                          if (podiumSelection) {
                            setIsPodiumSummaryOpen(true);
                          } else {
                            setView("final-sonada");
                          }
                        } else {
                          setActiveTab("ranking");
                        }
                      }} 
                      onNextMatchClick={handleNextMatchClick}
                      podiumSelection={podiumSelection} 
                      nextMatch={(() => {
                        // Find the first match that is "por jugar" AND hasn't been predicted yet
                        for (const group of matchData) {
                          const pending = group.matches.find(m => m.status === "por jugar" && m.score1 === "" && m.score2 === "");
                          if (pending) return { ...pending, date: group.date };
                        }
                        // If all matches are predicted, the card will disappear (return null)
                        return null;
                      })()}
                    />

                    <div className="px-4 flex flex-col gap-4">
                      <h2 className="text-[16px] font-semibold text-[#303036]">{t.matches}</h2>
                      <StageSelector 
                        selectedStage={selectedStage} 
                        onStageSelect={setSelectedStage} 
                        onClick={() => setIsStageDialogOpen(true)}
                      />
                      <div id="filters-section" className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {([
                          { id: "upcoming", label: t.filterUpcoming },
                          { id: "finished", label: t.filterFinished },
                          { id: "pending", label: t.filterPending },
                        ] as const).map((filter) => (
                          <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-lg text-[14px] font-semibold border transition-all whitespace-nowrap ${
                              activeFilter === filter.id 
                                ? "bg-[#c5d4f8] border-[#c5d4f8] text-[#29317f]" 
                                : "bg-[#f1f4fd] border-[#c5d4f8] text-[#29317f]"
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <section className="px-4 flex flex-col gap-4 pb-20">
                      {(activeFilter === "pending" && 
                        !matchData.some(group => group.matches.some(m => m.status === "por jugar" && m.score1 === "" && m.score2 === ""))
                      ) && (
                        <div className="py-6">
                          <CompletionStateCard />
                        </div>
                      )}

                      {matchData.map((group) => {
                        const filteredMatches = group.matches.filter(match => {
                          if (activeFilter === "upcoming") return match.status === "por jugar";
                          if (activeFilter === "finished") return match.status === "finalizado";
                          if (activeFilter === "pending") {
                            return match.status === "por jugar" && match.score1 === "" && match.score2 === "";
                          }
                          return true;
                        });

                        if (filteredMatches.length === 0) return null;

                        return (
                          <div key={group.date} className="flex flex-col gap-4">
                            <h3 className="text-[14px] font-semibold text-[#303036]">{group.date}</h3>
                            <div className="flex flex-col gap-4 items-center">
                              {filteredMatches.map(match => (
                                <MatchCard 
                                  key={match.id} 
                                  match={match} 
                                  onClick={() => {
                                    if (match.status === "finalizado") {
                                      setSelectedFinalizedMatch(match);
                                    } else {
                                      setSelectedMatch(match);
                                    }
                                  }} 
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </section>
                  </Motion.div>
                ) : activeTab === "ranking" ? (
                  <Motion.div
                    key="ranking-tab"
                    variants={TAB_VARIANTS}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={PAGE_TRANSITION}
                    className="flex flex-col"
                  >
                    <ProdeCompetenciaRankingTable 
                      onBack={() => setActiveTab("predictions")} 
                      onFinalClick={() => {
                        if (podiumSelection) {
                          setIsPodiumSummaryOpen(true);
                        } else {
                          setView("final-sonada");
                        }
                      }}
                      finalSelection={podiumSelection}
                    />
                  </Motion.div>
                ) : (
                  <Motion.div
                    key="premios"
                    variants={TAB_VARIANTS}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={PAGE_TRANSITION}
                    className="size-full"
                  >
                    <ProdeCompetenciaSectionReglamentoDetalles 
                      onBack={handleBackToHome}
                      onTabChange={handleTabChangeInReglamento}
                    />
                  </Motion.div>
                )}
              </AnimatePresence>
            </main>
          </Motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPodiumSummaryOpen && (
          <PodiumSummaryBackdrop 
            isOpen={isPodiumSummaryOpen}
            onClose={() => setIsPodiumSummaryOpen(false)}
            selection={podiumSelection}
            onModify={() => {
              setIsPodiumSummaryOpen(false);
              setView("final-sonada");
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedFinalizedMatch && (
          <MatchPointsBackdrop 
            match={selectedFinalizedMatch} 
            onClose={() => setSelectedFinalizedMatch(null)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedMatch && (
          <GrupoCompetenciaBackdropScore 
            match={selectedMatch} 
            onClose={() => setSelectedMatch(null)}
            onSave={handleScoreChange}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isStageDialogOpen && (
          <StageDialog 
            isOpen={isStageDialogOpen}
            onClose={() => setIsStageDialogOpen(false)}
            selectedStage={selectedStage}
            onStageSelect={setSelectedStage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
