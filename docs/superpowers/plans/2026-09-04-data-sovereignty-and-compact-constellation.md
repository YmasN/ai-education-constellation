# Data Sovereignty Node & Compact Constellation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the "Institutional Data Sovereignty" satellite node with rich content and custom SVG artwork, integrate it into Keynote Beat 5, and compress the entire constellation geometry by ~22% further toward the center for effortless navigation.

**Architecture:** Update hub and node coordinate matrices in `presentationData.js`, add `node-data-sovereignty` data entry and stop-ethics active list, add custom SVG micro-artwork in `VisualArtifacts.jsx`, and update SVG inter-hub web lines in `ConstellationCanvas.jsx`.

**Tech Stack:** React 18, Vite, Tailwind CSS, Lucide React, SVG.

## Global Constraints

- No external dependencies added.
- Clean build: `npm run build` must succeed without warnings or errors.
- Preserve existing keynote timing, notes, drawer data, and sound engine effects.

---

### Task 1: Compact Constellation Coordinates & Data Sovereignty Node in `src/data/presentationData.js`

**Files:**
- Modify: `src/data/presentationData.js`

**Interfaces:**
- Consumes: Existing structure of `presentationData`
- Produces: Updated compact hub coordinates, updated compact node coordinates, new `node-data-sovereignty` node object, and updated `stop-ethics` keynote stop.

- [ ] **Step 1: Update hubs to compact coordinates**

In `src/data/presentationData.js`:
- `hub-grounding`: `{ x: 0, y: -40 }`
- `hub-teaching`: `{ x: -390, y: -260 }`
- `hub-learning`: `{ x: 390, y: -260 }`
- `hub-science`: `{ x: -400, y: 250 }`
- `hub-ethics`: `{ x: 400, y: 250 }`
- `hub-living`: `{ x: 0, y: 460 }`

- [ ] **Step 2: Add `node-data-sovereignty` and update all nodes to compact coordinates**

In `src/data/presentationData.js`:
- Teaching:
  - `node-detection-trap`: `{ x: -550, y: -360 }`
  - `node-authentic-assessment`: `{ x: -260, y: -380 }`
  - `node-reclaim-time`: `{ x: -500, y: -160 }`
- Learning:
  - `node-socratic-mentor`: `{ x: 260, y: -380 }`
  - `node-neurodiversity`: `{ x: 550, y: -360 }`
  - `node-first-gen`: `{ x: 500, y: -160 }`
- Science:
  - `node-alphafold`: `{ x: -560, y: 130 }`
  - `node-robotic-pipetting`: `{ x: -560, y: 360 }`
  - `node-materials-battery`: `{ x: -270, y: 340 }`
- Ethics:
  - Add:
    ```javascript
    {
      id: "node-data-sovereignty",
      hubId: "hub-ethics",
      title: "Institutional Data Sovereignty",
      tag: "Sovereignty",
      x: 270,
      y: 130,
      summary: "Deploying campus-governed, custom-tuned models in secure on-premise enclaves to ensure FERPA compliance, preserve student privacy, and protect university IP from commercial model scraping.",
      caseStudy: "Institutions deploying private sovereign compute clusters running open-weights models behind campus firewalls, ensuring zero telemetry or student data retention by commercial cloud vendors.",
      facultyAction: "Require institutional procurement to mandate zero-data-retention agreements, and provide campus-hosted API endpoints for classroom and laboratory workloads.",
      ethicsOrEco: "Data sovereignty is academic independence: universities must not trade student intellectual rights and proprietary research for commercial convenience.",
      keyQuote: "True academic freedom in an automated age requires owning the ground upon which your intelligence runs."
    },
    ```
  - `node-carbon-water`: `{ x: 560, y: 130 }`
  - `node-slm-frugality`: `{ x: 560, y: 360 }`
  - `node-bias-hallucination`: `{ x: 270, y: 340 }`
- Living:
  - `node-mental-bandwidth`: `{ x: -220, y: 540 }`
  - `node-lifelong-curiosity`: `{ x: 220, y: 540 }`

- [ ] **Step 3: Update keynote stop camera targets and `stop-ethics` active nodes**

In `keynoteStops`:
- `stop-prologue`: `{ x: 0, y: 0, zoom: 0.45 }`
- `stop-grounding`: `{ x: 0, y: -40, zoom: 1.25 }`
- `stop-teaching`: `{ x: -390, y: -260, zoom: 1.15 }`
- `stop-learning`: `{ x: 390, y: -260, zoom: 1.15 }`
- `stop-science`: `{ x: -400, y: 250, zoom: 1.15 }`
- `stop-ethics`:
  - `camera`: `{ x: 400, y: 250, zoom: 1.15 }`
  - `activeNodeIds`: `["node-data-sovereignty", "node-carbon-water", "node-slm-frugality", "node-bias-hallucination"]`
  - `speakerCues`: Add `"Data Sovereignty: Campus-hosted private models defending FERPA compliance, student privacy, and uncompromised research IP."`
- `stop-living`: `{ x: 0, y: 460, zoom: 1.20 }`
- `stop-synthesis`: `{ x: 0, y: 0, zoom: 0.45 }`

- [ ] **Step 4: Verify build passes and commit**

Run: `npm run build`
Commit: `git commit -m "feat: add institutional data sovereignty node and compact constellation layout"`

---

### Task 2: Custom SVG Micro-Artwork in `VisualArtifacts.jsx` & Canvas Web Lines in `ConstellationCanvas.jsx`

**Files:**
- Modify: `src/components/VisualArtifacts.jsx`
- Modify: `src/components/ConstellationCanvas.jsx`

**Interfaces:**
- Consumes: `node-data-sovereignty` id and compact hub coordinates
- Produces: Bespoke 100x100 SVG micro-artwork in `VisualArtifacts.jsx` and updated SVG lines in `ConstellationCanvas.jsx`.

- [ ] **Step 1: Add SVG micro-artwork in `src/components/VisualArtifacts.jsx`**

Add case for `'node-data-sovereignty'`:
```jsx
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
```

- [ ] **Step 2: Update SVG inter-hub web lines in `src/components/ConstellationCanvas.jsx`**

Update lines connecting `(0, -40)` to compact hubs:
```jsx
<path d="M 0 -40 L -390 -260" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -40 L 390 -260" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -40 L -400 250" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -40 L 400 250" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -40 L 0 460" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
```

- [ ] **Step 3: Verify build passes and commit**

Run: `npm run build`
Commit: `git commit -m "feat: add data sovereignty SVG vignette and sync compact canvas web lines"`

---

### Task 3: End-to-End Verification & Pull Request Update

- [ ] **Step 1: Run production build**

Run: `npm run build`
Expected: PASS with 0 errors.

- [ ] **Step 2: Push updates to branch**

Run: `git push origin feat/presentation-enhancements`
Expected: Remote branch updated.
