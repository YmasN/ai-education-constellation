import React from 'react';
import { Plus, Minus, RotateCcw, Compass, Presentation, Info } from 'lucide-react';

export default function CanvasControls({
  isExploreMode,
  onToggleMode,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onOpenOverview
}) {
  return (
    <>
      {/* Top Header & Mode Switcher */}
      <div className="fixed top-5 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
        
        {/* Title & Author Branding */}
        <div className="glass-panel px-4 py-2.5 rounded-2xl border border-vellum-400 pointer-events-auto flex items-center gap-3 shadow-md">
          <div className="w-2.5 h-2.5 rounded-full bg-terracotta animate-pulse" />
          <div>
            <h1 className="font-editorial text-base sm:text-lg font-bold text-ink leading-tight">
              Keep thinking.
            </h1>
            <p className="text-[10px] text-ink-muted hidden sm:block font-sans">
              Cultivating Natural Intelligence Across Education, Science & Living
            </p>
          </div>
        </div>

        {/* Mode Switcher Pill */}
        <div className="glass-panel p-1 rounded-2xl border border-vellum-400 pointer-events-auto shadow-md flex items-center gap-1">
          <button
            onClick={() => isExploreMode && onToggleMode()}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all
              ${!isExploreMode ? 'bg-ink text-vellum-100 shadow-sm' : 'text-ink-muted hover:text-ink'}
            `}
            title="Guided Keynote Mode (Space / Arrow Keys to advance)"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Guided Keynote</span>
          </button>

          <button
            onClick={() => !isExploreMode && onToggleMode()}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all
              ${isExploreMode ? 'bg-ink text-vellum-100 shadow-sm' : 'text-ink-muted hover:text-ink'}
            `}
            title="Free Explore Mode (Pan & Zoom freely)"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Free Explore</span>
          </button>
        </div>

      </div>

      {/* Bottom Left: Anthropic-style "Click a card to explore" pill */}
      <div className="fixed bottom-6 left-6 z-30 pointer-events-none hidden sm:block">
        <div className="glass-panel px-3.5 py-2 rounded-xl border border-vellum-400 pointer-events-auto text-xs text-ink-muted shadow-sm flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-terracotta" />
          <span>Click any card to read case studies & prompts</span>
        </div>
      </div>

      {/* Bottom Right: Floating Zoom Controls (Anthropic Style) */}
      <div className="fixed bottom-6 right-6 z-30 pointer-events-none">
        <div className="glass-panel p-1 rounded-2xl border border-vellum-400 pointer-events-auto shadow-lg flex items-center gap-1">
          <span className="text-[11px] text-ink-muted px-2 font-mono hidden sm:inline">Zoom</span>
          <button
            onClick={onZoomIn}
            className="p-2 rounded-xl text-ink hover:bg-vellum-300/80 transition-colors"
            title="Zoom In"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={onZoomOut}
            className="p-2 rounded-xl text-ink hover:bg-vellum-300/80 transition-colors"
            title="Zoom Out"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={onResetZoom}
            className="p-2 rounded-xl text-ink hover:bg-vellum-300/80 transition-colors"
            title="Reset Constellation View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
}
