import React from 'react';
import { X, Play, Pause, RotateCcw, Target, Sparkles, ArrowRight } from 'lucide-react';

export default function PresenterNotes({
  activeStop,
  nextStop,
  elapsedSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
  onClose
}) {
  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isOverTime = elapsedSeconds > activeStop.targetSeconds;

  return (
    <div className="fixed top-20 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] glass-panel shadow-2xl rounded-2xl border border-vellum-400 p-5 animate-in fade-in slide-in-from-right-4 duration-300">
      
      {/* Header & Close */}
      <div className="flex items-center justify-between border-b border-vellum-300/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-terracotta animate-ping" />
          <h3 className="font-editorial text-lg font-bold text-ink">Presenter Cue Card</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md text-ink-muted hover:text-ink hover:bg-vellum-300/60 transition-colors"
          title="Close (T)"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* 10-Minute Timer Cockpit */}
      <div className="bg-vellum-200/90 rounded-xl p-3 mb-4 border border-vellum-300 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase font-mono tracking-wider text-ink-muted">
            Talk Timer (10:00 Max)
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-mono font-bold ${isOverTime ? 'text-terracotta' : 'text-ink'}`}>
              {formatTime(elapsedSeconds)}
            </span>
            <span className="text-xs text-ink-muted font-mono">
              / Target {formatTime(activeStop.targetSeconds)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onToggleTimer}
            className="p-2 rounded-lg bg-ink text-vellum-100 hover:bg-ink-light transition-colors"
            title={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
          >
            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onResetTimer}
            className="p-2 rounded-lg bg-vellum-300 text-ink hover:bg-vellum-400 transition-colors"
            title="Reset Timer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Core Speaking Message (Stage Soundbite) */}
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-terracotta flex items-center gap-1 mb-1">
          <Sparkles className="w-3 h-3" /> Core Anchor Thought
        </span>
        <blockquote className="font-editorial italic text-base text-ink bg-terracotta-light/40 border-l-2 border-terracotta p-3 rounded-r-lg leading-snug">
          "{activeStop.keyMessage}"
        </blockquote>
      </div>

      {/* Bullet Talking Points */}
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-muted flex items-center gap-1 mb-2">
          <Target className="w-3 h-3" /> Spoken Cues
        </span>
        <ul className="space-y-2 text-xs text-ink-light leading-relaxed">
          {activeStop.speakerCues.map((cue, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ink-muted mt-1.5 shrink-0" />
              <span>{cue}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Next Up Preview for smooth transitions */}
      {nextStop && (
        <div className="pt-3 border-t border-vellum-300/80 flex items-center justify-between text-xs text-ink-muted">
          <span>Next: <strong className="text-ink font-editorial">{nextStop.title}</strong></span>
          <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
        </div>
      )}

    </div>
  );
}
