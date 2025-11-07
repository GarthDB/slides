---
theme: apple-basic
background: https://source.unsplash.com/1920x1080/?code,design
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Token Sourcemap POC
  Proof of concept for design token traceability
drawings:
  persist: false
transition: slide-left
title: Token Sourcemap POC
mdc: true
---

# Token Sourcemap POC
## Design Token Traceability for iOS

**Status:** ✅ POC Complete - Seeking Feedback  
**RFC:** [DRAFT] Design Token Sourcemaps and Traceability (#626)  
**Presented by:** Garth Braithwaite

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Governance Meeting Update <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# The Problem

## Lost Context in Generated Code

When tokens are transformed for platform use (e.g., Spectrum iOS):

<v-clicks>

- ❌ **Lost origin**: Generated Swift code has no reference to source token
- ❌ **Manual mapping**: Engineers manually track Figma ↔ tokens ↔ Swift
- ❌ **Deprecation blindness**: Builds don't know if using deprecated tokens
- ❌ **Audit difficulty**: Can't answer "which tokens does iOS use?"

</v-clicks>

::right::

## Impact

<v-clicks>

```swift
// Generated Swift code
case accentBackgroundColorDefault

// Questions engineers can't answer:
// - Where did this come from?
// - What's the source UUID?
// - Which version of tokens?
// - Is it deprecated?
// - What's the Figma variable?
```

**Without traceability, we can't:**
- Automate deprecation warnings
- Validate sync between Figma/code
- Track token usage across platforms

</v-clicks>

---
layout: default
---

# The Solution: Sourcemaps

Inspired by JavaScript Source Maps, generate `.tokens.map` files during token compilation

<div class="grid grid-cols-2 gap-6 mt-8">

<div>

## Input: Source Tokens (JSON)
```json
{
  "accent-background-color-default": {
    "uuid": "C84D8828-6216-...",
    "$schema": "color-set.json",
    "sets": {
      "light": {
        "value": "rgba(59, 99, 251, 1.0)",
        "uuid": "C84D8828-..."
      }
    }
  }
}
```

</div>

<div>

## Output: Sourcemap
```json
{
  "version": 1,
  "sourceVersion": "13.0.0",
  "platform": "ios",
  "mappings": {
    "accentBackgroundColorDefault": {
      "uuid": "C84D8828-6216-...",
      "designName": "accent-background-color-default",
      "generatedFile": "SPColorToken.generated.swift",
      "generatedSymbol": "accentBackgroundColorDefault"
    }
  }
}
```

</div>

</div>

---
layout: default
---

# What We Implemented (POC Scope)

<v-clicks>

## ✅ Core Traceability
1. **UUID Extraction** - Parse UUIDs from token JSON (including set-based tokens)
2. **Version Tracking** - Command-line `--source-version` parameter
3. **Sourcemap Generation** - New `SourcemapGenerator` class
4. **Symbol Mapping** - Map Swift enum cases to source tokens
5. **File Mapping** - Track which Swift file contains each token

## 📊 Files Changed
- **Modified:** 4 files (Models, Parser, Generator, CLI)
- **Created:** 1 file (SourcemapGenerator)
- **Status:** ✅ Zero linting errors, syntax validated

</v-clicks>

---
layout: two-cols
---

# Usage & Output

## Generate with Version
```bash
./Scripts/generatetokens \
  --source-version 13.0.0
```

<v-clicks>

## What You Get

**Before:**
- `SPColorToken.generated.swift`
- `SPMeasurementToken.generated.swift`
- etc.

**After (NEW):**
- All the above, **plus:**
- **`SPTokens.tokens.map`** ← Sourcemap

</v-clicks>

::right::

<v-click>

## Example Mapping

```json {all|3-4|6-9}
{
  "mappings": {
    "accentBackgroundColorDefault": {
      "uuid": "C84D8828-6216-4B3F-BD98-43D2C2C63744",
      "designName": "accent-background-color-default",
      "generatedFile": "SPColorToken.generated.swift",
      "generatedSymbol": "accentBackgroundColorDefault"
    },
    "workflowIconSize100": {
      "uuid": "7da5157d-7f25-405b-8de0-f3669565fb48",
      "designName": "workflow-icon-size-100",
      "generatedFile": "SPMeasurementToken.generated.swift",
      "generatedSymbol": "workflowIconSize100"
    }
  }
}
```

</v-click>

---
layout: two-cols
---

# What This Enables

## ✅ Implemented (POC)

<v-clicks>

- **UUID Traceability** - Look up source UUID for any Swift symbol
- **Version Tracking** - Know which token version generated the code
- **Platform Mapping** - Foundation for cross-platform token tracking
- **File Discovery** - Find which Swift file contains a token

</v-clicks>

::right::

## 🔮 Future Capabilities

<v-clicks>

- **Deprecation Warnings** - Xcode plugin: "This token deprecated in v14.0.0"
- **Figma Sync** - Validate Figma variables match iOS implementation
- **Usage Analytics** - "Which tokens does iOS actually use?"
- **Migration Guides** - Auto-generate: "Replace X with Y"
- **Lifecycle Tracking** - Track introduced/deprecated/removed versions
- **Multi-Source** - Support tokens from multiple packages

</v-clicks>

---
layout: center
class: text-center
---

# Demo: Generated Sourcemap

<div class="text-left mx-auto max-w-3xl">

```json
{
  "version": 1,
  "sourceVersion": "13.0.0",
  "platform": "ios",
  "mappings": {
    "semanticAccentDefault": {
      "uuid": "C84D8828-6216-4B3F-BD98-43D2C2C63744",
      "designName": "semantic-accent-default",
      "generatedFile": "SPColorToken.generated.swift",
      "generatedSymbol": "semanticAccentDefault"
    },
    "swatchBorderOpacity": {
      "uuid": "0e397a80-cf33-44ed-8b7d-1abaf4426bf5",
      "designName": "swatch-border-opacity",
      "generatedFile": "SPOpacityToken.generated.swift",
      "generatedSymbol": "swatchBorderOpacity"
    }
  }
}
```

</div>

<div class="mt-8">
Every generated Swift token now traceable to source UUID ✨
</div>

---
layout: default
---

# Next Steps

<div class="grid grid-cols-2 gap-6 mt-8">

<div>

## Seeking Feedback On

<v-clicks>

1. **POC Approach** - Is the architecture sound?
2. **Platform Priorities** - Which platforms need this first?
3. **Format Spec** - Any concerns with the sourcemap structure?
4. **Next Steps** - Suggestions for validation and rollout?

</v-clicks>

</div>

<div>

## Future Enhancements

<v-clicks>

1. **Package Names** - Support multi-source tokens
2. **Lifecycle Metadata** - Add introduced/deprecated versions
3. **Figma Integration** - Map Figma variable IDs
4. **Build Plugins** - Xcode deprecation warnings
5. **Extend Platforms** - Android, Web sourcemaps

</v-clicks>

</div>

</div>

<div class="mt-12" v-click>

## 📋 Related
- **RFC Discussion:** https://github.com/adobe/spectrum-tokens/discussions/626
- **POC Status:** Complete ✅
- **Implementation Docs:** `/POC_COMPLETION_SUMMARY.md`

</div>

---
layout: center
class: text-center
---

# Key Takeaways

<div class="grid grid-cols-3 gap-8 mt-12">

<div v-click="1">

## ✅ Complete
POC fully implemented  
Zero linting errors  
Ready for testing

</div>

<div v-click="2">

## 🎯 Solves
Token traceability  
Version tracking  
Foundation for automation

</div>

<div v-click="3">

## 🚀 Enables
Deprecation warnings  
Figma sync validation  
Cross-platform mapping

</div>

</div>

<div class="mt-16" v-click="4">

### Questions?

**Implementation:** `spectrum-tokens-ios/Tools/tokentool`  
**Docs:** `POC_COMPLETION_SUMMARY.md` & `SOURCEMAP_POC_IMPLEMENTATION.md`

</div>

