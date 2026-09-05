import React from 'react';

export default function VisualArtifact({ nodeId, className = "w-full h-full" }) {
  switch (nodeId) {
    // 1. Detection Fallacy: Optical Prism & Algorithmic Fingerprint
    case 'node-detection-trap':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#2D1B16" />
          <path d="M20 80 L50 20 L80 80 Z" stroke="#A51C30" strokeWidth="2.5" />
          <path d="M50 20 L75 80" stroke="#E07A5F" strokeWidth="1.2" strokeDasharray="2 3" />
          <circle cx="50" cy="55" r="18" stroke="#F4F1DE" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="10" y1="50" x2="50" y2="50" stroke="#F4F1DE" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="90" y2="35" stroke="#E07A5F" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="92" y2="50" stroke="#F2CC8F" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="88" y2="65" stroke="#81B29A" strokeWidth="1.5" />
        </svg>
      );

    // 2. Authentic Assessment: Classical Agora Archway & Socratic Dialogue
    case 'node-authentic-assessment':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#1C2120" />
          <path d="M25 90 L25 35 Q50 15 75 35 L75 90" stroke="#D8C3A5" strokeWidth="2" />
          <path d="M35 90 L35 40 Q50 25 65 40 L65 90" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="12" stroke="#E98074" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="4" fill="#E98074" />
          <line x1="15" y1="90" x2="85" y2="90" stroke="#D8C3A5" strokeWidth="3" />
          <line x1="20" y1="25" x2="80" y2="25" stroke="#D8C3A5" strokeWidth="1" />
        </svg>
      );

    // 3. Reclaim Office Hours: Circadian Orbit & Hourglass
    case 'node-reclaim-time':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#221C18" />
          <circle cx="50" cy="50" r="36" stroke="#8D6E63" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="22" stroke="#D7CCC8" strokeWidth="1.5" />
          <path d="M36 30 L64 30 L50 50 L64 70 L36 70 L50 50 Z" stroke="#FFAB91" strokeWidth="1.5" fill="#FFAB91" fillOpacity="0.15" />
          <circle cx="50" cy="62" r="3" fill="#FF7043" />
          <line x1="50" y1="14" x2="50" y2="24" stroke="#FF7043" strokeWidth="2" />
        </svg>
      );

    // Institutional Data Sovereignty: Cryptographic Citadel & Shield
    case 'node-data-sovereignty':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#181518" />
          {/* Shield / Citadel Arch */}
          <path d="M50 16 L78 28 V52 C78 70 50 84 50 84 C50 84 22 70 22 52 V28 Z" stroke="#A51C30" strokeWidth="2.2" fill="#A51C30" fillOpacity="0.15" />
          <path d="M50 24 L70 34 V52 C70 64 50 75 50 75 C50 75 30 64 30 52 V34 Z" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" />
          {/* Central Keyhole / Vault Core */}
          <circle cx="50" cy="46" r="8" stroke="#FAF9F6" strokeWidth="1.5" />
          <path d="M47 52 L45 62 H55 L53 52 Z" fill="#FAF9F6" />
          <circle cx="50" cy="46" r="3" fill="#A51C30" />
          {/* Defensive Geometric Rays */}
          <line x1="50" y1="6" x2="50" y2="12" stroke="#FAF9F6" strokeWidth="1.5" />
          <line x1="16" y1="26" x2="20" y2="28" stroke="#FAF9F6" strokeWidth="1.2" />
          <line x1="84" y1="26" x2="80" y2="28" stroke="#FAF9F6" strokeWidth="1.2" />
        </svg>
      );

    // Staff & Administrator Empowerment: Compassionate Hands & Guiding Beacon
    case 'node-staff-empowerment':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#151E1C" />
          <path d="M22 75 C30 65 42 68 50 64 C58 68 70 65 78 75 L78 88 L22 88 Z" fill="#1D6363" fillOpacity="0.3" stroke="#1D6363" strokeWidth="1.5" />
          {/* Radiating beacon */}
          <circle cx="50" cy="40" r="14" stroke="#A51C30" strokeWidth="2" />
          <circle cx="50" cy="40" r="5" fill="#FAF9F6" />
          <line x1="50" y1="18" x2="50" y2="24" stroke="#FAF9F6" strokeWidth="1.5" />
          <line x1="28" y1="40" x2="34" y2="40" stroke="#FAF9F6" strokeWidth="1.5" />
          <line x1="66" y1="40" x2="72" y2="40" stroke="#FAF9F6" strokeWidth="1.5" />
          <line x1="35" y1="25" x2="39" y2="29" stroke="#D4AF37" strokeWidth="1.2" />
          <line x1="65" y1="25" x2="61" y2="29" stroke="#D4AF37" strokeWidth="1.2" />
          <path d="M36 54 L50 64 L64 54" stroke="#FAF9F6" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      );

    // End-to-End Lifecycle Automation: Orbital Journey & Interlocking Nexus
    case 'node-lifecycle-automation':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#18171B" />
          {/* Orbital path */}
          <ellipse cx="50" cy="50" rx="34" ry="24" transform="rotate(-25 50 50)" stroke="#A51C30" strokeWidth="1.8" strokeDasharray="3 3" />
          <ellipse cx="50" cy="50" rx="24" ry="34" transform="rotate(-25 50 50)" stroke="#1D6363" strokeWidth="1.4" />
          {/* Lifecycle nexus milestones */}
          <circle cx="26" cy="38" r="4.5" fill="#FAF9F6" stroke="#A51C30" strokeWidth="1.5" />
          <circle cx="68" cy="28" r="4.5" fill="#D4AF37" stroke="#A51C30" strokeWidth="1.5" />
          <circle cx="74" cy="62" r="4.5" fill="#FAF9F6" stroke="#1D6363" strokeWidth="1.5" />
          <circle cx="32" cy="72" r="4.5" fill="#A51C30" stroke="#FAF9F6" strokeWidth="1.5" />
          {/* Central gear core */}
          <circle cx="50" cy="50" r="8" stroke="#FAF9F6" strokeWidth="1.2" />
          <circle cx="50" cy="50" r="3" fill="#D4AF37" />
        </svg>
      );

    // 4. Socratic Partner: Golden Spiral & Luminous Nautilus
    case 'node-socratic-mentor':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#17221A" />
          <path d="M50 50 A 5 5 0 0 1 55 55 A 10 10 0 0 1 45 65 A 20 20 0 0 1 25 45 A 35 35 0 0 1 60 10 A 50 50 0 0 1 95 60" stroke="#81C784" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="3" fill="#C8E6C9" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="#4CAF50" strokeWidth="0.8" strokeDasharray="2 4" />
          <line x1="20" y1="80" x2="80" y2="20" stroke="#4CAF50" strokeWidth="0.8" strokeDasharray="2 4" />
        </svg>
      );

    // 5. Neurodiversity: Synapse Connectome & Chromatic Spectrum
    case 'node-neurodiversity':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#131C24" />
          <circle cx="50" cy="50" r="35" stroke="#4DD0E1" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M25 45 Q 40 20 65 30 T 75 65 T 35 75 Z" stroke="#80CBC4" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="4" fill="#FF8A65" />
          <circle cx="65" cy="30" r="5" fill="#4DD0E1" />
          <circle cx="75" cy="65" r="4" fill="#BA68C8" />
          <circle cx="35" cy="70" r="5" fill="#AED581" />
          <line x1="35" y1="35" x2="65" y2="30" stroke="#FFF" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="65" y1="30" x2="75" y2="65" stroke="#FFF" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="75" y1="65" x2="35" y2="70" stroke="#FFF" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="35" y1="70" x2="35" y2="35" stroke="#FFF" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      );

    // 6. First-Gen Equalizer: Classical Pedestal & Navigational Compass
    case 'node-first-gen':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#1E231F" />
          <path d="M50 15 L55 42 L82 50 L55 58 L50 85 L45 58 L18 50 L45 42 Z" fill="#A5D6A7" fillOpacity="0.2" stroke="#81C784" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="32" stroke="#A5D6A7" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="3" fill="#FFF" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#C8E6C9" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#C8E6C9" strokeWidth="0.8" strokeOpacity="0.5" />
        </svg>
      );

    // 7. AlphaFold: 3D Protein Helix & Molecular Ribbon
    case 'node-alphafold':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#10192E" />
          <path d="M20 30 Q 35 10 50 30 T 80 30 T 50 70 T 20 70" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round" />
          <path d="M20 70 Q 35 90 50 70 T 80 70 T 50 30 T 20 30" stroke="#42A5F5" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="2 3" />
          <circle cx="35" cy="20" r="4" fill="#E57373" />
          <circle cx="65" cy="30" r="4" fill="#81C784" />
          <circle cx="50" cy="50" r="5" fill="#FFF" />
          <circle cx="35" cy="80" r="4" fill="#FFD54F" />
          <circle cx="65" cy="70" r="4" fill="#BA68C8" />
        </svg>
      );

    // 8. Robotic Pipetting: Automated Wet-Lab Actuator
    case 'node-robotic-pipetting':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#0E1724" />
          <path d="M20 20 L50 20 L50 55 L45 75 L55 75 L50 55" stroke="#90CAF9" strokeWidth="2" />
          <line x1="30" y1="15" x2="30" y2="85" stroke="#546E7A" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="70" y1="15" x2="70" y2="85" stroke="#546E7A" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="85" r="3" fill="#64B5F6" className="animate-ping" />
          <circle cx="50" cy="85" r="2.5" fill="#FFF" />
          <rect x="25" y="88" width="50" height="4" rx="2" fill="#37474F" />
        </svg>
      );

    // 9. Battery Materials: Crystalline Lattice & Quantum Bonds
    case 'node-materials-battery':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#141E28" />
          <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="#80DEEA" strokeWidth="1.5" />
          <polygon points="50,30 70,42 70,58 50,70 30,58 30,42" stroke="#4DD0E1" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="5" fill="#FFB74D" />
          <line x1="50" y1="15" x2="50" y2="30" stroke="#80DEEA" strokeWidth="1" />
          <line x1="80" y1="32" x2="70" y2="42" stroke="#80DEEA" strokeWidth="1" />
          <line x1="80" y1="68" x2="70" y2="58" stroke="#80DEEA" strokeWidth="1" />
          <line x1="50" y1="85" x2="50" y2="70" stroke="#80DEEA" strokeWidth="1" />
          <line x1="20" y1="68" x2="30" y2="58" stroke="#80DEEA" strokeWidth="1" />
          <line x1="20" y1="32" x2="30" y2="42" stroke="#80DEEA" strokeWidth="1" />
        </svg>
      );

    // 10. Carbon & Water: Planetary Topography & Clean Hydrology
    case 'node-carbon-water':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#1C1A14" />
          <circle cx="50" cy="50" r="35" stroke="#FFE082" strokeWidth="1.5" />
          <path d="M20 50 Q 35 30 50 50 T 80 50" stroke="#4FC3F7" strokeWidth="2" />
          <path d="M25 62 Q 40 45 55 60 T 75 62" stroke="#81C784" strokeWidth="1.5" />
          <path d="M50 20 L50 35 M50 65 L50 80" stroke="#FFE082" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="4" fill="#FFD54F" />
        </svg>
      );

    // 11. SLM Frugality: Microchip Traces Etched on a Leaf
    case 'node-slm-frugality':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#181B15" />
          <path d="M50 15 C25 35 25 70 50 85 C75 70 75 35 50 15 Z" stroke="#A5D6A7" strokeWidth="1.8" />
          <line x1="50" y1="15" x2="50" y2="85" stroke="#C8E6C9" strokeWidth="1.5" />
          <path d="M50 35 L35 45 M50 48 L32 58 M50 60 L38 70" stroke="#81C784" strokeWidth="1.2" />
          <path d="M50 35 L65 45 M50 48 L68 58 M50 60 L62 70" stroke="#81C784" strokeWidth="1.2" />
          <rect x="44" y="44" width="12" height="12" rx="2" fill="#2E7D32" stroke="#FFF" strokeWidth="1" />
        </svg>
      );

    // 12. Bias & Hallucination: Astrolabe Scale of Epistemic Humility
    case 'node-bias-hallucination':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#241E15" />
          <line x1="50" y1="20" x2="50" y2="80" stroke="#FFE082" strokeWidth="2" />
          <line x1="25" y1="35" x2="75" y2="35" stroke="#FFE082" strokeWidth="1.8" />
          <path d="M25 35 L18 55 L32 55 Z" stroke="#FFD54F" strokeWidth="1.2" fill="#FFD54F" fillOpacity="0.1" />
          <path d="M75 35 L68 58 L82 58 Z" stroke="#FFD54F" strokeWidth="1.2" fill="#FFD54F" fillOpacity="0.1" />
          <circle cx="50" cy="20" r="4" fill="#FFCA28" />
          <circle cx="25" cy="52" r="2.5" fill="#FFF" />
          <circle cx="75" cy="55" r="2.5" fill="#FFF" />
          <line x1="38" y1="80" x2="62" y2="80" stroke="#FFE082" strokeWidth="2.5" />
        </svg>
      );

    // 13. Executive Function Scaffolding: Zen Equilibrium Stones
    case 'node-mental-bandwidth':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#1C1818" />
          <ellipse cx="50" cy="78" rx="26" ry="10" fill="#5D4037" stroke="#A1887F" strokeWidth="1" />
          <ellipse cx="50" cy="62" rx="20" ry="8" fill="#6D4C41" stroke="#BCAAA4" strokeWidth="1" />
          <ellipse cx="50" cy="48" rx="14" ry="6" fill="#8D6E63" stroke="#D7CCC8" strokeWidth="1" />
          <circle cx="50" cy="34" r="7" fill="#E07A5F" />
          <circle cx="50" cy="34" r="14" stroke="#E07A5F" strokeWidth="0.8" strokeDasharray="2 3" />
        </svg>
      );

    // 14. Lifelong Curiosity: Vintage Celestial Armillary
    case 'node-lifelong-curiosity':
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" fill="#1C1A22" />
          <circle cx="50" cy="50" r="34" stroke="#CE93D8" strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="34" ry="14" stroke="#BA68C8" strokeWidth="1.2" transform="rotate(-30 50 50)" />
          <ellipse cx="50" cy="50" rx="34" ry="14" stroke="#BA68C8" strokeWidth="1.2" transform="rotate(30 50 50)" />
          <circle cx="50" cy="50" r="5" fill="#FFD54F" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#E1BEE7" strokeWidth="1" strokeDasharray="3 2" />
        </svg>
      );
  }
}
