import React, { useState, useEffect, useCallback } from 'react';
import { presentationData } from './data/presentationData';
import ConstellationCanvas from './components/ConstellationCanvas';
import KeynoteHUD from './components/KeynoteHUD';
import PresenterNotes from './components/PresenterNotes';
import NodeDetailDrawer from './components/NodeDetailDrawer';
import CanvasControls from './components/CanvasControls';

export default function App() {
  const [isExploreMode, setIsExploreMode] = useState(false);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showPresenterNotes, setShowPresenterNotes] = useState(false);
  
  // Timer State for 10-minute talk
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const activeStop = presentationData.keynoteStops[currentStepIndex];
  const nextStop = presentationData.keynoteStops[currentStepIndex + 1] || null;

  // Active Camera State
  const [camera, setCamera] = useState({
    x: activeStop.camera.x,
    y: activeStop.camera.y,
    zoom: activeStop.camera.zoom
  });

  // Keep camera synced with keynote stops when in Keynote mode
  useEffect(() => {
    if (!isExploreMode) {
      setCamera({
        x: activeStop.camera.x,
        y: activeStop.camera.y,
        zoom: activeStop.camera.zoom
      });
    }
  }, [currentStepIndex, isExploreMode, activeStop]);

  // Timer Tick
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Keynote Next / Prev Handlers
  const handleNext = useCallback(() => {
    if (currentStepIndex < presentationData.keynoteStops.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  }, [currentStepIndex]);

  const handlePrev = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  }, [currentStepIndex]);

  // Mode Toggles
  const handleToggleMode = () => {
    setIsExploreMode((prev) => {
      const nextMode = !prev;
      if (!nextMode) {
        setCamera({
          x: activeStop.camera.x,
          y: activeStop.camera.y,
          zoom: activeStop.camera.zoom
        });
      }
      return nextMode;
    });
  };

  const handleToggleCinema = () => {
    setIsCinemaMode((prev) => !prev);
  };

  // Fullscreen
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Zoom Helpers
  const handleZoomIn = () => {
    setCamera((prev) => ({ ...prev, zoom: Math.min(prev.zoom * 1.25, 2.5) }));
  };

  const handleZoomOut = () => {
    setCamera((prev) => ({ ...prev, zoom: Math.max(prev.zoom * 0.8, 0.35) }));
  };

  const handleResetZoom = () => {
    setCamera({
      x: 0,
      y: 80,
      zoom: 0.58
    });
  };

  // Hub Click: center camera on hub
  const handleHubClick = (hub) => {
    setCamera({
      x: hub.x,
      y: hub.y,
      zoom: 1.1
    });
  };

  // Keyboard navigation & hotkeys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.code) {
        case 'Space':
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          if (!isExploreMode) handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          if (!isExploreMode) handlePrev();
          break;
        case 'KeyT':
          e.preventDefault();
          setShowPresenterNotes((prev) => !prev);
          break;
        case 'KeyC':
          e.preventDefault();
          handleToggleCinema();
          break;
        case 'KeyF':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'KeyM':
          e.preventDefault();
          handleToggleMode();
          break;
        case 'Escape':
          setSelectedNode(null);
          setShowPresenterNotes(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isExploreMode]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-vellum-100 text-ink select-none font-sans">
      
      {/* Top Header & Floating Controls */}
      <CanvasControls
        isExploreMode={isExploreMode}
        isCinemaMode={isCinemaMode}
        onToggleMode={handleToggleMode}
        onToggleCinema={handleToggleCinema}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
      />

      {/* Main Interactive Constellation Canvas */}
      <ConstellationCanvas
        data={presentationData}
        camera={camera}
        isExploreMode={isExploreMode}
        activeStop={activeStop}
        onNodeClick={(node) => setSelectedNode(node)}
        onManualPanZoom={(newCam) => setCamera(newCam)}
        onHubClick={handleHubClick}
      />

      {/* Keynote Navigation HUD (Visible in Guided Mode) */}
      {!isExploreMode && (
        <KeynoteHUD
          activeStop={activeStop}
          currentIndex={currentStepIndex}
          totalStops={presentationData.keynoteStops.length}
          elapsedSeconds={elapsedSeconds}
          isTimerRunning={isTimerRunning}
          isCinemaMode={isCinemaMode}
          showPresenterNotes={showPresenterNotes}
          onPrev={handlePrev}
          onNext={handleNext}
          onToggleNotes={() => setShowPresenterNotes((prev) => !prev)}
          onToggleFullscreen={handleToggleFullscreen}
          onToggleCinema={handleToggleCinema}
        />
      )}

      {/* Presenter Cue Card & Timer Drawer (Hotkey: 'T') */}
      {showPresenterNotes && (
        <PresenterNotes
          activeStop={activeStop}
          nextStop={nextStop}
          elapsedSeconds={elapsedSeconds}
          isTimerRunning={isTimerRunning}
          onToggleTimer={() => setIsTimerRunning((prev) => !prev)}
          onResetTimer={() => setElapsedSeconds(0)}
          onClose={() => setShowPresenterNotes(false)}
        />
      )}

      {/* Slide-Over Deep-Dive Case Study Reader */}
      {selectedNode && (
        <NodeDetailDrawer
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
        />
      )}

    </main>
  );
}
