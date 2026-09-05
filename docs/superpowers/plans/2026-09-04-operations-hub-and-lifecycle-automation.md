# Campus Operations Hub & Student Lifecycle Nodes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a 7th Constellation Hub (`Campus Operations & Student Lifecycle`) with two dedicated satellite nodes (`node-staff-empowerment` and `node-lifecycle-automation`), balance the constellation in a compact hexagonal symmetry, integrate the new Keynote Beat, and provide custom SVG micro-artworks in Crimson Red and Off-White.

**Architecture:** Update `presentationData.js` with new hub, nodes, and keynote sequencing; add custom SVG artworks in `VisualArtifacts.jsx`; update canvas connective web paths in `ConstellationCanvas.jsx`.

**Tech Stack:** React 18, Vite, Tailwind CSS, Lucide React, SVG.

## Global Constraints

- No external dependencies added.
- Clean build: `npm run build` must succeed without warnings or errors.
- Preserve existing keynote timing, notes, drawer data, sound engine effects, and crimson/off-white palette.

---

### Task 1: Add Operations Hub, New Nodes & Hexagonal Coordinates in `src/data/presentationData.js`

**Files:**
- Modify: `src/data/presentationData.js`

**Interfaces:**
- Consumes: Existing structure of `presentationData`
- Produces: 7 hubs arranged hexagonally, 16 satellite nodes, and 9 keynote stops (Prologue + 8 numbered beats, concluding at (0, 0, 0.45) with "Let's keep thinking.").

- [ ] **Step 1: Update hubs to hexagonal symmetry and add `hub-operations`**

In `src/data/presentationData.js`:
Add `hub-operations`:
```javascript
{
  id: "hub-operations",
  question: "How does AI modernize the institutional engine?",
  category: "Operations & Student Lifecycle",
  thesis: "Eliminating bureaucratic friction from admissions to career placement so staff and administrators can deliver proactive, high-empathy student care.",
  color: "#1D6363", // Regal Teal
  accentGlow: "rgba(29, 99, 99, 0.20)",
  x: -260,
  y: 380
},
```
Update existing hubs to hexagonal coordinates:
- `hub-grounding`: `{ x: 0, y: -30 }`
- `hub-teaching`: `{ x: -360, y: -250 }`
- `hub-learning`: `{ x: 360, y: -250 }`
- `hub-science`: `{ x: -440, y: 70 }`
- `hub-ethics`: `{ x: 440, y: 70 }`
- `hub-living`: `{ x: 260, y: 380 }`

- [ ] **Step 2: Add `node-staff-empowerment` and `node-lifecycle-automation` and update all node coordinates**

In `src/data/presentationData.js`:
- Teaching:
  - `node-detection-trap`: `{ x: -520, y: -350 }`
  - `node-authentic-assessment`: `{ x: -230, y: -360 }`
  - `node-reclaim-time`: `{ x: -470, y: -150 }`
- Learning:
  - `node-socratic-mentor`: `{ x: 230, y: -360 }`
  - `node-neurodiversity`: `{ x: 520, y: -350 }`
  - `node-first-gen`: `{ x: 470, y: -150 }`
- Science:
  - `node-alphafold`: `{ x: -600, y: -30 }`
  - `node-robotic-pipetting`: `{ x: -600, y: 180 }`
  - `node-materials-battery`: `{ x: -310, y: 170 }`
- Ethics:
  - `node-data-sovereignty`: `{ x: 310, y: -30 }`
  - `node-carbon-water`: `{ x: 600, y: -30 }`
  - `node-slm-frugality`: `{ x: 600, y: 180 }`
  - `node-bias-hallucination`: `{ x: 310, y: 170 }`
- Campus Operations (NEW):
  ```javascript
  {
    id: "node-staff-empowerment",
    hubId: "hub-operations",
    title: "Empowering Staff & Administrators",
    tag: "Staff Impact",
    x: -410,
    y: 480,
    summary: "Liberating frontline campus staff, academic advisors, and departmental administrators from repetitive administrative backlogs to deliver high-touch, compassionate student mentorship.",
    caseStudy: "Advising centers integrating assistive generative agents to pre-compile student academic histories, reducing case preparation from 45 minutes to 5 minutes and enabling advisors to double student consultation hours.",
    facultyAction: "Involve frontline staff in AI governance task forces; invest directly in staff prompt literacy and administrative co-pilots rather than solely faculty-facing tools.",
    ethicsOrEco: "Administrative dignity: technology must alleviate bureaucratic burnout rather than imposing continuous surveillance on staff workloads.",
    keyQuote: "When administrative drudgery recedes, institutional empathy takes its rightful place."
  },
  {
    id: "node-lifecycle-automation",
    hubId: "hub-operations",
    title: "End-to-End Lifecycle Automation",
    tag: "Workflow",
    x: -130,
    y: 480,
    summary: "Streamlining admissions, transcript evaluations, degree audits, proactive retention alerts, and alumni career matching with zero clerical latency and near-zero error rates.",
    caseStudy: "University registrars automating transfer credit articulation across 5,000 course catalogs in real-time, eliminating 6-week admission wait times and preventing credit-loss attrition.",
    facultyAction: "Connect siloed departmental databases via secure internal APIs to enable proactive, automated alerts when students fall off track for graduation.",
    ethicsOrEco: "Algorithmic fairness: automated triage and admissions systems must be continuously audited for demographic equity and appealable by human reviewers.",
    keyQuote: "Frictionless operations ensure no student slips through the cracks between enrollment and career."
  },
  ```
- Living:
  - `node-mental-bandwidth`: `{ x: 130, y: 480 }`
  - `node-lifelong-curiosity`: `{ x: 410, y: 480 }`

- [ ] **Step 3: Update `keynoteStops` sequence to 8 numbered beats + Prologue (9 total)**

Update `totalSteps: 9` for all stops:
- Stop 0 (`stop-prologue`): stepNumber: 0, camera: `{ x: 0, y: 0, zoom: 0.45 }`
- Stop 1 (`stop-grounding`): label: `"01 / 08 • The Human Center"`, camera: `{ x: 0, y: -30, zoom: 1.25 }`
- Stop 2 (`stop-teaching`): label: `"02 / 08 • Teaching & Pedagogy"`, camera: `{ x: -360, y: -250, zoom: 1.15 }`
- Stop 3 (`stop-learning`): label: `"03 / 08 • Learning & Equity"`, camera: `{ x: 360, y: -250, zoom: 1.15 }`
- Stop 4 (`stop-science`): label: `"04 / 08 • Science & Discovery"`, camera: `{ x: -440, y: 70, zoom: 1.15 }`
- Stop 5 (`stop-ethics`): label: `"05 / 08 • Ethics & Environment"`, camera: `{ x: 440, y: 70, zoom: 1.15 }`
- Stop 6 (`stop-operations` - NEW):
  ```javascript
  {
    id: "stop-operations",
    hubId: "hub-operations",
    stepNumber: 6,
    totalSteps: 9,
    label: "06 / 08 • Campus Operations",
    title: "Modernizing the Institutional Engine",
    subtitle: "Staff Empowerment & Error-Free Student Lifecycles",
    targetTime: "07:15 - 08:15",
    targetSeconds: 495,
    camera: { x: -260, y: 380, zoom: 1.15 },
    activeNodeIds: ["node-staff-empowerment", "node-lifecycle-automation"],
    keyMessage: "Automate administrative friction from admissions to career placement so staff can focus on compassionate human guidance.",
    speakerCues: [
      "Spotlight frontline staff: Advisors, registrars, and coordinators are the backbone of student retention.",
      "Eliminate the 'bureaucratic maze': Automated transfer credit evaluations and dynamic degree audits prevent student dropouts.",
      "Reinvest time: AI drafts documentation; staff provide empathy and career mentorship."
    ]
  },
  ```
- Stop 7 (`stop-living`): label: `"07 / 08 • Living & Well-being"`, stepNumber: 7, camera: `{ x: 260, y: 380, zoom: 1.15 }`
- Stop 8 (`stop-synthesis`): label: `"08 / 08 • The Synthesis"`, stepNumber: 8, camera: `{ x: 0, y: 0, zoom: 0.45 }`, `isPrologue: true`

- [ ] **Step 4: Verify build passes and commit**

Run: `npm run build`
Commit: `git commit -m "feat: add campus operations hub, staff empowerment, and lifecycle automation nodes"`

---

### Task 2: Custom SVG Vignettes in `VisualArtifacts.jsx` & Canvas Web Lines in `ConstellationCanvas.jsx`

**Files:**
- Modify: `src/components/VisualArtifacts.jsx`
- Modify: `src/components/ConstellationCanvas.jsx`

**Interfaces:**
- Consumes: `node-staff-empowerment` and `node-lifecycle-automation` IDs and hexagonal hub positions
- Produces: Bespoke 100x100 SVG micro-artworks and updated structural web lines.

- [ ] **Step 1: Add SVG micro-artworks in `src/components/VisualArtifacts.jsx`**

Add cases for `'node-staff-empowerment'` and `'node-lifecycle-automation'`:
```jsx
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
```

- [ ] **Step 2: Update SVG web lines in `src/components/ConstellationCanvas.jsx`**

Update the inter-hub web lines connecting `(0, -30)` to the 6 surrounding hubs:
```jsx
<path d="M 0 -30 L -360 -250" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -30 L 360 -250" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -30 L -440 70" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -30 L 440 70" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -30 L -260 380" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -30 L 260 380" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
```
Plus structural perimeter lines between adjacent hubs:
```jsx
<path d="M -360 -250 L 360 -250" stroke="rgba(120, 113, 108, 0.12)" strokeWidth="1" strokeDasharray="4 6" fill="none" />
<path d="M 360 -250 L 440 70" stroke="rgba(120, 113, 108, 0.12)" strokeWidth="1" strokeDasharray="4 6" fill="none" />
<path d="M 440 70 L 260 380" stroke="rgba(120, 113, 108, 0.12)" strokeWidth="1" strokeDasharray="4 6" fill="none" />
<path d="M 260 380 L -260 380" stroke="rgba(120, 113, 108, 0.12)" strokeWidth="1" strokeDasharray="4 6" fill="none" />
<path d="M -260 380 L -440 70" stroke="rgba(120, 113, 108, 0.12)" strokeWidth="1" strokeDasharray="4 6" fill="none" />
<path d="M -440 70 L -360 -250" stroke="rgba(120, 113, 108, 0.12)" strokeWidth="1" strokeDasharray="4 6" fill="none" />
```

- [ ] **Step 3: Verify build passes and commit**

Run: `npm run build`
Commit: `git commit -m "feat: add SVG vignettes for staff and lifecycle nodes and create hexagonal web lines"`

---

### Task 3: End-to-End Verification & Pull Request Update

- [ ] **Step 1: Run production build**

Run: `npm run build`
Expected: PASS with 0 errors.

- [ ] **Step 2: Push updates to branch**

Run: `git push origin feat/presentation-enhancements`
Expected: Remote branch and PR #1 updated.
