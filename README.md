# Cultivating Natural Intelligence
### AI Across Education, Science, Ethics & Living: An Interactive Constellation

An interactive, animated, web-based presentation modeled after Anthropic's "Keep thinking" visual constellation canvas. Designed for a 10-minute keynote to higher-education faculty, staff, and leadership.

## Features
- **Dual Delivery Modes:**
  - **Guided Keynote Mode:** Keyboard/remote clicker navigation (`Space`/`ArrowRight`), cinematic camera flight paths easing between the 7 narrative beats, discreet 10-minute timer, and collapsible presenter cue cards (`T` hotkey).
  - **Free Explore Mode:** Infinite pan/zoom canvas, Anthropic-style zoom controls, and interactive slide-over reader cards with case studies, faculty prompts, and ethical guardrails.
- **Warm Editorial Aesthetic:** Newsreader / Instrument Serif typography, vellum paper backgrounds (`#FBF9F5`), muted terracotta, sage, deep indigo, and amber accents.
- **Zero Server Dependencies:** 100% client-side static build, instant load times, works completely offline once cached.

## Keyboard Shortcuts
- `Space` / `→` / `PageDown`: Next presentation beat
- `←` / `PageUp`: Previous presentation beat
- `T`: Toggle Presenter Notes & 10-minute countdown timer
- `F`: Toggle Fullscreen
- `M`: Switch between Guided Keynote and Free Explore mode
- `Esc`: Close open drawers and return to canvas

## Local Development
```bash
npm install
npm run dev
```

## Deployment on Render.com
1. Create a new **Static Site** on [Render.com](https://render.com).
2. Connect your GitHub repository.
3. Set:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Deploy!
