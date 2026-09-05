# Presentation End Return & Constellation Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove background typography watermarks ("Keep" and "thinking."), bring constellation clusters ~20% closer toward center, enlarge node thumbnail icons for better visibility, and have the presentation smoothly zoom out and return to the original spot `(0, 0, 0.45)` revealing "Let's keep thinking." at the end of the keynote.

**Architecture:** Update coordinate geometry and keynote stops in `presentationData.js`, sync canvas SVG web lines and hero state in `ConstellationCanvas.jsx`, enlarge card thumbnail frame in `NodeCard.jsx`, and align controls branding and zoom reset in `CanvasControls.jsx` and `App.jsx`.

**Tech Stack:** React 18, Vite, Tailwind CSS, Lucide React, HTML5 Canvas/SVG.

## Global Constraints

- No external dependencies added; rely entirely on existing React / Tailwind / Vite setup.
- Preserve existing keynote timing, notes, drawer data, and sound engine effects.
- Clean build: `npm run build` must succeed without warnings or errors at each milestone.

---

### Task 1: Update Hub, Node, and Camera Coordinates in `presentationData.js`

**Files:**
- Modify: `src/data/presentationData.js`

**Interfaces:**
- Consumes: Existing structure of `presentationData`
- Produces: Tighter hub coordinates, tighter node coordinates, updated keynote camera targets, and Stop 7 (`stop-synthesis`) return to original spot `{ x: 0, y: 0, zoom: 0.45 }` with `isPrologue: true`.

- [ ] **Step 1: Apply tightened coordinates and Stop 7 return in `src/data/presentationData.js`**

Update hubs to:
- `hub-grounding`: `{ x: 0, y: -50 }`
- `hub-teaching`: `{ x: -500, y: -330 }`
- `hub-learning`: `{ x: 500, y: -330 }`
- `hub-science`: `{ x: -520, y: 310 }`
- `hub-ethics`: `{ x: 520, y: 310 }`
- `hub-living`: `{ x: 0, y: 580 }`

Update satellite nodes to:
- Teaching:
  - `node-detection-trap`: `{ x: -690, y: -450 }`
  - `node-authentic-assessment`: `{ x: -330, y: -470 }`
  - `node-reclaim-time`: `{ x: -630, y: -210 }`
- Learning:
  - `node-socratic-mentor`: `{ x: 330, y: -470 }`
  - `node-neurodiversity`: `{ x: 690, y: -450 }`
  - `node-first-gen`: `{ x: 630, y: -210 }`
- Science:
  - `node-alphafold`: `{ x: -710, y: 170 }`
  - `node-robotic-pipetting`: `{ x: -710, y: 440 }`
  - `node-materials-battery`: `{ x: -360, y: 420 }`
- Ethics:
  - `node-carbon-water`: `{ x: 710, y: 170 }`
  - `node-slm-frugality`: `{ x: 710, y: 440 }`
  - `node-bias-hallucination`: `{ x: 360, y: 420 }`
- Living:
  - `node-mental-bandwidth`: `{ x: -280, y: 680 }`
  - `node-lifelong-curiosity`: `{ x: 280, y: 680 }`

Update keynote stops cameras:
- `stop-prologue`: `{ x: 0, y: 0, zoom: 0.45 }`
- `stop-grounding`: `{ x: 0, y: -50, zoom: 1.2 }`
- `stop-teaching`: `{ x: -500, y: -330, zoom: 1.05 }`
- `stop-learning`: `{ x: 500, y: -330, zoom: 1.05 }`
- `stop-science`: `{ x: -520, y: 310, zoom: 1.05 }`
- `stop-ethics`: `{ x: 520, y: 310, zoom: 1.05 }`
- `stop-living`: `{ x: 0, y: 580, zoom: 1.1 }`
- `stop-synthesis`: `{ x: 0, y: 0, zoom: 0.45 }`, `isPrologue: true`

- [ ] **Step 2: Verify build passes with updated data**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit Task 1**

```bash
git add src/data/presentationData.js
git commit -m "feat: tighten constellation coordinates and configure stop-synthesis return to original spot"
```

---

### Task 2: Remove Typography Watermarks and Update Canvas Web Lines & Hero State

**Files:**
- Modify: `src/components/ConstellationCanvas.jsx`

**Interfaces:**
- Consumes: Updated hub coordinates from `presentationData`
- Produces: Clean canvas without "Keep" and "thinking.", updated SVG web lines connecting tightened hubs, and contextual hero stage actions (start vs end).

- [ ] **Step 1: Remove "Keep" and "thinking." typography and update SVG lines and hero overlay**

In `src/components/ConstellationCanvas.jsx`:
1. Remove:
```jsx
{/* Bookend Background Typography (Anthropic Signature) */}
<div className="absolute font-editorial text-[180px] font-normal text-ink/10 select-none pointer-events-none tracking-tighter" style={{ left: '-1380px', top: '-860px' }}>Keep</div>
<div className="absolute font-editorial text-[200px] font-normal text-ink/10 select-none pointer-events-none tracking-tighter" style={{ left: '680px', top: '820px' }}>thinking.</div>
```
2. Update SVG inter-hub paths:
```jsx
<path d="M 0 -50 L -500 -330" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -50 L 500 -330" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -50 L -520 310" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -50 L 520 310" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
<path d="M 0 -50 L 0 580" stroke="rgba(120, 113, 108, 0.20)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
```
3. Update `isPrologueActive`:
```javascript
const isPrologueActive = activeStop?.isPrologue || 
  (!isExploreMode && (activeStop?.stepNumber === 0 || activeStop?.stepNumber === data.keynoteStops.length - 1)) || 
  (camState.zoom < 0.52 && Math.hypot(camState.x, camState.y) < 220);
const isAtEnd = activeStop?.stepNumber === data.keynoteStops.length - 1 && activeStop?.stepNumber !== 0;
```
4. In Hero Stage buttons, if `isAtEnd` is true, render "Restart Keynote ↺" (invokes `onRestartKeynote || onEnterConstellation`) and "Explore Constellation 🧭" (invokes `onExploreMode`).

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit Task 2**

```bash
git add src/components/ConstellationCanvas.jsx
git commit -m "feat: remove background watermarks, sync canvas web lines, and add keynote end actions"
```

---

### Task 3: Enlarge Thumbnail Icons in `NodeCard.jsx`

**Files:**
- Modify: `src/components/NodeCard.jsx`

**Interfaces:**
- Consumes: Node data and `VisualArtifact`
- Produces: Larger thumbnail frame (`w-26 h-26` / 104px) and proportional card layout (`w-52`) for higher visual fidelity.

- [ ] **Step 1: Enlarge thumbnail frame and card container**

In `src/components/NodeCard.jsx`:
- Change card wrapper width from `w-48` to `w-52`.
- Change thumbnail container from `w-20 h-20` to `w-26 h-26 rounded-2xl` (104px).
- Refine tag badge font size to `text-[10px]` and title styling.

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit Task 3**

```bash
git add src/components/NodeCard.jsx
git commit -m "feat: enlarge thumbnail icon frames and card container for higher visual fidelity"
```

---

### Task 4: Unify Branding in `CanvasControls.jsx` and Update Zoom Reset in `App.jsx`

**Files:**
- Modify: `src/components/CanvasControls.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: Header branding and reset zoom handlers
- Produces: Consistent "Let's keep thinking." header title and zoom reset pointing to original spot `{ x: 0, y: 0, zoom: 0.45 }`.

- [ ] **Step 1: Update header title in `CanvasControls.jsx`**

In `src/components/CanvasControls.jsx`:
Change:
```jsx
<h1 className="font-editorial text-base sm:text-lg font-bold text-ink leading-tight">
  Keep thinking.
</h1>
```
to:
```jsx
<h1 className="font-editorial text-base sm:text-lg font-bold text-ink leading-tight">
  Let's keep thinking.
</h1>
```

- [ ] **Step 2: Update `handleResetZoom` and pass handlers in `App.jsx`**

In `src/App.jsx`:
Update `handleResetZoom`:
```javascript
const handleResetZoom = () => {
  setCamera({
    x: 0,
    y: 0,
    zoom: 0.45
  });
};
```
Pass `onRestartKeynote={() => { setCurrentStepIndex(0); setIsExploreMode(false); }}` and `onExploreMode={() => setIsExploreMode(true)}` to `ConstellationCanvas`.

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit Task 4**

```bash
git add src/components/CanvasControls.jsx src/App.jsx
git commit -m "feat: unify controls branding and align reset zoom to original spot"
```

---

### Task 5: End-to-End Verification

- [ ] **Step 1: Run full production build**

Run: `npm run build`
Expected: Zero errors, clean compilation.

- [ ] **Step 2: Verify all key changes**

Check git diff against `HEAD~4` to confirm:
1. No occurrences of "Keep" (top left) or "thinking." (bottom right) background divs in `ConstellationCanvas.jsx`.
2. Constellation hubs and nodes are ~20% closer to the origin `(0, 0)`.
3. Node cards have `w-26 h-26` enlarged frames.
4. Stop 7 (`stop-synthesis`) has camera `{ x: 0, y: 0, zoom: 0.45 }` and triggers the return to "Let's keep thinking." with restart/explore options.
5. `handleResetZoom` targets `{ x: 0, y: 0, zoom: 0.45 }`.
