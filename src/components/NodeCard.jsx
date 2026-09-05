import React from 'react';
import * as Icons from 'lucide-react';

export default function NodeCard({ node, isHighlighted, onClick }) {
  // Dynamically resolve icon from lucide-react with fallback
  const IconComponent = Icons[node.icon] || Icons.HelpCircle;

  return (
    <div
      onClick={() => onClick(node)}
      style={{
        left: `${node.x}px`,
        top: `${node.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
      className={`absolute cursor-pointer transition-all duration-300 group z-20 select-none
        ${isHighlighted ? 'scale-105 ring-2 ring-ink ring-offset-2 ring-offset-vellum-100 shadow-xl' : 'hover:scale-102 shadow-md hover:shadow-lg'}
      `}
    >
      <div className="w-56 bg-vellum-50/95 backdrop-blur-sm rounded-lg border border-vellum-400/80 p-3.5 transition-colors group-hover:border-ink/60 group-hover:bg-vellum-50">
        <div className="flex items-center justify-between mb-2">
          <div className="w-7 h-7 rounded-md bg-vellum-200/90 flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-vellum-100 transition-colors">
            <IconComponent className="w-4 h-4" />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-vellum-200 text-ink-muted">
            {node.tag}
          </span>
        </div>

        <h4 className="font-editorial text-base font-semibold text-ink leading-tight mb-1 group-hover:text-terracotta transition-colors">
          {node.title}
        </h4>

        <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed font-sans">
          {node.summary}
        </p>

        <div className="mt-2.5 pt-2 border-t border-vellum-300/60 flex items-center justify-between text-[11px] text-ink-muted group-hover:text-ink">
          <span>Read case study</span>
          <span className="font-mono transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
}
