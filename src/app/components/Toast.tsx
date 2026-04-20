import React from 'react';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';

export const CustomToast = ({ message, t }: { message: string, t: any }) => {
  return (
    <div className="bg-[#303036] rounded-[8px] min-w-[328px] overflow-hidden flex flex-col pointer-events-auto border border-[#44444c]">
      <div className="flex items-center justify-between p-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-[#28c040] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
          <span className="text-white font-semibold text-[14px] leading-tight">
            {message}
          </span>
        </div>
        <button 
          onClick={() => toast.dismiss(t)}
          className="text-white/60 hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="h-[6px] w-full bg-[#cff6d5]" />
    </div>
  );
};
