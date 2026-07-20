# Design Data Offsite Presentation

**Meeting:** "Learning about the data system with Garth" — Mon Jul 20, 2026, 7:30-9:00 AM, Teams. Aaron Brownlee set up/organizes the invite from the EU side (managing logistics for the offsite room there) — this is the EU offsite presentation, not a 1:1.

Audience: engineers + designers at the EU offsite, familiar with `@adobe/spectrum-tokens` as published, unfamiliar with `packages/design-data-spec/` internals.

## 1. Title / framing
- "From flat strings to structured design data" — the problem we're solving today

## 2. The legacy world: hyphen-delimited names carry hidden metadata
- Example: `tab-item-bottom-to-text-small` (packages/tokens/src/layout-component.json) — one string encodes component (`tab-item`), a from/to spacing relationship (`bottom-to-text`), and a size (`small`)
- Canonical spec-doc example: `accent-background-color-hover` bundles component, object, property, and state into one opaque token
- The brittleness: renaming, reordering, or adding a concept means restructuring the whole string; nothing enforces which words are valid where; tooling can only pattern-match, not query
- Legacy debt is tracked explicitly (`packages/tokens/naming-exceptions.json`) — this isn't hypothetical, it's a known liability today

## 3. The fix: the name object
- Same token, now a structured JSON object of typed fields instead of a string:
```json
{ "component": "accordion", "property": "space-between", "from": "bottom", "to": "handle" }
```
- Fields are declared and typed — semantic (`component`, `state`, `variant`, `size`, `anatomy`, `object`...) or mode-set (`colorScheme`, `scale`, `contrast`)
- A legacy string can still be produced (serialization), but now it's an *output*, not the source of truth
- Escape hatch: string names still validate but trigger a tracked warning (SPEC-017) — a migration path, not a wall
- Ref: `packages/design-data-spec/spec/token-format.md`, `taxonomy.md`

## 4. Keeping vocabulary consistent: the registry
- A registry = a JSON file (`packages/design-data/registry/*.json`) that's the single allowed vocabulary for one name-object field — e.g. `states.json` for `name.state`, `sizes.json` for `name.size`, `anatomy-terms.json` for `name.anatomy`
- Validators flag values not present in the registry — this is what stops five different "hover" spellings from creeping in
- The field catalog (`schemas/field.schema.json`) makes the whole name-object schema *configurable* rather than hardcoded — new fields can be declared without a schema rewrite
- Ref: `packages/design-data-spec/spec/registry.md`

## 5. Where component anatomy overlaps with token names
- Two distinct registries compose in one token: `anatomy-terms.json` (visible named parts — `handle`, `icon`, `track`) and `token-objects.json` (abstract styling surfaces — `background`, `border`, `edge`)
- Concrete example: a slider handle's background color token references anatomy `handle` **and** object `background` — same token, two vocabularies doing different jobs
- Anatomy term tiers: primitive (`icon`, `label` — reused everywhere) → composite (`checkbox`, `avatar` — another component as a part) → component-specific (`loupe`, `gripper`)
- Cross-registry ID overlap is fine by design (SPEC-033) — `actions` can be both an anatomy term and a component category without conflict
- Ref: `packages/design-data-spec/spec/anatomy-format.md`, `taxonomy.md#component-anatomy-vs-token-objects`

## 6. Why this needs to be fast: the SDK's embedded database
- `sdk/core/src/cache/mod.rs`: builds a compact, indexed [redb](https://www.redb.org) database from the ~2MB of canonical token JSON, cached and content-addressed — CLI/TUI skip re-parsing JSON on every invocation, falling back to JSON load only on cache miss/error
- Payoff: TUI loads the full ~2,400-token Spectrum corpus in under a second
- JSON remains the source of truth; the embedded DB is a derived performance layer, not a second source of truth

## 7. `spec/manifest.md`: letting platforms manage their own data
- A platform manifest pins a `foundationVersion` and layers on top of it: `include`/`exclude` queries (subset the foundation token set), typed `overrides` (change a value, not a type), `extensions` (new tokens/mode sets), and `modeSetRestrictions`
- `extensions.formatting` lets a platform choose its own serialization — concept order, casing, delimiter, abbreviations — so iOS/Android/Web can each emit their native naming convention from the *same* underlying name objects
- This is the mechanism that turns "one central token package" into "platforms own their local view, foundation owns the shared vocabulary"
- Ref: `packages/design-data-spec/spec/manifest.md`

## 8. Tools this unlocks for platforms (and eventually products)
- Figma variables: `sdk/core/src/figma/api.rs` (`FigmaClient`, Rust client for Figma's Variables REST API) + the `tools/component-options-editor` Figma plugin for authoring component option schemas visually
- This is the concrete "manage your own Figma variables" story — structured data in, structured data out, no more hand-editing Figma variable panels out of sync with code

## 9. Beyond Figma: the rest of the tool ecosystem
- AI tooling: `tools/design-data-mcp` (current, wasm in-process MCP server — supersedes the deprecated `tools/spectrum-design-data-mcp`), `tools/design-data-agent-mcp` (agent-facing authoring sessions), `tools/design-data-skill` (packaged Claude Code skill), `tools/s2-docs-mcp` (component docs)
- CLI: `sdk/cli` (`design-data-cli`) — direct queries/validation against the dataset
- TUI: `sdk/tui` (RFC #973, umbrella discussion #714 in `docs/rfc-coordination.md`) — interactive 4-screen guided wizard that nudges token reuse instead of duplicate creation
- Future: an authoring UI is a natural next step (directional, not yet committed to an RFC) — same underlying spec/registry validation, but a GUI instead of CLI/TUI, for designers who don't want a terminal

## 10. Close: the throughline
- Legacy: one opaque string per token, validated by nothing but convention
- Now: structured name objects + registries (source of truth) → embedded DB (speed) → manifest (platform autonomy) → CLI/TUI/MCP/Figma tooling (how everyone actually touches it)
