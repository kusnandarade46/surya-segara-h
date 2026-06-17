Add a 6th solution card "Calibration & Maintenance" to fill the empty slot in the Solutions grid on the home page.

## Changes

1. **`src/i18n/id.ts` & `src/i18n/en.ts`** — add new solution entry:
   - ID: title "Kalibrasi & Pemeliharaan", desc "Layanan kalibrasi tersertifikasi, pemeliharaan preventif, dan perbaikan untuk seluruh perangkat deteksi gas dan instrumen keselamatan."
   - EN: title "Calibration & Maintenance", desc "Certified calibration, preventive maintenance, and repair services for all gas detection devices and safety instruments."
   - slug: `calibration-maintenance`

2. **`src/routes/index.tsx`** — add 6th card (numbered `06`) with a wrench/tool icon (lucide `Wrench` or `Settings2`), matching existing card style, linking to `/solutions/calibration-maintenance`.

3. **`src/routes/solutions.$slug.tsx`** — add `calibration-maintenance` entry to the slug data map so the detail page renders (title, hero copy, bullet features, FAQ) consistent with other solutions.

No design system or layout changes; reuses existing card component and grid.
