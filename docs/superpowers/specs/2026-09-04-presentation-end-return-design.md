# Design Spec: Full-Circle Keynote Return, Constellation Spacing & Icon Size Enhancements

## 1. Overview
This design addresses four related enhancements:
1. **Remove Typography Watermarks**: Remove the background watermark typography (`Keep` at top-left, `thinking.` at bottom-right) from `ConstellationCanvas.jsx`, and unify top-left branding in `CanvasControls.jsx` to `"Let's keep thinking."`.
2. **Stop 7 Zoom Out & Full-Circle Return**: Update Stop 7 (`stop-synthesis`) so that when the camera zooms out, it returns to the original spot (`x: 0, y: 0, zoom: 0.45`) and reveals `"Let's keep thinking."` with options to restart or explore freely.
3. **Bring Constellations Closer**: Pull all constellation hubs and satellite nodes inward by ~20-22% toward the center, creating a tighter, cohesive visual constellation that fits naturally in view without excessive spreading.
4. **Enlarge Visual Vignette Icons**: Increase the size of node card icon frames from `w-20 h-20` (80px) to `w-26 h-26` (~104px) with enhanced border contrast and scaled card typography for clear, sharp visibility.

---

## 2. Detailed Technical Plan

### A. Background Typography Cleanup
- In `src/components/ConstellationCanvas.jsx`, delete the absolute-positioned typography divs:
  - `left: -1380px, top: -860px` ("Keep")
  - `left: 680px, top: 820px` ("thinking.")
- In `src/components/CanvasControls.jsx`, update the header title from `"Keep thinking."` to `"Let's keep thinking."`.

### B. Constellation Spacing (Bringing Constellations Closer)
Update the coordinates in `src/data/presentationData.js` and `ConstellationCanvas.jsx`:
- **Hubs**:
  - `hub-grounding`: `(0, -50)` (was `(0, -60)`)
  - `hub-teaching`: `(-500, -330)` (was `(-640, -420)`)
  - `hub-learning`: `(500, -330)` (was `(640, -420)`)
  - `hub-science`: `(-520, 310)` (was `(-660, 400)`)
  - `hub-ethics`: `(520, 310)` (was `(660, 400)`)
  - `hub-living`: `(0, 580)` (was `(0, 740)`)
- **Nodes**:
  - Teaching:
    - `node-detection-trap`: `(-690, -450)` (was `(-880, -580)`)
    - `node-authentic-assessment`: `(-330, -470)` (was `(-420, -600)`)
    - `node-reclaim-time`: `(-630, -210)` (was `(-800, -260)`)
  - Learning:
    - `node-socratic-mentor`: `(330, -470)` (was `(420, -600)`)
    - `node-neurodiversity`: `(690, -450)` (was `(880, -580)`)
    - `node-first-gen`: `(630, -210)` (was `(800, -260)`)
  - Science:
    - `node-alphafold`: `(-710, 170)` (was `(-900, 220)`)
    - `node-robotic-pipetting`: `(-710, 440)` (was `(-900, 560)`)
    - `node-materials-battery`: `(-360, 420)` (was `(-460, 540)`)
  - Ethics:
    - `node-carbon-water`: `(710, 170)` (was `(900, 220)`)
    - `node-slm-frugality`: `(710, 440)` (was `(900, 560)`)
    - `node-bias-hallucination`: `(360, 420)` (was `(460, 540)`)
  - Living:
    - `node-mental-bandwidth`: `(-280, 680)` (was `(-360, 860)`)
    - `node-lifelong-curiosity`: `(280, 680)` (was `(360, 860)`)
- **Web SVG Lines** in `ConstellationCanvas.jsx`:
  Update the inter-hub SVG lines to connect `(0, -50)` to the new hub coordinates.
- **Keynote Cameras**:
  - `stop-grounding`: `{ x: 0, y: -50, zoom: 1.2 }`
  - `stop-teaching`: `{ x: -500, y: -330, zoom: 1.05 }`
  - `stop-learning`: `{ x: 500, y: -330, zoom: 1.05 }`
  - `stop-science`: `{ x: -520, y: 310, zoom: 1.05 }`
  - `stop-ethics`: `{ x: 520, y: 310, zoom: 1.05 }`
  - `stop-living`: `{ x: 0, y: 580, zoom: 1.1 }`
  - `stop-synthesis`: `{ x: 0, y: 0, zoom: 0.45 }` (returns to original spot)
  - `stop-prologue`: `{ x: 0, y: 0, zoom: 0.45 }`

### C. Icon Size & Visibility Enhancements
- In `src/components/NodeCard.jsx`:
  - Enlarge thumbnail frame from `w-20 h-20` to `w-26 h-26` (104px x 104px).
  - Expand card width from `w-48` to `w-52` so labels and badges flow smoothly without truncating.
  - Make the tag badge font slightly larger (`text-[10px]`) and node title clearer (`text-sm font-medium`).
  - Keep SVG vector graphics rendering crisply inside the larger frame via `VisualArtifacts.jsx` `viewBox="0 0 100 100"`.

### D. Stop 7 Full-Circle Hero Return
- In `src/data/presentationData.js`:
  - `stop-synthesis`: Set `camera: { x: 0, y: 0, zoom: 0.45 }` and `isPrologue: true`.
- In `src/components/ConstellationCanvas.jsx`:
  - `isHeroActive` triggers on prologue (step 0), synthesis (last step), or when zoomed out (`zoom < 0.52 && dist < 200`).
  - Contextual buttons on the hero screen:
    - At start: `"Enter the Constellation →"`
    - At end (Beat 7): `"Restart Keynote ↺"` and `"Explore Constellation 🧭"`
- In `src/App.jsx`:
  - Update `handleResetZoom` to `{ x: 0, y: 0, zoom: 0.45 }`.

---

## 3. Verification & Acceptance Criteria
1. `npm run build` succeeds without lint or bundling errors.
2. Background watermark words "Keep" and "thinking." are completely gone.
3. Constellations are ~20% closer to the center, creating a balanced and visually cohesive layout.
4. Node thumbnail icons are ~30% larger (104px vs 80px) and noticeably easier to view and explore.
5. In Keynote mode, advancing from Stop 6 to Stop 7 zooms out smoothly to the original spot `(0, 0, 0.45)` and reveals "Let's keep thinking." with replay and explore options.
