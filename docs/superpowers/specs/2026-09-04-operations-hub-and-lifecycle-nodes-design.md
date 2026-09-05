# Design Spec: Campus Operations & Student Lifecycle Hub with Staff Empowerment & Workflow Automation

## 1. Overview
This design introduces a dedicated 7th Constellation Hub: **Campus Operations & Student Lifecycle** with two new satellite nodes:
1. **Empowering Staff & Administrators** (`node-staff-empowerment`): Relief from bureaucratic backlogs, staff co-pilots, and proactive high-empathy student support.
2. **End-to-End Lifecycle Automation** (`node-lifecycle-automation`): Full student journey optimization from marketing, admissions, and transcript evaluations through dynamic advising, graduation audits, and career placement.

The addition reorganizes the constellation into a balanced hexagonal symmetry around the central Human Center, updates Keynote sequencing to 8 numbered beats + Prologue, and adds bespoke SVG micro-artworks in Crimson Red and Off-White.

---

## 2. Technical Specification

### A. Constellation Hexagonal Symmetry & Coordinates

#### 1. Hubs (Hexagonal Harmony):
- `hub-grounding` (Center): `{ x: 0, y: -30 }`
- `hub-teaching` (Top-Left): `{ x: -360, y: -250 }`
- `hub-learning` (Top-Right): `{ x: 360, y: -250 }`
- `hub-science` (Mid-Left): `{ x: -440, y: 70 }`
- `hub-ethics` (Mid-Right): `{ x: 440, y: 70 }`
- `hub-operations` (Bottom-Left - NEW): `{ x: -260, y: 380 }`
  - Color: `#1D6363` (Regal Teal)
  - Glow: `rgba(29, 99, 99, 0.20)`
- `hub-living` (Bottom-Right): `{ x: 260, y: 380 }`

#### 2. Nodes:
- **Teaching Hub** (`-360, -250`):
  - `node-detection-trap`: `(-520, -350)`
  - `node-authentic-assessment`: `(-230, -360)`
  - `node-reclaim-time`: `(-470, -150)`
- **Learning Hub** (`360, -250`):
  - `node-socratic-mentor`: `(230, -360)`
  - `node-neurodiversity`: `(520, -350)`
  - `node-first-gen`: `(470, -150)`
- **Science Hub** (`-440, 70`):
  - `node-alphafold`: `(-600, -30)`
  - `node-robotic-pipetting`: `(-600, 180)`
  - `node-materials-battery`: `(-310, 170)`
- **Ethics Hub** (`440, 70`):
  - `node-data-sovereignty`: `(310, -30)`
  - `node-carbon-water`: `(600, -30)`
  - `node-slm-frugality`: `(600, 180)`
  - `node-bias-hallucination`: `(310, 170)`
- **Campus Operations Hub** (`-260, 380` - NEW):
  - `node-staff-empowerment`: `(-410, 480)`
  - `node-lifecycle-automation`: `(-130, 480)`
- **Everyday Living Hub** (`260, 380`):
  - `node-mental-bandwidth`: `(130, 480)`
  - `node-lifelong-curiosity`: `(410, 480)`

---

### B. New Node Content Specifications

#### 1. Node: Empowering Staff & Administrators
- **ID**: `node-staff-empowerment`
- **Hub**: `hub-operations`
- **Title**: `Empowering Staff & Administrators`
- **Tag**: `Staff Impact`
- **Coordinates**: `x: -410, y: 480`
- **Summary**: Liberating frontline campus staff, academic advisors, and departmental administrators from repetitive administrative backlogs to deliver high-touch, compassionate student mentorship.
- **Case Study**: Advising centers integrating assistive generative agents to pre-compile student academic histories, reducing case preparation from 45 minutes to 5 minutes and enabling advisors to double student consultation hours.
- **Faculty & Staff Action**: Involve frontline staff in AI governance task forces; invest directly in staff prompt literacy and administrative co-pilots rather than solely faculty-facing tools.
- **Ethics/Ecology**: Administrative dignity: technology must alleviate bureaucratic burnout rather than imposing continuous surveillance on staff workloads.
- **Key Quote**: "When administrative drudgery recedes, institutional empathy takes its rightful place."

#### 2. Node: End-to-End Lifecycle Automation
- **ID**: `node-lifecycle-automation`
- **Hub**: `hub-operations`
- **Title**: `End-to-End Lifecycle Automation`
- **Tag**: `Workflow`
- **Coordinates**: `x: -130, y: 480`
- **Summary**: Streamlining admissions, transcript evaluations, degree audits, proactive retention alerts, and alumni career matching with zero clerical latency and near-zero error rates.
- **Case Study**: University registrars automating transfer credit articulation across 5,000 course catalogs in real-time, eliminating 6-week admission wait times and preventing credit-loss attrition.
- **Faculty & Staff Action**: Connect siloed departmental databases via secure internal APIs to enable proactive, automated alerts when students fall off track for graduation.
- **Ethics/Ecology**: Algorithmic fairness: automated triage and admissions systems must be continuously audited for demographic equity and appealable by human reviewers.
- **Key Quote**: "Frictionless operations ensure no student slips through the cracks between enrollment and career."

---

### C. Keynote Stops Integration (8 Chapters + Prologue)
- `stop-prologue`: Prologue • Introduction (`camera: { x: 0, y: 0, zoom: 0.45 }`)
- `stop-grounding`: `01 / 08 • The Human Center` (`camera: { x: 0, y: -30, zoom: 1.25 }`)
- `stop-teaching`: `02 / 08 • Teaching & Pedagogy` (`camera: { x: -360, y: -250, zoom: 1.15 }`)
- `stop-learning`: `03 / 08 • Learning & Equity` (`camera: { x: 360, y: -250, zoom: 1.15 }`)
- `stop-science`: `04 / 08 • Science & Discovery` (`camera: { x: -440, y: 70, zoom: 1.15 }`)
- `stop-ethics`: `05 / 08 • Ethics & Environment` (`camera: { x: 440, y: 70, zoom: 1.15 }`)
- `stop-operations`: `06 / 08 • Campus Operations` (`camera: { x: -260, y: 380, zoom: 1.15 }`) - **NEW BEAT**
  - Active nodes: `["node-staff-empowerment", "node-lifecycle-automation"]`
- `stop-living`: `07 / 08 • Living & Well-being` (`camera: { x: 260, y: 380, zoom: 1.15 }`)
- `stop-synthesis`: `08 / 08 • The Synthesis` (`camera: { x: 0, y: 0, zoom: 0.45 }`, `isPrologue: true`)
  - Full circle return to "Let's keep thinking."

---

### D. Custom SVG Visual Vignettes in `VisualArtifacts.jsx`
1. **`node-staff-empowerment`**:
   - Compassionate human hands elevating a guiding beacon / compass with expanding empowerment aura in Crimson Red (`#A51C30`), Teal (`#1D6363`), and Off-White (`#FAF9F6`).
2. **`node-lifecycle-automation`**:
   - An unbroken cyclical student journey ribbon connecting 4 nexus nodes (admissions, advising, degree audit, career launch) with precision gear/orbital arcs.

---

### E. SVG Inter-Hub Web Lines in `ConstellationCanvas.jsx`
Connect `(0, -30)` to:
- `(-360, -250)`
- `(360, -250)`
- `(-440, 70)`
- `(440, 70)`
- `(-260, 380)`
- `(260, 380)`
Plus structural perimeter lines between adjacent hubs for a gorgeous star web.

---

## 3. Verification & Acceptance Criteria
1. `npm run build` succeeds cleanly without warnings.
2. Hexagonal constellation layout renders with perfect geometric balance.
3. Both new nodes appear with custom micro-artworks, open the drawer with rich content, and highlight during Beat 6 (`Campus Operations`).
4. Keynote flows through 8 beats + prologue, and beat 8 returns to the original spot `(0, 0, 0.45)` with `"Let's keep thinking."`.
