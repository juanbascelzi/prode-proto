import React, { useState } from 'react';
import { StageSelector } from '@/app/components/StageSelector';
import { StageDialog } from '@/app/components/StageDialog';
import { AnimatePresence } from 'motion/react';

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full px-4" data-name="Títle">
      <p className="font-semibold leading-[1.4] text-[#303036] text-[16px] tracking-[0.032px]">
        Partidos
      </p>
    </div>
  );
}

function MatchCard({ date, time, team1, flag1, team2, flag2, location }: any) {
  return (
    <div className="w-full px-4 flex flex-col gap-[16px]">
      {date && <p className="text-[14px] font-semibold text-[#303036]">{date}</p>}
      <div className="bg-white rounded-[16px] p-4 flex flex-col items-center gap-2 border border-[#eeeef1]">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex flex-col items-center gap-1 w-[80px]">
            <span className="text-[32px] leading-none">{flag1}</span>
            <span className="text-[12px] font-semibold text-[#303036] text-center">{team1}</span>
          </div>
          <div className="text-[12px] font-semibold text-[#303036]">{time}</div>
          <div className="flex flex-col items-center gap-1 w-[80px]">
            <span className="text-[32px] leading-none">{flag2}</span>
            <span className="text-[12px] font-semibold text-[#303036] text-center">{team2}</span>
          </div>
        </div>
        <p className="text-[10px] text-[#636271] text-center mt-1">{location}</p>
      </div>
    </div>
  );
}

export function FixtureView() {
  const [selectedStage, setSelectedStage] = useState("Grupos · Fecha 1");
  const [isStageDialogOpen, setIsStageDialogOpen] = useState(false);

  return (
    <div className="flex flex-col gap-[16px] w-full">
      <Title />
      <div className="px-4">
        <StageSelector 
          selectedStage={selectedStage} 
          onStageSelect={setSelectedStage} 
          onClick={() => setIsStageDialogOpen(true)}
        />
      </div>
      
      <div className="flex flex-col gap-[16px] pb-20">
        {selectedStage === "Grupos · Fecha 1" ? (
          <>
            <MatchCard 
              date="Jueves 11/6"
              time="14:00"
              team1="México"
              flag1="🇲🇽"
              team2="Sudáfrica"
              flag2="🇿🇦"
              location="Grupo A · Estadio Azteca, Ciudad de México, México"
            />
            <MatchCard 
              time="23:00"
              team1="Corea del Sur"
              flag1="🇰🇷"
              team2="TBD"
              flag2="🏳️"
              location="Grupo A · Estadio Akron, Guadalajara, México"
            />
            <MatchCard 
              date="Viernes 12/6"
              time="16:00"
              team1="Canadá"
              flag1="🇨🇦"
              team2="TBD"
              flag2="🏳️"
              location="Grupo B · BMO Field, Toronto, Canadá"
            />
            <MatchCard 
              time="22:00"
              team1="USA"
              flag1="🇺🇸"
              team2="Paraguay"
              flag2="🇵🇾"
              location="Grupo D · SoFi Stadium, Los Ángeles, Estados Unidos"
            />
          </>
        ) : (
          <div className="px-10 py-20 flex flex-col items-center justify-center text-center gap-4">
            <div className="bg-white p-6 rounded-full border border-[#eeeef1]">
              <span className="text-4xl">⚽</span>
            </div>
            <div>
              <p className="text-[#29317f] font-semibold">Partidos de {selectedStage}</p>
              <p className="text-[#636271] text-sm">Próximamente disponibles</p>
            </div>
          </div>
        )}
      </div>

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
