# MISTRAL-AI — Key Studio

Key Studio is an AI-powered production suite for creators who need to retune beats, adapt vocals to multiple scenes, and publish polished audio/video quickly.

## Problem it solves
Studio recording sessions often lose time on repetitive frequency adjustments and scene-by-scene remixing. Key Studio automates those tasks and keeps all tools in one workflow.

## Core feature modules

### 1) Scene-Aware Beat Frequency Adapter
- Upload track stems or mixed audio.
- Auto-detect BPM, key, and dominant frequency bands.
- Apply one-click **scene profiles** (e.g., cinematic, club, lo-fi, ad spot, kids).
- Preserve vocal clarity while retuning instrument layers.

### 2) Scene Dashboard + Pop-up Selector
- Floating scene dashboard appears during edit/playback.
- Instant scene switching with live preview.
- Side-by-side comparison of scene presets.
- Save scene stacks to project templates.

### 3) Custom Scene Settings
- Create custom scenes by tuning:
  - EQ curve
  - Compression style
  - Reverb/space
  - Harmonic saturation
  - Loudness target (LUFS)
- Build reusable “house sound” presets.

### 4) Audio Recording Workspace
- Direct in-browser recording.
- Auto gain control + noise reduction.
- Takes timeline with quick comping.

### 5) Vocal Split + Stem Intelligence
- Split vocals, bass, drums, and instrumental stems.
- Detect lead vs backing vocals.
- Isolate problematic frequencies per stem.

### 6) Auto Bass-Vocal Generator
- Generate low-register supporting vocal layers from the lead vocal.
- Match timing and phrasing automatically.
- Blend control for subtle or heavy bass presence.

### 7) Multi-Lingual Vocal Generator
- Generate vocal versions in multiple languages from the original performance.
- Preserve emotional tone, timing intent, and melodic contour.
- Accent and pronunciation profile options.

### 8) Retake Sync + Auto Lingual Alignment
- If a user records a retake, language layers auto-resync to the new timing.
- Drift correction aligns syllables to beat grid.
- Lock mode protects manually edited sections.

### 9) Mastered Vocal Blend + Share
- Auto-cleanup chain: de-noise → de-esser → EQ → compression → limiter.
- Blend AI-generated and recorded vocals into a clean master bus.
- Export presets for streaming, social media, and broadcast.

### 10) Prompted Auto Video Generator
- Convert song concept prompts into AI-generated video scenes.
- Mood/style controls synced to track sections (intro, verse, chorus, bridge).
- Auto beat-cut editing.

### 11) Auto Caption Video Generation
- Speech-to-text captions with timing + style templates.
- Multi-language captions from generated vocal language sets.
- Burn-in and sidecar subtitle exports.

### 12) Animated Kids Version Generator
- One-click “Kids Mode” for family-safe animated output.
- Character style presets and color-safe palettes.
- Age-appropriate vocabulary filter for generated captions/text.

## Suggested Key Studio layout
- **Create**: Recording, upload, and stem split.
- **Adapt**: Scene dashboard, frequency tuning, custom scene builder.
- **Vocals**: Vocal split, bass vocal generation, multilingual generation, retake sync.
- **Master**: Blend, clean, and export mastered vocal/audio.
- **Video**: Prompted generator, captions, animated kids version.
- **Publish**: Share links, downloadable packs, and platform presets.

## Example end-to-end workflow
1. Upload beat + vocal take.
2. Auto-split stems and detect key/BPM.
3. Pick a scene from the pop-up dashboard.
4. Fine-tune via custom scene settings.
5. Record retakes and let lingual layers auto-sync.
6. Generate bass vocal support and multilingual versions.
7. Master the vocal blend.
8. Generate prompted video + captions.
9. Create animated kids version.
10. Export and share.

## Recommended architecture (high-level)
- **Frontend**: Scene dashboard UI, timeline editor, preview player.
- **Audio AI services**: stem separation, pitch/formant engine, mastering pipeline.
- **Language AI services**: lyric translation, phoneme alignment, multilingual TTS/voice transfer.
- **Video AI services**: text-to-video, scene stitching, caption compositor, animation pipeline.
- **Orchestration layer**: job queue, GPU workers, artifact storage, publish endpoints.

## Outcomes
- Faster studio iteration.
- Scene-based content adaptation at scale.
- Clean, shareable audio/video outputs from a single studio experience.

## Landing web pages (new)
A static landing site is available under `web/` with separated pages:
- `web/index.html` — product landing and module overview.
- `web/features.html` — feature-by-feature studio breakdown.
- `web/recon-data.html` — reconnaissance data table for planning.
- `web/app.js` — interactive frontend behaviors (scene dashboard modal, custom settings preview, key seed generation).

Run locally:
```bash
cd web
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Additional ideas (previously left out)

### Creator personas
- **Independent Artist**: Needs fast remixing, multilingual releases, and social-ready video.
- **Studio Engineer**: Needs precision scene controls, retake alignment, and master consistency.
- **Agency/Brand Team**: Needs rapid ad-scene adaptation and localization for campaigns.
- **Kids Content Producer**: Needs safe, animated outputs and age-appropriate captions.

### Key dashboards and analytics
- Session-level time saved vs manual workflow.
- Retake count reduction after auto-lingual sync.
- Export quality score (noise floor, clipping, LUFS compliance).
- Engagement metrics for generated video variants.

### Collaboration and workflow ideas
- Role-based project access (artist, engineer, reviewer).
- Comment markers on timeline timestamps.
- Version history with one-click rollback per scene profile.
- Approval pipeline before publishing assets.

### Reliability and quality guardrails
- Automatic clipping detection + repair suggestions.
- Pronunciation confidence scoring for multilingual vocals.
- Caption QA checks (timing overlap, readability, forbidden terms).
- Safety filters for kids mode visuals and language.

### Business model options
- **Free tier**: limited exports + watermark.
- **Pro tier**: advanced mastering, multilingual packs, HD video exports.
- **Studio tier**: team collaboration, project governance, custom scene libraries.
- **Enterprise**: API access, dedicated GPU capacity, compliance controls.

### Implementation roadmap (phased)
1. **Phase 1 (MVP)**: Upload, scene adapter, dashboard, vocal split, basic mastering.
2. **Phase 2**: Multilingual generation, retake sync, auto captions.
3. **Phase 3**: Prompted video engine, kids animation mode, team collaboration.
4. **Phase 4**: API platform, enterprise controls, advanced analytics.


## Open modification, AI agent editing, and key seed generation

### Open Key Studio AI modification
- Every major subsystem should be plugin-driven (audio, vocal, language, video, captioning).
- Teams can replace default AI providers with custom/local models.
- Scene packs and mastering chains should be import/export compatible for portability.

### Agent-driven modifications
- Built-in agent mode can propose and apply safe project changes (scene configs, vocal settings, caption styles, render presets).
- Agent actions should create change logs and human-readable diffs before apply.
- Permission controls: viewer, editor, and release-manager approval levels.

### Key seed generation
- Generate unique **Key Seeds** per project to reproduce AI outputs deterministically (where supported).
- Support seed locking for retakes so multilingual layers and video style remain consistent.
- Store seeds in project metadata for auditability and collaboration handoff.

### Fork + host workflow
- Add one-click **Fork Project** for full project templates (audio setup, scene libraries, caption styles, video prompts).
- Allow users to host forked repos/pages (GitHub Pages, Vercel, Netlify, or custom domain).
- Include sync options: pull upstream updates, keep local overrides, and conflict review.

### Governance for forked ecosystems
- Signed release tags for trusted templates.
- License visibility and attribution metadata attached to each fork.
- Optional moderation policy for public template registries.
