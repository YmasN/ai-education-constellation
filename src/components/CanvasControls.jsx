import React, { useState } from 'react';
import { Plus, Minus, RotateCcw, Compass, Presentation, Volume2, VolumeX, Info, Film, LayoutGrid } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function CanvasControls({
  isExploreMode,
  isCinemaMode,
  onToggleMode,
  onToggleCinema,
  onOpenOverview,
  onZoomIn,
  onZoomOut,
  onResetZoom
}) {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const handleToggleAudio = () => {
    const nextState = !isAudioActive;
    const success = soundEngine.toggleAmbient(nextState);
    setIsAudioActive(success ? nextState : false);
  };

  return (
    <>
      {/* Top Header & Navigation Bar */}
      <div className={`fixed top-5 left-6 right-6 z-30 flex items-center justify-between pointer-events-none transition-opacity duration-500 ${isCinemaMode ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        
        {/* Title & Exhibition Branding */}
        <div className="glass-panel px-4 py-2.5 rounded-2xl border border-vellum-400/90 pointer-events-auto flex items-center gap-3 shadow-md">
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

        {/* Center/Right Control Cluster */}
        <div className="flex items-center gap-2 pointer-events-auto">
          
          {/* Constellation Navigator (Jump to any beat) */}
          <button
            onClick={onOpenOverview}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl glass-panel text-xs text-ink transition-all border border-vellum-400/80 shadow-md hover:bg-vellum-200/90"
            title="Jump to Any Beat / Q&A Navigator (O)"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-ink-muted" />
            <span className="hidden md:inline">Navigator</span>
          </button>

          {/* Ambient Soundscape Toggle */}
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl glass-panel text-xs font-mono transition-all border border-vellum-400/80 shadow-md
              ${isAudioActive ? 'bg-ink text-vellum-100' : 'text-ink-muted hover:text-ink'}
            `}
            title="Toggle Ethereal Ambient Atmosphere"
          >
            {isAudioActive ? <Volume2 className="w-3.5 h-3.5 text-terracotta" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isAudioActive ? 'Ambient: On' : 'Ambient: Off'}</span>
          </button>

          {/* Mode Switcher Pill */}
          <div className="glass-panel p-1 rounded-2xl border border-vellum-400/90 shadow-md flex items-center gap-1">
            <button
              onClick={() => isExploreMode && onToggleMode()}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all
                ${!isExploreMode ? 'bg-ink text-vellum-100 shadow-sm' : 'text-ink-muted hover:text-ink'}
              `}
              title="Guided Keynote Mode (Space / Arrows to advance)"
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

          {/* Cinema Stage Mode Toggle */}
          <button
            onClick={onToggleCinema}
            className={`p-2 rounded-2xl glass-panel text-xs transition-all border border-vellum-400/80 shadow-md hidden sm:block
              ${isCinemaMode ? 'bg-terracotta text-white' : 'text-ink-muted hover:text-ink'}
            `}
            title="Toggle Cinematic Projection Mode (C)"
          >
            <Film className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Bottom Left: Anthropic-style Callout */}
      <div className={`fixed bottom-6 left-6 z-30 pointer-events-none hidden sm:block transition-opacity duration-500 ${isCinemaMode ? 'opacity-0' : 'opacity-100'}`}>
        <div className="glass-panel px-3.5 py-2 rounded-xl border border-vellum-400/80 pointer-events-auto text-xs text-ink-muted shadow-sm flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-terracotta" />
          <span>Click any visual card to explore case studies & prompts</span>
        </div>
      </div>

      {/* Bottom Right: Floating Zoom Controls */}
      <div className={`fixed bottom-6 right-6 z-30 pointer-events-none transition-opacity duration-500 ${isCinemaMode ? 'opacity-0' : 'opacity-100'}`}>
        <div className="glass-panel p-1 rounded-2xl border border-vellum-400/80 pointer-events-auto shadow-lg flex items-center gap-1">
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
