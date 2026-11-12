---
theme: default
title: Design Data Visual Rendering
info: |
  Design Data Visual Rendering: Walkthrough and Next Steps, for designers.
  Copyright 2026 Adobe. All rights reserved.
transition: slide-left
fonts:
  provider: none
---

<!-- Copyright 2026 Adobe. All rights reserved. -->

# Design Data Visual Rendering

### Walkthrough and next steps

<div class="abs-br m-6 text-sm opacity-60">
design-data-visual-render.entapp.adproto.com
</div>

<!--
Audience: designers. I'm after reactions: what's useful, what's missing, and
who else should be in the room. Nobody needed to prepare.
-->

---

# Where this started

A Figma prototype by Nadeen Abuhasan, built for Spectrum Hub.

> Design Data can render a visual for any component, so nobody has to draw each one by hand.

<div class="grid grid-cols-2 gap-6 mt-8">
<div>

**What I built**

Generates component visuals straight from Design Data.

</div>
<div>

**What I want from you**

Reactions, and help deciding where it goes next.

</div>
</div>

<!--
Link the Figma prototype here if useful. Credit Nadeen: this started from her
prototype.
-->

---

# The plan for the hour

1. Walk through what works today
2. Where it could go
3. Other platforms (I want to try iOS)
4. Next steps, and how this fits with web design and the website

<!--
Mostly discussion. Interrupt me any time.
-->

---
layout: section
---

# 1 · What works today

---

# What the renderer knows about a component

<div class="grid grid-cols-2 gap-8">
<div>

**Anatomy**
The named parts: container, icon, label, focus indicator.

**Options**
Variant, style, size, and states like disabled or pending.

</div>
<div>

**Tokens**
Every color, size and spacing value is a token.

**Relationships**
Which token sets which part of which component.

</div>
</div>

<div class="mt-8 text-lg">

A render is those four things combined. Nothing is drawn by hand.

</div>

<!--
Keep this plain-language. The JSON versions live in slides.md if someone asks.
97 components have anatomy and options declared, and there are over 6,000
component-to-token relationships.
-->

---

# Figma stays where you author

<ArchifyFrame name="figma-authoring" max-height="380px" />

<!--
- Figma variables remain the authoring surface.
- Changes you make arrive as a reviewable change to the data, not a Slack
  message.
- Tokens keep a stable id, so a rename doesn't break anything.
-->

---

# A visual recipe: layout tied to tokens

<ArchifyFrame name="render-pipeline" max-height="320px" />

<div class="mt-4 text-lg">

The recipe holds **no numbers**. Change a token and the render changes with it.

</div>

<!--
Seven recipes today: accordion, action-button, badge, button, checkbox,
radio-button and switch. Anatomy names are the parts, and the values come
through the token relationships.
-->

---
layout: none
title: "Hub demo"
---

<img src="/screenshots/rsp-page.png" class="w-full h-full object-contain" />

<!--
LIVE DEMO (hub is behind Okta, sign in first). Backup screenshots follow.
1. Open Button. Flip variant, style, size and states.
2. Anatomy inspector: the named parts.
3. Specs inspector: each dimension and the token it came from.
4. Light and dark. Zoom with +/-, 0 to fit, F for full screen.
5. Show another component: switch, checkbox or badge.
-->

---
layout: none
title: "Hub demo: anatomy and specs"
---

<div class="grid grid-cols-2 gap-4 h-full p-6 items-center content-center">
<img src="/screenshots/rsp-anatomy.png" class="w-full rounded-xl" />
<img src="/screenshots/rsp-specs.png" class="w-full rounded-xl" />
</div>

---
layout: section
---

# 2 · Where it could go

<!--
For each idea: what exists, then a question for the room. Take notes as we go.
-->

---

# Hub component visuals

<div class="grid grid-cols-2 gap-6 items-center">
<img src="/screenshots/rsp-usage.png" class="w-full rounded-xl" />
<div>

**Today:** the hub renders any component that has a recipe.

**Where it could go:** every Spectrum Hub component page gets its visual from Design Data.

<div class="mt-6 text-lg">

**What would Hub need beyond this?**

</div>
</div>
</div>

---

# S2 token spec files, generated

<div class="grid grid-cols-5 gap-6 items-start">
<div class="col-span-3">
  <img src="/screenshots/figma-spec-spacing.png" class="w-full rounded-xl" />
</div>
<div class="col-span-2">
  <img src="/screenshots/figma-spec-cover.png" class="w-full rounded-xl" />
  <ul class="mt-4 text-sm">
    <li>Measurements and the token behind each value</li>
    <li>"Values updated" badges when a token changes</li>
    <li>Changelog, one row per PR</li>
    <li>Cover says: don't edit. Add notes on the Notes page.</li>
  </ul>
</div>
</div>

<div class="mt-4 text-lg">

**Would this replace the spec files you maintain by hand? What's missing?**

</div>

<!--
This is the generated Button spec in Figma (Button – spec (generated)).
The old S2 token spec file is deprecated because it drifted from the data.
Generated files are regenerated only when a token changes. No one redraws
frames. This isn't a criticism of the people who maintained them: the format
can't keep pace with token changes.
-->

---

# Visual comparison testing

<ArchifyFrame name="comparison-pipeline" max-height="320px" />

<div class="mt-4 text-lg">

Compare the shipped component against the data. **Who should triage a mismatch: designer, engineer, or data owner?**

</div>

<!--
Be accurate about status: Storybook adapter supports React Spectrum and SWC,
but only the RSP S2 button mapping is committed today. Each mismatch reports
expected, measured, delta and the responsible token. Numbers decide, and
pixels help a person look.
-->

---

# Sticker sheets

Every variant, style, size and state, laid out in one grid. Generated the same way, without the measurement annotations.

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="cmp-facts"><li>Copy a component for a mock-up</li><li>Review a whole component at a glance</li><li>Spot a missing state</li></div>
<div class="text-lg">

**Would you use it? Where should it live: Figma library, Hub, or the website?**

</div>
</div>

<!--
Nothing exists yet. The renderer already produces every combination, so this is
the same renders in a grid. Different from the spec file, which is one
component, annotated.
-->

---

# An Illustrator plugin, like the old XD one

<div class="grid grid-cols-2 gap-8">
<div>

**Looks feasible.** Most of the hard parts exist:

- A renderer (CLI, and a small WASM build)
- Option data for an inspector panel
- A token binding on every part

**What Illustrator gives us**

- SVG import works today, but text sits slightly off and token info is dropped
- No real variables: global swatches for color, character styles for type
- UXP is the platform XD used, and it's the future. Third-party beta is around Dec 2026

</div>
<div>

**Possible plan**

1. Prove the drawing with a script: scene JSON in, named layers out, re-run to update in place
2. Get UXP access in parallel
3. Build the panel: pick a component, set options, redraw
4. XD-style extras: swatches with mode switching, re-render after a Spectrum update

<div class="mt-4 text-lg">

**Would you use it? What did you rely on in the XD plugin?**

</div>
</div>
</div>

<!--
Research summary, not a commitment. Unknowns to check early:
- Does WASM load in Illustrator's UXP?
- Does the render request saved on a group survive copy/paste and save?
- Do current internal builds load plugins through the UXP Developer Tool?
CEP still works but is being retired (off by default December 2028).
Contact for UXP access: @aksaxena (Illustrator UXP engineering manager). We can
request internal builds ourselves through IAM (generic-illustrator-release-RO).
-->

---

# What else?

<div class="text-2xl mt-12">

What visual does your team draw by hand today?

</div>

<div class="mt-8 text-lg opacity-70">

Capture answers here live.

</div>

---
layout: section
---

# 3 · Other platforms

---

# Two buttons, one name

<div class="grid grid-cols-2 gap-6 items-start">
<div>
  <div class="cmp-label">React Spectrum <span>foundation <code>button</code></span></div>
  <img src="/screenshots/rsp-usage.png" class="w-full rounded-xl" />
  <ul class="cmp-facts">
    <li>4 variants × 2 styles</li>
    <li>Sizes s, m, l, xl</li>
    <li>32px tall, radius 16</li>
  </ul>
</div>
<div>
  <div class="cmp-label ios">Spectrum iOS <span><code>button-ios</code></span></div>
  <img src="/screenshots/ios-usage.png" class="w-full rounded-xl" />
  <ul class="cmp-facts ios">
    <li>Primary and accent</li>
    <li>Sizes s, m, l</li>
    <li>39px tall, radius 19.5</li>
  </ul>
</div>
</div>

<!--
Same component name and the same parts, but different data. Both are drawn by
the same renderer. Android would follow the same path.
-->

---
layout: none
title: "iOS hub"
---

<div class="grid grid-cols-2 gap-4 h-full p-6 items-center content-center">
<img src="/screenshots/ios-anatomy.png" class="w-full rounded-xl" />
<img src="/screenshots/ios-specs.png" class="w-full rounded-xl" />
</div>

<!--
Backup for a live look at the iOS build (/spios/). I want to try more of iOS.
-->

---
layout: section
---

# 4 · Next steps

---

# Next steps: pick three or four

<table class="cmp-table">
  <thead><tr><th>Idea</th><th>First step</th></tr></thead>
  <tbody>
    <tr><th>Hub component visuals</th><td>Which components first?</td></tr>
    <tr><th>S2 token spec files</th><td>Try on one component</td></tr>
    <tr><th>Visual comparison</th><td>Agree how to triage</td></tr>
    <tr><th>Sticker sheets</th><td>Prototype one component</td></tr>
    <tr><th>Illustrator plugin</th><td>Script prototype, then UXP access</td></tr>
    <tr><th>iOS</th><td>Extend the recipes</td></tr>
    <tr><th>Web design and the website</th><td>Where does this fit?</td></tr>
  </tbody>
</table>

<div class="mt-6 text-lg">

**Who else should be in the room?**

</div>

<!--
Fill in live. Ask for volunteers and who owns each one.
-->

---
layout: center
---

# Thank you

[design-data-visual-render.entapp.adproto.com](https://design-data-visual-render.entapp.adproto.com/)
