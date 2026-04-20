import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { CustomToast } from '@/app/components/Toast';
import { useTranslation } from '@/i18n/LanguageContext';

const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Plus = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const TEAMS = [
  { id: 'DE', name: 'Alemania', flag: '🇩🇪' },
  { id: 'SA', name: 'Arabia Saudita', flag: '🇸🇦' },
  { id: 'DZ', name: 'Algeria', flag: '🇩🇿' },
  { id: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { id: 'AU', name: 'Australia', flag: '🇦🇺' },
  { id: 'AT', name: 'Austria', flag: '🇦🇹' },
  { id: 'BE', name: 'Bélgica', flag: '🇧🇪' },
  { id: 'BR', name: 'Brasil', flag: '🇧🇷' },
  { id: 'CA', name: 'Canadá', flag: '🇨🇦' },
  { id: 'CL', name: 'Chile', flag: '🇨🇱' },
  { id: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { id: 'ES', name: 'España', flag: '🇪🇸' },
  { id: 'FR', name: 'Francia', flag: '🇫🇷' },
  { id: 'IT', name: 'Italia', flag: '🇮🇹' },
  { id: 'MX', name: 'México', flag: '🇲🇽' },
  { id: 'NL', name: 'Países Bajos', flag: '🇳🇱' },
  { id: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { id: 'UY', name: 'Uruguay', flag: '🇺🇾' },
];

export function PodiumSelector({ onBack, onSave, initialSelection }: { onBack: () => void, onSave: (selection: any) => void, initialSelection?: any }) {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [first, setFirst] = useState<any>(initialSelection?.first || null);
  const [second, setSecond] = useState<any>(initialSelection?.second || null);
  const [third, setThird] = useState<any>(initialSelection?.third || null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showFooter, setShowFooter] = useState(true);
  const lastScrollY = useRef(0);

  // Update current step based on selections
  useEffect(() => {
    if (!first) setCurrentStep(1);
    else if (!second) setCurrentStep(2);
    else if (!third) setCurrentStep(3);
    else setCurrentStep(4); // All done
  }, [first, second, third]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSave = () => {
    toast.custom((toastId) => (
      <CustomToast message={t.podiumSaved} t={toastId} />
    ));
    
    setTimeout(() => {
      onSave({ first, second, third });
    }, 500);
  };

  const filteredTeams = TEAMS.filter(team => 
    team.name.toLowerCase().includes(search.toLowerCase()) &&
    team.id !== first?.id &&
    team.id !== second?.id &&
    team.id !== third?.id
  );

  const handleSelectTeam = (team: any) => {
    if (!first) {
      setFirst(team);
    } else if (!second) {
      setSecond(team);
    } else if (!third) {
      setThird(team);
    }
  };

  const isComplete = first && second && third;

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center">
      {/* Header */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] bg-white border-b border-[#eeeef1] z-50">
        <div className="px-4 py-3 flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-[8px] transition-colors">
            <ArrowLeft className="w-6 h-6 text-[#303036]" />
          </button>
          <h1 className="text-[18px] font-semibold text-[#303036] flex-1 text-center pr-10">{t.idealPodiumTitle}</h1>
        </div>
      </header>

      <div className="h-[56px] w-full" />

      <main className="w-full max-w-[450px] px-4 py-6 flex flex-col gap-6">
        {/* Pronóstico Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[16px] font-semibold text-[#303036]">{t.podiumPrediction}</h2>
          <div className="grid grid-cols-3 gap-2">
            {/* 1st Card */}
            <div className={`rounded-[16px] border p-3 flex flex-col items-center gap-2 relative min-h-[120px] justify-center transition-all duration-300 ${
              currentStep === 1 
                ? "bg-[#F1F4FD] border-[#496BE3] ring-1 ring-[#496BE3]" 
                : "bg-white border-[#eeeef1]"
            }`}>
              <span className="text-[10px] font-semibold text-[#303036] mb-1">{"🥇 " + t.first}</span>
              <div className="relative">
                <div className="text-4xl mb-1">{first?.flag || '🏳️'}</div>
                {first && (
                  <button 
                    onClick={() => setFirst(null)}
                    className="absolute -top-1 -right-1 bg-[#e9e9f4] p-1 rounded-md"
                  >
                    <X className="w-2 h-2 text-[#303036]" />
                  </button>
                )}
              </div>
              <span className="text-[12px] font-semibold text-[#303036] text-center line-clamp-1">{first?.name || t.team}</span>
            </div>

            {/* 2nd Card */}
            <div className={`rounded-[16px] border p-3 flex flex-col items-center gap-2 relative min-h-[120px] justify-center transition-all duration-300 ${
              currentStep === 2 
                ? "bg-[#F1F4FD] border-[#496BE3] ring-1 ring-[#496BE3]" 
                : "bg-white border-[#eeeef1]"
            }`}>
              <span className="text-[10px] font-semibold text-[#303036] mb-1">{"🥈 " + t.second}</span>
              <div className="relative">
                <div className="text-4xl mb-1">{second?.flag || '🏳️'}</div>
                {second && (
                  <button 
                    onClick={() => setSecond(null)}
                    className="absolute -top-1 -right-1 bg-[#e9e9f4] p-1 rounded-md"
                  >
                    <X className="w-2 h-2 text-[#303036]" />
                  </button>
                )}
              </div>
              <span className="text-[12px] font-semibold text-[#303036] text-center line-clamp-1">{second?.name || t.team}</span>
            </div>

            {/* 3rd Card */}
            <div className={`rounded-[16px] border p-3 flex flex-col items-center gap-2 relative min-h-[120px] justify-center transition-all duration-300 ${
              currentStep === 3 
                ? "bg-[#F1F4FD] border-[#496BE3] ring-1 ring-[#496BE3]" 
                : "bg-white border-[#eeeef1]"
            }`}>
              <span className="text-[10px] font-semibold text-[#303036] mb-1">{"🥉 " + t.third}</span>
              <div className="relative">
                <div className="text-4xl mb-1">{third?.flag || '🏳️'}</div>
                {third && (
                  <button 
                    onClick={() => setThird(null)}
                    className="absolute -top-1 -right-1 bg-[#e9e9f4] p-1 rounded-md"
                  >
                    <X className="w-2 h-2 text-[#303036]" />
                  </button>
                )}
              </div>
              <span className="text-[12px] font-semibold text-[#303036] text-center line-clamp-1">{third?.name || t.team}</span>
            </div>
          </div>
        </section>

        {/* Selecciones Section */}
        <section className="flex flex-col gap-4 pb-32">
          <h2 className="text-[16px] font-semibold text-[#303036]">{t.selections} ({filteredTeams.length})</h2>
          
          <div className="relative mb-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#636271]" />
            <input 
              type="text"
              placeholder={t.byName}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#eeeef1] rounded-[12px] py-3 pl-12 pr-4 text-[16px] outline-none focus:border-[#496be3] transition-all"
            />
          </div>

          <div className="bg-white rounded-[16px] border border-[#eeeef1] overflow-hidden">
            {filteredTeams.map((team, idx) => (
              <div key={team.id}>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#f5f6f8] w-10 h-10 rounded-full flex items-center justify-center text-2xl">
                      {team.flag}
                    </div>
                    <span className="text-[16px] font-semibold text-[#303036]">{team.name}</span>
                  </div>
                  <button 
                    onClick={() => handleSelectTeam(team)}
                    disabled={isComplete}
                    className="p-2 border border-[#c5d4f8] rounded-lg text-[#29317f] hover:bg-[#f1f4fd] transition-colors disabled:opacity-30"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
                {idx < filteredTeams.length - 1 && <div className="h-px bg-[#eeeef1] mx-4" />}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Button */}
      <AnimatePresence>
        {showFooter && (
          <Motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] p-4 bg-gradient-to-t from-white via-white to-transparent pt-8 z-40"
          >
            <button 
              onClick={handleSave}
              disabled={!isComplete}
              className={`w-full py-3 rounded-[12px] font-semibold text-[16px] transition-all ${
                isComplete
                ? "bg-[#496be3] text-white" 
                : "bg-[#eeeef1] text-[#AAAABA] cursor-not-allowed"
              }`}
            >
              {t.saveSelection}
            </button>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
