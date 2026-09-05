import React, { useRef, useEffect, useState, useCallback } from 'react';
import NodeCard from './NodeCard';

export default function ConstellationCanvas({
  data,
  camera,
  isExploreMode,
  activeStop,
  onNodeClick,
  onManualPanZoom,
  onHubClick
}) {
  const containerRef = useRef(null);
  
  // Smooth camera state with interpolation
  const [camState, setCamState] = useState({
    x: camera.x,
    y: camera.y,
    zoom: camera.zoom
  });

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const camStartRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);

  // Smooth lerp towards target camera
  useEffect(() => {
    let currentX = camState.x;
    let currentY = camState.y;
    let currentZoom = camState.zoom;

    const animate = () => {
      const dx = camera.x - currentX;
      const dy = camera.y - currentY;
      const dz = camera.zoom - currentZoom;

      // When difference is small, snap to target
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2 && Math.abs(dz) < 0.001) {
        currentX = camera.x;
        currentY = camera.y;
        currentZoom = camera.zoom;
        setCamState({ x: currentX, y: currentY, zoom: currentZoom });
      } else {
        currentX += dx * 0.09;
        currentY += dy * 0.09;
        currentZoom += dz * 0.09;
        setCamState({ x: currentX, y: currentY, zoom: currentZoom });
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
    // Only allow pan on canvas background
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

      // Mouse offset relative to viewport center
      const screenX = e.clientX - centerX;
      const screenY = e.clientY - centerY;

      const currentZoom = camera.zoom;
      // Smooth geometric zoom step
      const zoomFactor = e.deltaY > 0 ? 0.90 : 1.11;
      const newZoom = Math.min(Math.max(currentZoom * zoomFactor, 0.35), 3.0);

      if (Math.abs(newZoom - currentZoom) < 0.0001) return;

      // Calculate world coordinates currently directly under the mouse pointer
      const worldX = camera.x + screenX / currentZoom;
      const worldY = camera.y + screenY / currentZoom;

      // Recalculate camera position so the world point remains stationary under cursor
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

  // Touch Support for mobile/tablets
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

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-full overflow-hidden paper-pattern cursor-grab active:cursor-grabbing select-none"
    >
      {/* Background Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full">
          <circle cx="15%" cy="20%" r="2.5" fill="#C25E3E" opacity="0.3" className="animate-pulse" />
          <circle cx="85%" cy="15%" r="3" fill="#4A6B53" opacity="0.3" className="animate-pulse" />
          <circle cx="10%" cy="80%" r="2" fill="#2C3E6B" opacity="0.3" />
          <circle cx="90%" cy="75%" r="2.5" fill="#B8860B" opacity="0.3" className="animate-pulse" />
          <circle cx="50%" cy="10%" r="1.5" fill="#1B1917" opacity="0.2" />
          <circle cx="48%" cy="92%" r="2" fill="#C25E3E" opacity="0.3" />
        </svg>
      </div>

      {/* Transform Container */}
      <div
        className="absolute w-0 h-0 will-change-transform"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate3d(${-camState.x * camState.zoom}px, ${-camState.y * camState.zoom}px, 0) scale(${camState.zoom})`,
          transformOrigin: '0 0'
        }}
      >
        {/* Giant Editorial Bookend Typography (Anthropic Aesthetic) */}
        <div
          className="absolute font-editorial text-[160px] font-light text-ink/10 select-none pointer-events-none tracking-tighter"
          style={{ left: '-1350px', top: '-850px' }}
        >
          Keep
        </div>
        <div
          className="absolute font-editorial text-[170px] font-light text-ink/10 select-none pointer-events-none tracking-tighter"
          style={{ left: '720px', top: '780px' }}
        >
          thinking.
        </div>

        {/* SVG Connector Web */}
        <svg
          className="absolute overflow-visible pointer-events-none"
          style={{ left: 0, top: 0 }}
        >
          <defs>
            <linearGradient id="grad-warm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C25E3E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4A6B53" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="grad-cool" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2C3E6B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Inter-hub structural web lines */}
          <path d="M 0 -60 L -620 -420" stroke="rgba(120, 113, 108, 0.25)" strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
          <path d="M 0 -60 L 620 -420" stroke="rgba(120, 113, 108, 0.25)" strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
          <path d="M 0 -60 L -650 380" stroke="rgba(120, 113, 108, 0.25)" strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
          <path d="M 0 -60 L 650 380" stroke="rgba(120, 113, 108, 0.25)" strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
          <path d="M 0 -60 L 0 720" stroke="rgba(120, 113, 108, 0.25)" strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
          <path d="M -620 -420 L 620 -420" stroke="rgba(120, 113, 108, 0.15)" strokeWidth="1" strokeDasharray="2 4" fill="none" />
          <path d="M -650 380 L 650 380" stroke="rgba(120, 113, 108, 0.15)" strokeWidth="1" strokeDasharray="2 4" fill="none" />

          {/* Hub to Satellite Nodes Connecting Curves */}
          {data.nodes.map((node) => {
            const hub = data.hubs.find((h) => h.id === node.hubId);
            if (!hub) return null;
            
            // Calculate bezier control points for organic curvature
            const midX = (hub.x + node.x) / 2;
            const midY = (hub.y + node.y) / 2 - 20;

            const isCurrentStopNode = activeStop?.activeNodeIds?.includes(node.id);

            return (
              <g key={`path-${node.id}`}>
                <path
                  d={`M ${hub.x} ${hub.y} Q ${midX} ${midY} ${node.x} ${node.y}`}
                  stroke={isCurrentStopNode ? hub.color : 'rgba(120, 113, 108, 0.3)'}
                  strokeWidth={isCurrentStopNode ? '2' : '1.2'}
                  className={isCurrentStopNode ? 'pulse-line' : ''}
                  fill="none"
                />
                <circle cx={node.x} cy={node.y} r="3" fill={hub.color} opacity="0.6" />
              </g>
            );
          })}
        </svg>

        {/* Central & Thematic Hubs */}
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
              className={`absolute cursor-pointer text-center select-none transition-all duration-500 z-10
                ${isActiveHub ? 'opacity-100 scale-105' : 'opacity-85 hover:opacity-100 hover:scale-102'}
              `}
            >
              <div className="relative inline-flex flex-col items-center max-w-sm">
                {/* Glow ring */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-3 transition-transform duration-500 shadow-md"
                  style={{
                    backgroundColor: hub.accentBg,
                    border: `1.5px solid ${hub.color}`,
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full animate-ping opacity-40"
                    style={{ backgroundColor: hub.color }}
                  />
                  <div
                    className="w-3 h-3 rounded-full absolute"
                    style={{ backgroundColor: hub.color }}
                  />
                </div>

                <h3 className="font-editorial text-2xl font-semibold text-ink tracking-tight hover:text-terracotta transition-colors">
                  {hub.title}
                </h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed font-sans px-4">
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
              className={`transition-opacity duration-500 ${isFaded ? 'opacity-30' : 'opacity-100'}`}
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
  );
}
