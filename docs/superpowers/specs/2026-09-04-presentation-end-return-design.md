# Design Spec: Full-Circle Keynote Return to "Let's keep thinking." & Background Typography Cleanup

## 1. Overview
This design removes the background watermark typography ("Keep" at top-left, "thinking." at bottom-right) and updates the final keynote stop (Stop 7: The Synthesis) so that when zoomed out, the presentation returns smoothly to the original spot (`x: 0, y: 0, zoom: 0.45`), revealing "Let's keep thinking." to close the keynote full-circle.

---

## 2. Changes & Architecture

### A. Remove Top-Left "Keep" & Bottom-Right "thinking."
- In `src/components/ConstellationCanvas.jsx`, remove lines 272–285 containing the absolute-positioned typography divs (`Keep` at `left: -1380px, top: -860px` and `thinking.` at `left: 680px, top: 820px`).
- In `src/components/CanvasControls.jsx`, align the top-left branding title to "Let's keep thinking." matching the official presentation title in `presentationData.meta.title`.

### B. Stop 7 Keynote Stop Configuration
- In `src/data/presentationData.js`:
  - Update `stop-synthesis` (Step 7):
    - `camera`: Change from `{ x: 0, y: 80, zoom: 0.50 }` to `{ x: 0, y: 0, zoom: 0.45 }` (matching the original prologue spot).
    - `isPrologue`: Set to `true` so that the canvas triggers the central hero display.
    - `speakerCues`: Update to reflect camera pull-back returning to the original spot and "Let's keep thinking." to conclude the keynote.

### C. Hero Stage Context & Navigation
- In `src/components/ConstellationCanvas.jsx`:
  - Update `isPrologueActive` logic to activate when:
    1. `activeStop?.isPrologue` is true, or
    2. `activeStop?.stepNumber === 0` or `activeStop?.stepNumber === data.keynoteStops.length - 1`, or
    3. `camState.zoom < 0.52 && Math.hypot(camState.x, camState.y) < 200` (when zoomed out near center).
  - Add contextual actions to the hero overlay:
    - **Prologue (Beat 0)**: Button displays "Enter the Constellation →" (advances to Beat 1).
    - **Epilogue/Synthesis (Beat 7)**: Button displays "Restart Keynote ↺" (resets to Beat 0) alongside an option to "Explore Freely 🧭" (switches to Free Explore mode).
  - Pass down callbacks or handlers: `onRestartKeynote` and `onExploreMode`.

### D. Reset Zoom Control
- In `src/App.jsx`:
  - Update `handleResetZoom`:
    - Change from `{ x: 0, y: 80, zoom: 0.58 }` to `{ x: 0, y: 0, zoom: 0.45 }`.
    - Clicking the Reset Zoom button returns the camera to the original spot showing "Let's keep thinking.".

---

## 3. Verification & Testing
1. Run `npm run build` to ensure error-free compilation and type/module integrity.
2. Verify visual flow:
   - Initial load: starts at (0, 0, 0.45) with "Let's keep thinking."
   - Advancing through beats 1 to 6 zooms into hubs/nodes without background "Keep" or "thinking." watermarks.
   - Advancing to beat 7 zooms out smoothly to (0, 0, 0.45) and displays "Let's keep thinking." with replay/explore options.
   - Clicking Reset Zoom in controls returns to (0, 0, 0.45).
