# Design Spec: Institutional Data Sovereignty Node & Custom Visual Vignette

## 1. Overview
This design adds a dedicated satellite node to the **Ethics & Environment** constellation hub centered on **Localized and Custom AI Models for Maintaining Data Sovereignty and Data Protection**.

The addition includes:
1. **Node Data & Presentation Stop Integration**: Full case study, faculty action, quote, and coordinates in `src/data/presentationData.js`.
2. **Custom SVG Visual Vignette**: A bespoke 100x100 micro-artwork in `src/components/VisualArtifacts.jsx` depicting a sovereign architectural shield/vault in Crimson Red and Off-White.
3. **Keynote Beat 5 Integration**: Linking the node into the `stop-ethics` beat with updated speaker cues and highlight state.

---

## 2. Technical Specification

### A. Node Definition in `src/data/presentationData.js`
- **ID**: `node-data-sovereignty`
- **Hub**: `hub-ethics`
- **Position**: `x: 360, y: 170` (balances the upper-left quadrant of `hub-ethics` at `(520, 310)`)
- **Tag**: `Sovereignty`
- **Title**: `Institutional Data Sovereignty`
- **Summary**: Deploying campus-governed, custom-tuned models in secure on-premise enclaves to ensure FERPA compliance, preserve student privacy, and protect university IP from commercial model scraping.
- **Case Study**: Institutions deploying private sovereign compute clusters running open-weights models behind campus firewalls, ensuring zero telemetry or student data retention by commercial cloud vendors.
- **Faculty Action**: Require institutional procurement to mandate zero-data-retention agreements, and provide campus-hosted API endpoints for classroom and laboratory workloads.
- **Ethics/Ecology**: Data sovereignty is academic independence: universities must not trade student intellectual rights and proprietary research for commercial convenience.
- **Key Quote**: "True academic freedom in an automated age requires owning the ground upon which your intelligence runs."

### B. Keynote Stop 5 (`stop-ethics`) Update
- Add `"node-data-sovereignty"` to `activeNodeIds`:
  `["node-carbon-water", "node-slm-frugality", "node-bias-hallucination", "node-data-sovereignty"]`
- Add cue to `speakerCues`:
  `"Data Sovereignty: Campus-hosted private models defending FERPA compliance, student privacy, and uncompromised research IP."`

### C. SVG Micro-Artwork in `src/components/VisualArtifacts.jsx`
- Add `case 'node-data-sovereignty':`
- Visual Theme: Sovereign Cryptographic Citadel & Shield
  - Background: Deep Obsidian / Charcoal (`#181518`)
  - Shield / Citadel Arch: Crimson Red (`#A51C30`) with off-white and amber accents (`#FAF9F6`, `#D4AF37`)
  - Core: Concentric geometric vault rings and keyhole nexus symbol
  - Defensive perimeter lines with dashed integrity matrix

---

## 3. Verification & Acceptance Criteria
1. `npm run build` succeeds without errors.
2. The node appears in the constellation at `(360, 170)` under the Ethics hub with bezier connective line.
3. Clicking the node opens the `NodeDetailDrawer` with all rich content, case study, quote, and action items.
4. During keynote beat 5 (`05 / 07 • Ethics & Environment`), the node card pulses and highlights alongside the other 3 ethics nodes.
