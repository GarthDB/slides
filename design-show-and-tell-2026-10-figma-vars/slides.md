---
theme: apple-basic
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

# Why designers should care

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

# Over-the-top chili

<div class="grid grid-cols-2 gap-6">
<div class="rounded border-2 border-dashed p-24 opacity-50">Photo 1</div>
<div class="rounded border-2 border-dashed p-24 opacity-50">Photo 2</div>
</div>

<!--
TODO: save photos in public/chili/ and replace the placeholders with <img src="/chili/chili-1.jpg" /> etc.
-->

---
class: text-center
---

# Thanks

Questions?
