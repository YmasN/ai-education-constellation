# Design Spec: Institutional Data Sovereignty Node, Custom Vignette & Compact Constellation Layout

## 1. Overview
This design implements two coordinated improvements:
1. **Institutional Data Sovereignty Node & Custom Artwork**: A new satellite node in the **Ethics & Environment** cluster highlighting campus-hosted private models, data protection, and research sovereignty, complete with a custom 100×100 Crimson Red SVG micro-artwork.
2. **Compact Constellation Geometry**: Compressing the overall constellation geometry by ~22% further toward the center. This makes full-constellation navigation effortless, fits all clusters comfortably on laptops/displays, and produces tighter, cinematic swoops during presentation transitions.

---

## 2. Technical Specification

### A. Compact Constellation Layout Coordinates

#### 1. Central & Regional Hubs:
- `hub-grounding`: `{ x: 0, y: -40 }`
- `hub-teaching`: `{ x: -390, y: -260 }`
- `hub-learning`: `{ x: 390, y: -260 }`
- `hub-science`: `{ x: -400, y: 250 }`
- `hub-ethics`: `{ x: 400, y: 250 }`
- `hub-living`: `{ x: 0, y: 460 }`

#### 2. Satellite Nodes:
- **Teaching Hub** (`-390, -260`):
  - `node-detection-trap`: `{ x: -550, y: -360 }`
  - `node-authentic-assessment`: `{ x: -260, y: -380 }`
  - `node-reclaim-time`: `{ x: -500, y: -160 }`
- **Learning Hub** (`390, -260`):
  - `node-socratic-mentor`: `{ x: 260, y: -380 }`
  - `node-neurodiversity`: `{ x: 550, y: -360 }`
  - `node-first-gen`: `{ x: 500, y: -160 }`
- **Science & Discovery Hub** (`-400, 250`):
  - `node-alphafold`: `{ x: -560, y: 130 }`
  - `node-robotic-pipetting`: `{ x: -560, y: 360 }`
  - `node-materials-battery`: `{ x: -270, y: 340 }`
- **Ethics, Governance & Ecology Hub** (`400, 250`):
  - `node-data-sovereignty`: `{ x: 270, y: 130 }` (NEW)
  - `node-carbon-water`: `{ x: 560, y: 130 }`
  - `node-slm-frugality`: `{ x: 560, y: 360 }`
  - `node-bias-hallucination`: `{ x: 270, y: 340 }`
- **Everyday Living Hub** (`0, 460`):
  - `node-mental-bandwidth`: `{ x: -220, y: 540 }`
  - `node-lifelong-curiosity`: `{ x: 220, y: 540 }`

#### 3. Keynote Camera Targets:
- `stop-prologue`: `{ x: 0, y: 0, zoom: 0.45 }`
- `stop-grounding`: `{ x: 0, y: -40, zoom: 1.25 }`
- `stop-teaching`: `{ x: -390, y: -260, zoom: 1.15 }`
- `stop-learning`: `{ x: 390, y: -260, zoom: 1.15 }`
- `stop-science`: `{ x: -400, y: 250, zoom: 1.15 }`
- `stop-ethics`: `{ x: 400, y: 250, zoom: 1.15 }`
- `stop-living`: `{ x: 0, y: 460, zoom: 1.20 }`
- `stop-synthesis`: `{ x: 0, y: 0, zoom: 0.45 }`

#### 4. SVG Web Lines in `src/components/ConstellationCanvas.jsx`:
Update inter-hub structural lines connecting `(0, -40)` to:
- `(-390, -260)`
- `(390, -260)`
- `(-400, 250)`
- `(400, 250)`
- `(0, 460)`

---

### B. New Node: Institutional Data Sovereignty

#### 1. Content in `src/data/presentationData.js`:
- **id**: `"node-data-sovereignty"`
- **hubId**: `"hub-ethics"`
- **title**: `"Institutional Data Sovereignty"`
- **tag**: `"Sovereignty"`
- **x**: `270`, **y**: `130`
- **summary**: Deploying campus-governed, custom-tuned models in secure on-premise enclaves to ensure FERPA compliance, preserve student privacy, and protect university IP from commercial model scraping.
- **caseStudy**: Institutions deploying private sovereign compute clusters running open-weights models behind campus firewalls, ensuring zero telemetry or student data retention by commercial cloud vendors.
- **facultyAction**: Require institutional procurement to mandate zero-data-retention agreements, and provide campus-hosted API endpoints for classroom and laboratory workloads.
- **ethicsOrEco**: Data sovereignty is academic independence: universities must not trade student intellectual rights and proprietary research for commercial convenience.
- **keyQuote**: "True academic freedom in an automated age requires owning the ground upon which your intelligence runs."

#### 2. Stop 5 Keynote Integration:
- In `stop-ethics`:
  - `activeNodeIds`: `["node-data-sovereignty", "node-carbon-water", "node-slm-frugality", "node-bias-hallucination"]`
  - `speakerCues`: Add cue for data sovereignty and campus-owned AI enclaves.

#### 3. Custom SVG Artwork in `src/components/VisualArtifacts.jsx`:
- `case 'node-data-sovereignty':`
- A sovereign cryptographic citadel/shield with concentric vault rings, protective bastion battlements, and integrity matrix lines in Crimson Red (`#A51C30`), Gold (`#D4AF37`), and Off-White (`#FAF9F6`).

---

## 3. Verification
1. `npm run build` passes with zero errors.
2. Constellation clusters are visibly more compact and fit comfortably in view.
3. Node `node-data-sovereignty` renders smoothly with custom artwork, opens the case study drawer upon click, and lights up during Beat 5.
