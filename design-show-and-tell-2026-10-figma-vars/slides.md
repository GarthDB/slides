---
theme: default
highlighter: shiki
lineNumbers: false
transition: slide-left
title: Spectrum Design Data to Figma Vars
mdc: true
class: text-center
info: |
  Design show and tell | Spectrum, Oct 22 2026. 10 minutes.
---

# Spectrum Design Data
## to Figma Variables

Garth Braithwaite

<!--
10 minutes. Matt Davey just showed the Size Token Explorer; this is how those same
tokens get into Figma.
-->

---

# 🌶️ Over-the-Top Smoked Chili

<div class="grid grid-cols-2 gap-6 items-center">
<img src="/chili/smoker.jpg" class="rounded shadow" style="max-height: 300px; object-fit: cover; width: 100%" />
<img src="/chili/pot.jpg" class="rounded shadow" style="max-height: 300px; object-fit: cover; width: 100%" />
</div>

<div class="text-lg pt-4">

Chili base in a Dutch oven, with the beef loaf smoked **over** it so the drippings fall in. Hickory, 275–300°F, 2 hours + 2 hours. Dark chocolate to finish.

</div>

<div class="text-sm opacity-60">Recipe: Erica's Recipes, "Smoked Chili (Over The Top)" · ericasrecipes.com/smoked-chili-over-the-top</div>

<!--
Joke slide. Recipe by Erica's Recipes. Base: onions, green peppers, garlic, chili powder, cumin, crushed and diced tomatoes, kidney beans. Beef loaf (85/15) with Worcestershire and Montreal seasoning smoked on a rack above the pot until 150F, crumbled in, cooked 2 more hours, no extra wood. Stir in dark chocolate at the end. (My pot also has extra beans and corn.)
-->

---

# Your Figma variables can now be generated

From the same data that ships to code. Not copied by hand. Not synced back and forth.

<div class="pt-8 text-2xl">

`design-data figma export`

</div>

<!--
The hook. One command writes Spectrum tokens into a Figma file as variables.
-->

---

# Before and after

<img src="/diagrams/before-after.png" class="mx-auto" style="max-height: 440px" />

<!--
Before: designers authored in Figma, Tokens Studio synced to a repo through an automated PR, and everything fanned out to platforms. One way, Figma to code.
After: Design Data is the source. Edits are validated, then Figma Variables and platform outputs are both generated from it.
Token Studio sunset: phases 0 to 2 are done; retiring the inbound sync is next.
-->

---

# Why this matters

- **One source of truth.** Figma and code read the same data
- **No drift.** Re-run the export and the file matches the data
- **Deprecations handled.** Deprecated tokens can alias to their replacement
- **Diffs, not guesses.** `figma diff` shows what differs between data and file

<!--
Keep it to the designer benefits. The flags are in the notes only:
--redirect-deprecated, figma audit, figma diff (match, value-mismatch, figma-only, design-data-only, renamed).
-->

---

# What it produces: S2 / Web (POC)

<img src="/screens/size-poc-cover.png" class="mx-auto rounded shadow" style="max-height: 400px" />

Library file: components, variables, styles. Size variables included.

<!--
Size Variables POC file: https://www.figma.com/design/6VgZUC8QxFDxsHWD0Jdjfj/S2---Web--Size-variables-POC-
This is the snapshot release version of the size token work Matt just showed.
-->

---

# Generated file in use

<div class="grid grid-cols-2 gap-8 items-center">
<img src="/screens/s2-web-poc-button.png" class="mx-auto rounded shadow" style="max-height: 420px" />
<div>

Button page from the generated **S2 - Web (POC)** file.

Components bind to the variables the export wrote.

</div>
</div>

<!--
Generated file POC: https://www.figma.com/design/rNdFQYqXO2Nd3zMWnQD5U4/S2---Web--POC-
Open the file live if time allows: Variables panel, collections, modes.
-->

---

# How it works

<img src="/diagrams/pipeline.png" class="mx-auto" style="max-height: 420px" />

<!--
Read the Design Data cascade, resolve it into a token graph, derive Figma collections from the declared mode sets, map to variables, write through the Figma Variables REST API.
No legacy token package is involved; export reads packages/design-data directly.
-->

---

# Next: iOS variables

<img src="/diagrams/ios.png" class="mx-auto" style="max-height: 400px" />

Same export, filtered by the iOS platform manifest.

<!--
Proposed, not built. The iOS platform manifest (platforms/ios/manifest.json) is an incubating POC: it pins foundation 3.6.0, includes color, size, typography, corner radius, border width and opacity, excludes wireframe, and has three teal overrides plus iOS-only extensions (1,118 imported token records, tab-bar). design-data already resolves a manifest with --platform ios. The Figma export doesn't take a platform yet; that is the proposed work. Overrides must keep the token's type.
-->

---

# What lands in Figma

<img src="/diagrams/aliases.png" class="mx-auto" style="max-height: 440px" />

<!--
Mode-set tokens become multi-mode variables. Aliases become VARIABLE_ALIAS. Deprecated tokens keep their value unless --redirect-deprecated is set.
Not exported: typography, drop shadows, gradients (no Variable type) and Android dp sizes. They are listed in the export summary.
Optional flags: --modeless-layer, --no-folder-prefix.
-->

---

# Writes are guarded

<div class="grid grid-cols-2 gap-8 items-center">
<div>

- Baseline read, then a re-check before writing
- Changed file? The write aborts
- Readback verifies values, aliases and untouched variables
- Failures exit nonzero

</div>
<img src="/diagrams/safe-write.png" class="mx-auto" style="max-height: 440px" />
</div>

<!--
Best-effort guard, not an atomic transaction. The CLI never retries a mutation, and ambiguous outcomes are reported. It does not do the Figma library Publish step.
-->

---

# What's next

- Retire the Token Studio inbound sync (roadmap phase 3)
- Publish flow for the generated library
- A native mapper over the token graph

**Where would you want this to run?** On every token change, nightly, or on demand?

---
class: text-center
---

# Thanks

Questions?
