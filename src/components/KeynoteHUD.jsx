import React from 'react';
import { ChevronLeft, ChevronRight, Clock, BookOpen, Maximize, Film } from 'lucide-react';

export default function KeynoteHUD({
  activeStop,
  currentIndex,
  totalStops,
  elapsedSeconds,
  isTimerRunning,
  isCinemaMode,
  showPresenterNotes,
  onPrev,
  onNext,
  onToggleNotes,
  onToggleFullscreen,
  onToggleCinema
}) {
  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((currentIndex + 1) / totalStops) * 100;

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4 pointer-events-none transition-all duration-500 ${isCinemaMode ? 'translate-y-2 opacity-90 hover:opacity-100' : 'opacity-100'}`}>
      <div className="glass-panel shadow-2xl rounded-2xl p-3.5 border border-vellum-400/90 pointer-events-auto flex items-center justify-between gap-4">
        
        {/* Step Indicator & Title */}
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="h-10 w-10 rounded-xl bg-ink text-vellum-100 flex items-center justify-center font-editorial font-bold text-lg shrink-0 shadow-sm">
            {currentIndex + 1}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-terracotta">
                {activeStop.label}
              </span>
              <span className="text-[11px] text-ink-muted hidden sm:inline">
                Target: {activeStop.targetTime}
              </span>
            </div>
            <h2 className="font-editorial text-lg sm:text-xl font-semibold text-ink truncate leading-tight">
              {activeStop.title}
            </h2>
          </div>
        </div>

        {/* Center Progress Bar */}
        <div className="hidden md:flex flex-col items-center gap-1.5 w-44 shrink-0">
          <div className="w-full bg-vellum-300 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-ink h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] text-ink-muted uppercase tracking-widest font-mono">
            {currentIndex + 1} of {totalStops} Beats
          </span>
        </div>

        {/* Controls & Tools */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* 10-Min Timer Badge */}
          <button
            onClick={onToggleNotes}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors
              ${elapsedSeconds > 600 ? 'bg-red-100 text-red-800 font-bold animate-pulse' : 'bg-vellum-200/90 text-ink hover:bg-vellum-300'}
            `}
            title="Toggle Presenter Cues (T)"
          >
            <Clock className="w-3.5 h-3.5 text-terracotta" />
            <span>{formatTime(elapsedSeconds)}</span>
          </button>

          {/* Notes Toggle Button */}
          <button
            onClick={onToggleNotes}
            className={`p-2 rounded-lg text-ink transition-colors ${showPresenterNotes ? 'bg-ink text-vellum-100' : 'bg-vellum-200/80 hover:bg-vellum-300'}`}
            title="Presenter Notes & Cues (T)"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-lg text-ink bg-vellum-200/80 hover:bg-vellum-300 transition-colors hidden sm:block"
            title="Toggle Fullscreen (F)"
          >
            <Maximize className="w-4 h-4" />
          </button>

          {/* Cinema Projection Toggle */}
          <button
            onClick={onToggleCinema}
            className={`p-2 rounded-lg transition-colors hidden sm:block ${isCinemaMode ? 'bg-terracotta text-white' : 'bg-vellum-200/80 text-ink hover:bg-vellum-300'}`}
            title="Toggle Cinema Mode (C)"
          >
            <Film className="w-4 h-4" />
          </button>

          {/* Prev / Next Navigation */}
          <div className="flex items-center gap-1 ml-1 border-l border-vellum-300 pl-2">
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-lg bg-vellum-200 text-ink hover:bg-vellum-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Previous Beat (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              disabled={currentIndex === totalStops - 1}
              className="p-2 rounded-lg bg-ink text-vellum-100 hover:bg-ink-light disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              title="Next Beat (Space / Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Hotkey Legend */}
      {!isCinemaMode && (
        <div className="mt-2 text-center">
          <span className="text-[11px] text-ink-muted/80 bg-vellum-100/70 backdrop-blur-sm px-3 py-1 rounded-full border border-vellum-300/40 font-mono">
            <kbd className="font-semibold">Space</kbd> / <kbd className="font-semibold">→</kbd> Next · <kbd className="font-semibold">←</kbd> Prev · <kbd className="font-semibold">T</kbd> Notes · <kbd className="font-semibold">C</kbd> Cinema · <kbd className="font-semibold">M</kbd> Free Explore
          </span>
        </div>
      )}
    </div>
  );
}
