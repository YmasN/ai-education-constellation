import React, { useRef, useEffect, useState } from 'react';
import NodeCard from './NodeCard';
import { soundEngine } from '../utils/soundEngine';

export default function ConstellationCanvas({
  data,
  camera,
  isExploreMode,
  activeStop,
  onNodeClick,
  onManualPanZoom,
  onHubClick,
  onEnterConstellation
}) {
  const containerRef = useRef(null);
  
  // Smooth camera state with interpolation
  const [camState, setCamState] = useState({
    x: camera.x,
    y: camera.y,
    zoom: camera.zoom,
    tiltX: 0,
    tiltY: 0
  });

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const camStartRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const prevCameraRef = useRef(camera);

  // Determine if prologue mode is active
  const isPrologueActive = activeStop?.isPrologue || 
    (!isExploreMode && activeStop?.stepNumber === 0) || 
    (isExploreMode && camState.zoom < 0.52 && Math.hypot(camState.x, camState.y) < 180);

  // Play cinematic swoop when camera changes significantly in Keynote mode
  useEffect(() => {
    const prev = prevCameraRef.current;
    const dist = Math.hypot(camera.x - prev.x, camera.y - prev.y);
    if (dist > 120) {
      soundEngine.playCameraSwoop();
    }
    prevCameraRef.current = camera;
  }, [camera.x, camera.y]);

  // Smooth lerp towards target camera with subtle 3D cinematic tilt
  useEffect(() => {
    let currentX = camState.x;
    let currentY = camState.y;
    let currentZoom = camState.zoom;

    const animate = () => {
      const dx = camera.x - currentX;
      const dy = camera.y - currentY;
      const dz = camera.zoom - currentZoom;

      const targetTiltX = Math.max(Math.min(-dy * 0.008, 4), -4);
      const targetTiltY = Math.max(Math.min(dx * 0.008, 5), -5);

      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2 && Math.abs(dz) < 0.001) {
        currentX = camera.x;
        currentY = camera.y;
        currentZoom = camera.zoom;
        setCamState({
          x: currentX,
          y: currentY,
          zoom: currentZoom,
          tiltX: 0,
          tiltY: 0
        });
      } else {
        currentX += dx * 0.085;
        currentY += dy * 0.085;
        currentZoom += dz * 0.085;
        setCamState(prev => ({
          x: currentX,
          y: currentY,
          zoom: currentZoom,
          tiltX: prev.tiltX + (targetTiltX - prev.tiltX) * 0.1,
          tiltY: prev.tiltY + (targetTiltY - prev.tiltY) * 0.1
        }));
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [camera.x, camera.y, camera.zoom]);

  // Mouse Drag to Pan
  const handleMouseDown = (e) => {
    if (e.target.closest('.group') || e.target.closest('button')) return;
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    camStartRef.current = { x: camera.x, y: camera.y };
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = (e.clientX - dragStartRef.current.x) / camState.zoom;
    const dy = (e.clientY - dragStartRef.current.y) / camState.zoom;
    onManualPanZoom({
      x: camStartRef.current.x - dx,
      y: camStartRef.current.y - dy,
      zoom: camera.zoom
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Cursor-anchored focal zoom via wheel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const screenX = e.clientX - centerX;
      const screenY = e.clientY - centerY;

      const currentZoom = camera.zoom;
      const zoomFactor = e.deltaY > 0 ? 0.90 : 1.11;
      const newZoom = Math.min(Math.max(currentZoom * zoomFactor, 0.35), 3.0);

      if (Math.abs(newZoom - currentZoom) < 0.0001) return;

      const worldX = camera.x + screenX / currentZoom;
      const worldY = camera.y + screenY / currentZoom;

      const newCamX = worldX - screenX / newZoom;
      const newCamY = worldY - screenY / newZoom;

      onManualPanZoom({
        x: newCamX,
        y: newCamY,
        zoom: newZoom
      });
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [camera.x, camera.y, camera.zoom, onManualPanZoom]);

  // Touch Support
  const touchStartRef = useRef({ x: 0, y: 0 });
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      camStartRef.current = { x: camera.x, y: camera.y };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const dx = (e.touches[0].clientX - touchStartRef.current.x) / camState.zoom;
    const dy = (e.touches[0].clientY - touchStartRef.current.y) / camState.zoom;
    onManualPanZoom({
      x: camStartRef.current.x - dx,
      y: camStartRef.current.y - dy,
      zoom: camera.zoom
    });
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const currentActiveHub = data.hubs.find(h => h.id === activeStop?.hubId) || data.hubs[0];

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ perspective: '1200px' }}
      className="relative w-full h-full overflow-hidden paper-pattern cursor-grab active:cursor-grabbing select-none"
    >
      {/* Cinematic Vignette Shadow Overlay */}
      <div className="absolute inset-0 pointer-events-none z-30 shadow-[inset_0_0_140px_rgba(27,25,23,0.18)]" />

      {/* Floating Stardust Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
        <svg className="w-full h-full">
          <circle cx="12%" cy="18%" r="1.5" fill="#C25E3E" opacity="0.6" className="animate-pulse" />
          <circle cx="28%" cy="75%" r="2.0" fill="#4A6B53" opacity="0.5" />
          <circle cx="82%" cy="22%" r="1.5" fill="#2C3E6B" opacity="0.6" className="animate-pulse" />
          <circle cx="75%" cy="80%" r="2.2" fill="#B8860B" opacity="0.6" />
          <circle cx="48%" cy="15%" r="1.2" fill="#1B1917" opacity="0.4" />
          <circle cx="52%" cy="88%" r="1.8" fill="#C25E3E" opacity="0.5" className="animate-pulse" />
        </svg>
      </div>

      {/* Transform Container with 3D Cinematic Camera */}
      <div
        className="absolute w-0 h-0 will-change-transform transition-transform"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate3d(${-camState.x * camState.zoom}px, ${-camState.y * camState.zoom}px, 0) scale(${camState.zoom}) rotateX(${camState.tiltX}deg) rotateY(${camState.tiltY}deg)`,
          transformOrigin: '0 0'
        }}
      >
        
        {/* ============================================================== */}
        {/* PROLOGUE STAGE: "Let's keep thinking." Hero Opener             */}
        {/* ============================================================== */}
        <div
          style={{ left: '0px', top: '0px', transform: 'translate(-50%, -50%)' }}
          className={`absolute flex flex-col items-center justify-center text-center transition-all duration-1000 select-none z-40 max-w-4xl px-6
            ${isPrologueActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-125 pointer-events-none'}
          `}
        >
          <span className="text-xs uppercase font-mono tracking-widest text-terracotta mb-6 font-semibold px-4 py-1.5 rounded-full bg-vellum-200/90 border border-vellum-300 shadow-sm">
            Higher Education Keynote
          </span>
          <h1 className="font-editorial text-6xl sm:text-8xl md:text-9xl font-light text-ink tracking-tight leading-none">
            Let's keep <span className="italic font-normal text-terracotta">thinking.</span>
          </h1>
          <p className="font-editorial text-xl sm:text-2xl text-ink-muted mt-6 max-w-xl italic leading-relaxed">
            Cultivating natural intelligence across education, science, and living.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              onClick={onEnterConstellation}
              className="px-7 py-3.5 rounded-2xl bg-ink text-vellum-100 font-sans text-sm font-semibold hover:bg-ink-light shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group"
            >
              <span>Enter the Constellation</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-mono">→</span>
            </button>
            <span className="text-[11px] font-mono text-ink-muted">
              Scroll mouse wheel to zoom in · Or press Space to advance
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CONSTELLATION REVEAL CONTAINER (Fades in when zooming in)        */}
        {/* ============================================================== */}
        <div className={`transition-all duration-1000 ${isPrologueActive ? 'opacity-0 scale-90 pointer-events-none filter blur-[2px]' : 'opacity-100 scale-100 pointer-events-auto'}`}>
          
          {/* Volumetric Radiant Nebula Behind Active Hub */}
          {currentActiveHub && !isPrologueActive && (
            <div
              className="absolute rounded-full pointer-events-none blur-3xl transition-all duration-1000 ease-out z-0"
              style={{
                left: `${currentActiveHub.x}px`,
                top: `${currentActiveHub.y}px`,
                transform: 'translate(-50%, -50%)',
                width: '680px',
                height: '680px',
                background: `radial-gradient(circle, ${currentActiveHub.accentGlow} 0%, rgba(251,249,245,0) 70%)`
              }}
            />
          )}

          {/* Bookend Background Typography (Anthropic Signature) */}
          <div
            className="absolute font-editorial text-[180px] font-normal text-ink/10 select-none pointer-events-none tracking-tighter"
            style={{ left: '-1380px', top: '-860px' }}
          >
            Keep
          </div>
          <div
            className="absolute font-editorial text-[200px] font-normal text-ink/10 select-none pointer-events-none tracking-tighter"
            style={{ left: '680px', top: '820px' }}
          >
            thinking.
          </div>

          {/* SVG Connective Constellation Web */}
          <svg
            className="absolute overflow-visible pointer-events-none z-10"
            style={{ left: 0, top: 0 }}
          >
            {/* Inter-hub structural web lines */}
            <path d="M 0 -60 L -640 -420" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
            <path d="M 0 -60 L 640 -420" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
            <path d="M 0 -60 L -660 400" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
            <path d="M 0 -60 L 660 400" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
            <path d="M 0 -60 L 0 740" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />

            {/* Bezier Spoke Lines to Satellite Nodes */}
            {data.nodes.map((node) => {
              const hub = data.hubs.find((h) => h.id === node.hubId);
              if (!hub) return null;
              
              const midX = (hub.x + node.x) / 2;
              const midY = (hub.y + node.y) / 2 - 15;

              const isCurrentStopNode = activeStop?.activeNodeIds?.includes(node.id);

              return (
                <g key={`path-${node.id}`}>
                  <path
                    d={`M ${hub.x} ${hub.y} Q ${midX} ${midY} ${node.x} ${node.y}`}
                    stroke={isCurrentStopNode ? hub.color : 'rgba(120, 113, 108, 0.25)'}
                    strokeWidth={isCurrentStopNode ? '2' : '1.2'}
                    className={isCurrentStopNode ? 'pulse-line' : ''}
                    fill="none"
                  />
                  <circle cx={node.x} cy={node.y} r="3" fill={hub.color} opacity={isCurrentStopNode ? 0.9 : 0.4} />
                </g>
              );
            })}
          </svg>

          {/* Central & Thematic Question Hubs */}
          {data.hubs.map((hub) => {
            const isActiveHub = activeStop?.hubId === hub.id;
            return (
              <div
                key={hub.id}
                onClick={() => onHubClick(hub)}
                style={{
                  left: `${hub.x}px`,
                  top: `${hub.y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute cursor-pointer text-center select-none transition-all duration-700 z-15
                  ${isActiveHub ? 'scale-105 opacity-100' : 'opacity-70 hover:opacity-100 hover:scale-102'}
                `}
              >
                <div className="max-w-md px-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest font-semibold text-ink-muted">
                    {hub.category}
                  </span>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-ink tracking-tight mt-1 leading-snug hover:text-terracotta transition-colors">
                    {hub.question}
                  </h3>

                  <p className="text-xs text-ink-muted mt-2 leading-relaxed font-sans max-w-sm mx-auto">
                    {hub.thesis}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Satellite Node Cards */}
          {data.nodes.map((node) => {
            const isHighlighted = activeStop?.activeNodeIds?.includes(node.id);
            const isFaded = !isExploreMode && activeStop?.activeNodeIds?.length > 0 && !isHighlighted;

            return (
              <div
                key={node.id}
                className={`transition-all duration-500 ${isFaded ? 'opacity-25 filter blur-[0.6px]' : 'opacity-100'}`}
              >
                <NodeCard
                  node={node}
                  isHighlighted={isHighlighted}
                  onClick={onNodeClick}
                />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
