---
theme: default
title: Design data → visual recipes → every platform
info: |
  Spectrum Engineering Huddle. Copyright 2026 Adobe. All rights reserved.
  First look at the visual-render hub demo for the iOS, React Spectrum,
  Spectrum Web Components and Android teams.
transition: slide-left
fonts:
  provider: none
---

<!-- Copyright 2026 Adobe. All rights reserved. -->

# One description of a component, every platform

### Spectrum Engineering Huddle

<div class="abs-br m-6 text-sm opacity-60">
design-data-visual-render.entapp.adproto.com
</div>

<!--
Audience: iOS, React Spectrum, SWC and Android engineers. This is a first look
at the hub demo and what it means for each team. Everything you'll see is
generated from data in adobe/spectrum-design-data. Nothing is hand-drawn.
-->

---

# Where we're going

1. Design data
2. Visual recipes
3. Spec files
4. Visual comparison
5. Spectrum iOS

<!--
Five stops. The live hub demo comes up in the second and the fifth.
1. The design data we already have: anatomy, options, tokens, relationships,
   registry, Figma variables, platform manifests. Some of this is review, but
   everything after it uses this vocabulary.
2. Visual recipes tie all of that data together, and the hub demo renders them
   with anatomy and spec inspectors.
3. Spec files: why the Figma ones are painful to maintain, and how we generate
   them instead.
4. Visual comparison: checking real SWC and React Spectrum components against
   the data.
5. iOS: the same pipeline for Spectrum iOS, through a platform manifest.
-->

---
layout: section
---

# 1 · The design data we have today

<!--
Source of truth: packages/design-data in adobe/spectrum-design-data.
packages/tokens (@adobe/spectrum-tokens) is now generated legacy output.
packages/design-data is the source.
-->

---

# Components: anatomy and options

<div class="grid grid-cols-2 gap-6">

```json
// components/button.json → anatomy
[
  { "name": "container", "required": true,
    "contains": ["icon", "progress", "label"] },
  { "name": "icon" },
  { "name": "progress" },
  { "name": "label" },
  { "name": "focus-indicator",
    "presentIn": ["focus"] }
]
```

```json
// components/button.json → options
{
  "variant": { "default": "accent",
    "values": ["accent", "negative",
               "primary", "secondary"] },
  "style":   { "default": "fill",
    "values": ["fill", "outline"] },
  "size":    { "default": "m",
    "values": ["s", "m", "l", "xl"] },
  "isDisabled": { "type": "boolean" },
  "isPending":  { "type": "boolean" },
  "staticColor": { "values": ["white", "black"] }
}
```

</div>

<!--
There are 97 component declarations. Each lists its parts (anatomy) and the
options a consumer can set.
Anatomy gives parts shared names. Options are the platform-neutral API. Your
props, attributes or Swift parameters should map onto these. Constraints, like
icon being required when isLabelHidden is set, live in the same file.
-->

---

# Tokens with name objects

```json {2-10|8}
{
  "name": {
    "property": "color",
    "object": "background",
    "colorRole": "accent",
    "state": ["default"],
    "colorScheme": "light",
    "legacyKey": "accent-background-color-default"
  },
  "$ref": "90d82778-1cbb-47c0-aab9-b6e38a9cdc54",
  "uuid": "d9d8488d-9b38-47e0-9660-dcad040f3ca8"
}
```

<!--
The name is structured data, not a string we parse. We keep the legacy string
as legacyKey.
- Each field (property, object, colorRole, state, size, component and so on) is
  registered. There are 33 today.
- Every token has a stable uuid, and aliases point at the uuid, not the name.
- Each platform formats the name its own way: --spectrum-*, camelCase.
Since the name is no longer the identity, renaming is cheap and platforms can
format names without forking the data.
-->

---

# Component ↔ token relationships

```json
// relationships/button.json
{
  "scope": { "component": "button", "property": "component-height-100" },
  "context": "Minimum height",
  "$ref": "3d7afc6a-f66b-4033-9ed4-e60cde661a18"
}
```

<!--
Each relationship says which token sets which part of which component, and in
what context. There are over 6,000 across 91 components.
The old token spec sheets tried to say this in a picture. Now you can query it:
"every token that styles a button's container height".
Relationships connect the component (anatomy and options) to the tokens, and
visual recipes depend on them heavily.
-->

---

# The registry (our glossary)

<div class="grid grid-cols-3 gap-4">

<div>

**Structure**
- `anatomy-terms`
- `components`
- `structures`, `substructures`
- `positions`, `orientations`

</div>
<div>

**Appearance**
- `variants`, `sizes`, `shapes`
- `color-roles`, `color-families`
- `typography-*`
- `densities`, `scale-values`

</div>
<div>

**Behavior and meta**
- `states`
- `motion-roles`, `easing-curves`
- `platforms`, `platform-implementations`
- `glossary` (defined terms)

</div>
</div>

<!--
33 controlled vocabularies live under registry/, so every file uses the same
words. Validation rejects any value that isn't in the registry, so "pressed"
versus "down" versus "active" gets settled once.
-->

---

# Authoring: Figma variables and token mapping

<ArchifyFrame name="figma-authoring" max-height="380px" />

<!--
- Figma variables stay the designers' authoring surface.
- The Figma plugin uses the Variables REST API to read, import and diff
  variables against the dataset.
- Each token maps to a collection (.Color theme or .Platform scale) as
  {prefix}/{token-name}, and its modes (light/dark, desktop/mobile) become
  Figma modes.
- Imported tokens keep a stable uuid and conceptId, so identity survives a
  rename.
- Design changes land as reviewed PRs with changesets, like code.
For engineers, what designers change in Figma arrives as a reviewable data
diff instead of a Slack message.
-->

---

# Platform manifests

<div class="grid grid-cols-2 gap-6">

```json
// platforms/web-components/manifest.json
{
  "platform": "web-components",
  "foundationVersion":
    "@adobe/spectrum-design-data@3.5.0",
  "formatting": { "prefix": "--spectrum-" }
}
```

```json
// platforms/ios/manifest.json (excerpt)
{
  "platform": "ios",
  "foundationVersion": "3.6.0",
  "exclude": ["colorScheme=wireframe"],
  "componentAliases": { "button": "button-ios" },
  "overrides": [{ "target": "736e…", "value": "rgba(9,144,120,1)" }],
  "formatting": { "casing": "camelCase" }
}
```

</div>

<!--
Each platform gets a small file. It pins a foundation version, then filters,
overrides and extends it. Foundation data flows down into the platform.
Three are incubating today: react-spectrum, web-components and ios. Any of
them can be ejected to a team-owned repo with its history
(design-data platform eject).
We come back to the iOS manifest at the end.
-->

---
layout: section
---

# 2 · Visual recipes

<!--
Anatomy, options, relationships and tokens combine into a component you can
see.
-->

---

# A visual recipe is layout, bound to data

```json {all|5-7|9-11|12-18}
// visuals/button.json (excerpt)
{
  "component": "button",
  "sizeScale": { "s": 75, "m": 100, "l": 200, "xl": 300 },
  "parts": {
    "container": {
      "kind": "box", "children": ["icon", "progress", "label"],
      "props": {
        "height": { "relationship": {
          "property": "component-height-{sizeIndex}",
          "context": "Minimum height" } },
        "paddingInlineStart": [
          { "relationship": {
              "property": "component-pill-edge-to-visual-{sizeIndex}" } },
          { "when": { "options": { "isLabelHidden": true } },
            "relationship": {
              "property": "component-pill-edge-to-visual-only-{sizeIndex}" } }
        ]
}}}}
```

<!--
Parts are anatomy names, and "when" is options and states. Values come through
relationships, so the recipe holds no numbers: change a token and the render
changes. There are 7 foundation recipes today: accordion, action-button,
badge, button, checkbox, radio-button and switch.
-->

---

# How a render is produced

<ArchifyFrame name="render-pipeline" max-height="300px" />

```bash
design-data render button --size l --option style=outline -o button.svg
```

<!--
We wrote one layout engine, in Rust. The website's WASM output matches the CLI
byte for byte, and spec sheets and Figma use the same scenes.
This is the web example, rendered from the recipe by the CLI. The scene also
records which token produced each value, and that is what powers the
inspectors and the comparison reports later.
-->

---
layout: none
title: "Hub demo (React Spectrum)"
---

<img src="/screenshots/rsp-page.png" class="w-full h-full object-contain" />

<!--
LIVE DEMO: switch to the browser tab with the hub (React Spectrum build). Screenshots on the next slides are the backup. Click path:
1. Open Button. Flip variant, style, size and states in the Spectrum Web
   Components control panel.
2. Turn on the Anatomy inspector. The parts are named from
   components/button.json.
3. Turn on Specs to see dimension bars and the token each value comes from.
4. Switch the color scheme between light and dark. Zoom with +/-, 0 to fit,
   F for full screen.
5. Show another recipe: switch, checkbox or badge.
6. Point out there's no server. The Rust solver runs in the page as ~300 KB of
   WASM.
The hub is behind Okta, so open it and sign in before the talk.
After the demo, call out:
- Anatomy inspector: part names come from the anatomy list, not CSS classes.
- Specs inspector: every dimension shows the token it came from.
- Controls: the component's options, read from the component declaration.
- No server: static files, with variants loaded on demand.
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

# 3 · Spec files

<!--
Why Figma spec files are hard to keep right:
- Someone draws them by hand for every component, size and state.
- When a token changes, someone has to find and redraw the affected frames.
- Nothing tells you a frame is stale.
- The old S2 token spec file is deprecated because it no longer matches the
  data.
Engineers end up asking which is right, the spec file or the tokens. That
should never be in doubt. This isn't a criticism of the people maintaining
them: the format can't keep up with how fast tokens change.
-->

---

# Generate them from the same recipe

<ArchifyFrame name="spec-sheet-pipeline" max-height="380px" />

<!--
- It uses the same renderer as design-data render, so the spec matches the
  component.
- Token rows, "Values updated" badges and a per-component changelog come with
  it.
- plan.mjs finds which Figma files are stale and regenerates only those.
LIVE (browser tab): the generated spec sheet for Button.
- The visual blocks are the pre-rendered SVG plus measurement bars.
- Show the token table and the "Values updated" badges.
- The Changelog tab lists releases, one row per PR.
- The /specs/ index shows version, latest release and whether each component
  has a visual.
- The same JSON drives the Figma spec file output.
-->

---
layout: section
---

# 4 · Visual comparison testing

<!--
The question: does the shipped component match the data?
-->

---

# Checking real components against the data

<ArchifyFrame name="comparison-pipeline" max-height="380px" />

<!--
Numbers decide, and the pixels help a person look.
- The adapter reads the real component's layout box and computed styles from
  Storybook.
- Each difference reports expected, measured, delta, tolerance and the token
  responsible.
- Default tolerances are size within 1 and color within 3.
Be accurate about status: the Storybook adapter supports React Spectrum
(--source rsp) and SWC (--source swc). The only committed mapping today is the
RSP S2 button. iOS uses a simulator adapter against the Catalog app, and those
images stay internal.
Label widths: the renderer uses Source Sans 3 metrics, so width diffs are
flagged as a possible text-estimate cause.
-->

---

# What a difference looks like

One row per part and property. The comparison reads the real component and checks it against what the data says.

<div class="diff-table">
<div class="diff-id">button-m-style-accent-light-desktop</div>
<table>
  <thead :class="{ dim: $clicks === 3 }">
    <tr><th>part</th><th>property</th><th>expected</th><th>measured</th><th>delta</th><th>token</th><th>result</th><th>layer</th></tr>
  </thead>
  <tbody>
    <tr :class="{ dim: [1, 3, 4].includes($clicks) }">
      <td>container</td><td>height</td><td>32</td><td>32</td><td>0</td><td>component-height-100</td><td class="pass">✓</td><td></td>
    </tr>
    <tr>
      <td>container</td><td>paddingLeft</td><td>14</td><td>16</td><td class="fail">2</td><td>component-pill-edge-to-…</td><td class="fail">✗ &gt; ±1</td><td><span class="tag">layer:token</span></td>
    </tr>
    <tr :class="{ dim: [1, 3, 4].includes($clicks) }">
      <td>label</td><td>color</td><td>#fff</td><td>#fff</td><td>0</td><td>…</td><td class="pass">✓</td><td></td>
    </tr>
  </tbody>
</table>
</div>

<ul>
  <li v-click="1"><b>expected</b> is what the design data resolves to. <b>measured</b> is what the shipped component renders.</li>
  <li v-click="2"><b>token</b> names the token responsible, so you know where to look.</li>
  <li v-click="3">A row fails when the delta is over tolerance (±1 here). This one is <code>paddingLeft</code>: 14 expected, 16 measured.</li>
  <li v-click="4">A failing row also gets a suggested <code>layer:</code> label: <code>token</code>, <code>recipe</code> or <code>renderer</code>. Triage makes the final call.</li>
</ul>

<!--
The layer column is a simplification. In the report JSON, each difference has
part, property, expected, measured, delta, tolerance and token, plus a gap
suggestion (gap.title and gap.labels). The layer: label in gap.labels is only
a guess:
- token: the scene value is token-bound, so the data and the component
  disagree.
- recipe: the scene value isn't token-bound, so the recipe is the likely
  cause.
- renderer: the label-width case, where our text-width estimate (R2) may be
  the cause rather than the data.
Triage decides the real layer, and each finding becomes one bead under qkj5.
This row is illustrative, not a real run. The goal is that a disagreement
becomes an issue with a clear owner instead of a long thread.
-->

---
layout: section
---

# 5 · Spectrum iOS

<!--
Same pipeline, with iOS data.
-->

---

# The iOS button recipe

```json
// platforms/ios/extensions/visuals/button-ios.json
{
  "component": "button-ios",
  "sizeScale": { "s": 75, "m": 100, "l": 200 },
  "parts": {
    "container": {
      "kind": "box",
      "children": ["icon", "label"],
      "props": {
        "paddingInlineStart": { "token": {
          "component": "button-ios",
          "size": "{size}",
          "property": "h-padding" } }
      }
    }
  }
}
```

<!--
From the foundation, iOS takes the shared tokens, components, relationships
and registry. It filters out the wireframe color scheme, overrides a few
values by uuid, and uses camelCase names.
iOS adds its own data under platforms/ios/extensions/: components such as
button-ios, switch-ios and tab-bar-ios, iOS tokens, contrast and state
extensions, implementation mappings to Spectrum iOS, and visual recipes for
button-ios and switch-ios.
With componentAliases { button: button-ios }, asking for "button" on iOS gives
you the iOS recipe.
Proposal 014: a platform recipe replaces the foundation recipe of the same
name, and platform-owned components can bind platform tokens directly. The iOS
team's data stays in its own layer and can be ejected to its own repo.
-->

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
Same component name, same anatomy parts (container, icon, label), different
data. On the left is the foundation button as React Spectrum renders it, with
four variants (accent, negative, primary, secondary) in fill and outline
styles, and sizes s to xl. On the right is button-ios, which today covers the
primary and accent styles with sizes s, m and l; the remaining iOS styles are
tracked in p6ga.8.6. Medium measures 81.9 x 32 with radius 16 on the
foundation and 96.2 x 39.0 with radius 19.5 on iOS (from the scene values on
the rendered SVGs, shown on the token slide). Both are drawn by the same
renderer. Only the data differs.
-->

---
layout: none
title: "Hub demo (Spectrum iOS)"
---

<img src="/screenshots/ios-page.png" class="w-full h-full object-contain" />

<!--
LIVE: switch to the browser tab with the iOS build (/spios/). Screenshots on the next slides are the backup.
- Button is button-ios, with iOS sizes (s, m, l), padding and colors.
- The anatomy and specs inspectors work the same way.
- Switch is switch-ios.
- Components without an iOS recipe fall back to the foundation recipe, or show
  dimmed.
- The platform switcher jumps between React Spectrum and iOS on the same
  component.
-->

---
layout: none
title: "iOS hub: anatomy and specs"
---

<div class="grid grid-cols-2 gap-4 h-full p-6 items-center content-center">
<img src="/screenshots/ios-anatomy.png" class="w-full rounded-xl" />
<img src="/screenshots/ios-specs.png" class="w-full rounded-xl" />
</div>

---

# Same component, two platforms

<table class="cmp-table">
  <thead><tr><th></th><th>React Spectrum (foundation)</th><th class="ios">Spectrum iOS</th></tr></thead>
  <tbody>
    <tr v-click><th>height</th><td>component-height-100-desktop</td><td class="ios">not set: padding + content</td></tr>
    <tr v-click><th>paddingInlineStart</th><td>base-padding-horizontal-medium</td><td class="ios">button-md-h-padding</td></tr>
    <tr v-click><th>paddingBlockStart</th><td class="none">not set</td><td class="ios">button-md-v-padding</td></tr>
    <tr v-click><th>fill</th><td>accent-background-color-default</td><td class="ios">button-accent-background-color-default</td></tr>
    <tr v-click class="result"><th>rendered</th><td>81.9 × 32, radius 16</td><td class="ios">96.2 × 39.0, radius 19.5</td></tr>
  </tbody>
</table>

<!--
The scene records which token set each value. This compares the foundation
button with --platform ios. Anatomy names, options and renderer are the same,
and the data is different and owned by the iOS layer.
The values come from the data-tokens attributes on the rendered SVGs:
design-data render button versus design-data render button --platform ios
-->

---

# The same command, a different platform

```bash
design-data render button                    # foundation / web
design-data render button --platform ios     # resolves to button-ios
design-data site --platform ios              # the hub build you just saw
design-data validate-manifest --platform ios
```

<ArchifyFrame name="ios-manifest-merge" max-height="300px" />

<!--
The Android team gets the same path: a manifest, its extensions and its own
recipes.
-->

---

# What this means for implementation teams

1. One source
2. Harder for specs to drift
3. Reports that name the token
4. Implementations manage their own data

<!--
- One source for anatomy, options and values, rendered the way your platform
  renders it.
- It's harder for spec files to drift, because they're generated.
- Comparison reports that name the token behind every mismatch.
- Implementations manage their own data: a platform manifest you can own, with
  your platform's data and recipes.
Where we'd like your help:
- Map your component props to the shared options and anatomy names.
- Try a Storybook or Catalog capture for one component.
- Tell us which components need recipes first.
-->

---
layout: center
---

# Questions

[design-data-visual-render.entapp.adproto.com](https://design-data-visual-render.entapp.adproto.com/) · `adobe/spectrum-design-data`
