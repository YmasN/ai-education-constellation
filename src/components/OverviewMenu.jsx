import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';

export default function OverviewMenu({
  stops,
  currentStepIndex,
  onSelectStep,
  onClose
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink/30 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-vellum-50/98 shadow-2xl rounded-2xl border border-vellum-400 p-6 z-10">
        <div className="flex items-center justify-between border-b border-vellum-300 pb-3 mb-4">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-terracotta font-semibold">
              Constellation Navigator
            </span>
            <h3 className="font-editorial text-2xl font-bold text-ink">
              10-Minute Talk Sequence
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-vellum-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[60vh] overflow-y-auto pr-1">
          {stops.map((stop, idx) => {
            const isCurrent = idx === currentStepIndex;
            return (
              <button
                key={stop.id}
                onClick={() => {
                  onSelectStep(idx);
                  onClose();
                }}
                className={`flex items-start gap-3 p-3 rounded-xl text-left border transition-all
                  ${isCurrent 
                    ? 'bg-vellum-200/90 border-ink shadow-sm ring-1 ring-ink' 
                    : 'bg-vellum-100/70 border-vellum-300 hover:border-ink/50 hover:bg-vellum-100'
                  }
                `}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-editorial font-bold text-xs shrink-0
                  ${isCurrent ? 'bg-ink text-vellum-100' : 'bg-vellum-300 text-ink'}
                `}>
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-ink-muted">{stop.targetTime}</span>
                    {isCurrent && <span className="text-[9px] font-semibold text-terracotta uppercase">Active</span>}
                  </div>
                  <h4 className="font-editorial text-sm font-semibold text-ink truncate mt-0.5">
                    {stop.title}
                  </h4>
                  <p className="text-[11px] text-ink-muted truncate font-sans">
                    {stop.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-vellum-300 flex items-center justify-between text-xs text-ink-muted">
          <span>Press <kbd className="font-mono bg-vellum-200 px-1.5 py-0.5 rounded border border-vellum-300">O</kbd> anytime to open jump menu</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-ink text-vellum-100 text-xs font-semibold hover:bg-ink-light transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
