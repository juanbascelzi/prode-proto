import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '@/i18n/LanguageContext';

function Accordion({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string, 
  answer: string, 
  isOpen: boolean, 
  onToggle: () => void 
}) {
  return (
    <div className="w-full bg-white rounded-[8px] border border-[#eeeef1] overflow-hidden transition-all duration-200">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-[16px] text-left gap-4 active:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[16px] text-[#303036] leading-[1.4]">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-[#303036]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-[16px] pb-[16px] text-[14px] text-[#636271] leading-[1.6] border-t border-[#f8f8fa] pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ReglamentoFAQsView() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t.faqs;

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-[16px] w-full pb-10">
      <div className="flex flex-col gap-[16px]">
        {faqs.map((faq, index) => (
          <Accordion 
            key={index}
            question={faq.q} 
            answer={faq.a} 
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}