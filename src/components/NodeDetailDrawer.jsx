import React, { useState } from 'react';
import { HelpCircle, X, Copy, Check, Quote, AlertTriangle, Lightbulb, BookOpen } from './Icons';
import VisualArtifact from './VisualArtifacts';

export default function NodeDetailDrawer({ node, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!node) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(node.facultyAction);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink/25 backdrop-blur-xs transition-opacity pointer-events-auto"
      />

      {/* Slide-Over Drawer */}
      <div className="relative w-full max-w-xl h-full bg-vellum-100/98 shadow-2xl border-l border-vellum-400/90 pointer-events-auto flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Visual Header Showcase Banner */}
        <div className="relative h-44 w-full bg-ink overflow-hidden shrink-0 border-b border-vellum-400 flex items-center justify-center">
          <div className="w-full h-full opacity-70">
            <VisualArtifact nodeId={node.id} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-vellum-100/98 via-transparent to-black/30 pointer-events-none" />

          {/* Close Button on Top-Right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-vellum-50/80 backdrop-blur-md text-ink hover:bg-vellum-50 shadow-md transition-colors pointer-events-auto"
            title="Close Drawer (Esc)"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Floating Category Pill */}
          <div className="absolute bottom-4 left-6">
            <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-vellum-50 text-ink shadow-sm border border-vellum-300">
              {node.tag}
            </span>
          </div>
        </div>

        {/* Drawer Body Header */}
        <div className="px-6 pt-4 pb-3 border-b border-vellum-300/80 bg-vellum-50/60">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-ink leading-tight">
            {node.title}
          </h2>
        </div>

        {/* Drawer Body Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Executive Summary */}
          <p className="text-base text-ink-light leading-relaxed font-sans">
            {node.summary}
          </p>

          {/* Memorable Soundbite */}
          {node.keyQuote && (
            <div className="relative p-4 rounded-xl bg-vellum-200/70 border-l-4 border-ink">
              <Quote className="w-5 h-5 text-ink-muted/40 absolute top-3 right-3" />
              <p className="font-editorial italic text-lg text-ink leading-snug">
                "{node.keyQuote}"
              </p>
            </div>
          )}

          {/* Real-World Case Study */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-ink flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-terracotta" />
              Real-World Higher-Ed Case Study
            </h3>
            <div className="p-4 rounded-xl bg-vellum-50 border border-vellum-300 text-sm text-ink-light leading-relaxed">
              {node.caseStudy}
            </div>
          </div>

          {/* Actionable Faculty Technique / Prompt */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-wider font-bold text-ink flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amberwarm" />
                Actionable Technique or Prompt for Faculty
              </h3>
              <button
                onClick={handleCopyPrompt}
                className="flex items-center gap-1 text-[11px] text-ink-muted hover:text-ink font-mono bg-vellum-200 px-2 py-1 rounded transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-sage" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-4 rounded-xl bg-amberwarm-light/40 border border-amberwarm/40 text-sm font-mono text-ink leading-relaxed">
              {node.facultyAction}
            </div>
          </div>

          {/* Ethical & Environmental Guardrail */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-ink flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-terracotta" />
              Ethical & Environmental Guardrail
            </h3>
            <div className="p-4 rounded-xl bg-terracotta-light/30 border border-terracotta/30 text-sm text-ink-light leading-relaxed">
              {node.ethicsOrEco}
            </div>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-vellum-300 bg-vellum-50/90 flex items-center justify-between text-xs text-ink-muted">
          <span>Press <kbd className="font-mono bg-vellum-200 px-1.5 py-0.5 rounded border border-vellum-300">Esc</kbd> to return to constellation</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-ink text-vellum-100 hover:bg-ink-light text-xs font-semibold transition-colors"
          >
            Back to Canvas
          </button>
        </div>

      </div>
    </div>
  );
}
