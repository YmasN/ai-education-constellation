import React from 'react';
import VisualArtifact from './VisualArtifacts';
import { soundEngine } from '../utils/soundEngine';

export default function NodeCard({ node, isHighlighted, onClick }) {
  const handleClick = () => {
    soundEngine.playNodeChime();
    onClick(node);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        left: `${node.x}px`,
        top: `${node.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
      className={`absolute cursor-pointer transition-all duration-500 group z-20 select-none
        ${isHighlighted ? 'scale-110 z-30' : 'hover:scale-105 hover:z-30'}
      `}
    >
      <div className="flex flex-col items-center w-52 text-center transition-all duration-300">
        {/* Artistic Thumbnail Frame (Anthropic Style) */}
        <div className={`relative w-26 h-26 w-[104px] h-[104px] rounded-2xl overflow-hidden shadow-md border-2 transition-all duration-500 bg-vellum-50
          ${isHighlighted 
            ? 'ring-4 ring-ink/20 border-ink shadow-2xl scale-105' 
            : 'border-vellum-400 group-hover:border-ink group-hover:shadow-xl'
          }
        `}>
          <VisualArtifact nodeId={node.id} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          
          {/* Subtle vignette gloss */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Active pulse glow */}
          {isHighlighted && (
            <div className="absolute inset-0 ring-2 ring-inset ring-vellum-100/50 animate-pulse pointer-events-none" />
          )}
        </div>

        {/* Floating Label & Badge */}
        <div className="mt-2 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full bg-vellum-200/90 text-ink-muted group-hover:bg-ink group-hover:text-vellum-100 transition-colors">
            {node.tag}
          </span>
          <h4 className="font-editorial text-sm font-semibold text-ink leading-tight mt-1.5 group-hover:text-terracotta transition-colors line-clamp-1 max-w-full">
            {node.title}
          </h4>
        </div>

        {/* Hover quick preview pill */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-10 bg-vellum-50/95 backdrop-blur-md px-3 py-1 rounded-full border border-vellum-400/80 shadow-lg text-[10px] text-ink whitespace-nowrap pointer-events-none z-40">
          Click to read deep dive →
        </div>
      </div>
    </div>
  );
}
