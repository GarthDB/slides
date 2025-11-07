---
theme: apple-basic
background: https://source.unsplash.com/1920x1080/?standard,interoperability
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## DTCG Format as Additional Release Output
  Aligning Spectrum Tokens with industry standards
drawings:
  persist: false
transition: slide-left
title: DTCG Format Output
mdc: true
---

# DTCG Format as Additional Release Output
## Aligning Spectrum Tokens with Industry Standards

**Status:** 🟡 RFC Draft - Seeking Feedback  
**RFC:** #627 DTCG Format as Additional Release Output  
**Presented by:** Garth Braithwaite

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Governance Meeting - November 7, 2025 <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# The Problem

## Interoperability Gap

<v-clicks>

- ❌ **Proprietary format** - Spectrum tokens use custom JSON schema
- ❌ **Limited adoption** - Third-party tools can't consume our tokens
- ❌ **Manual translation** - Teams must convert formats manually
- ❌ **Missed innovation** - Can't leverage ecosystem tooling
- ❌ **Industry disconnect** - Not aligned with W3C standards

</v-clicks>

::right::

## Real-World Impact

<v-clicks>

**Scenarios we can't support today:**

- Import Spectrum tokens into Figma Tokens plugin
- Use tokens with Style Dictionary directly
- Share tokens with external partners
- Leverage community token tools
- Contribute to DTCG format evolution

**Result:**
- Walled garden approach
- Reinventing wheels
- Limited tool ecosystem
- Harder external adoption

</v-clicks>

---
layout: default
---

# What is DTCG?

## Design Tokens Community Group (W3C)

<v-clicks>

**Official W3C Community Group** defining a standard format for design tokens

**Key Features:**
- Open standard (not vendor-specific)
- Growing ecosystem support
- Active development and adoption
- Backed by major players (Adobe, Salesforce, Amazon, etc.)

**Current Status:**
- Format spec nearing 1.0
- Supported by Style Dictionary, Figma Tokens, Tokens Studio, and more
- Becoming the de facto industry standard

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded">

**Adobe's Role:** We're already contributing to DTCG. Publishing in this format shows leadership and commitment to open standards.

</div>

</v-click>

---
layout: default
---

# Format Comparison

<div class="grid grid-cols-2 gap-6 mt-8">

<div>

## Current: Spectrum Format
```json
{
  "accent-background-color-default": {
    "uuid": "C84D8828-6216-...",
    "$schema": "color-set.json",
    "sets": {
      "light": {
        "value": "rgba(59, 99, 251, 1.0)",
        "uuid": "C84D8828-..."
      },
      "dark": {
        "value": "rgba(71, 116, 255, 1.0)",
        "uuid": "D94E9939-..."
      }
    }
  }
}
```

</div>

<div>

## Proposed: DTCG Format (Additional Output)
```json
{
  "accent": {
    "background": {
      "color": {
        "default": {
          "$type": "color",
          "$value": "#3b63fb",
          "$extensions": {
            "com.adobe.spectrum": {
              "uuid": "C84D8828-6216-...",
              "modes": {
                "light": "#3b63fb",
                "dark": "#4774ff"
              }
            }
          }
        }
      }
    }
  }
}
```

</div>

</div>

---
layout: default
---

# Proposal: Additive Output

## Keep Spectrum Format + Add DTCG

<v-clicks>

**Key Points:**
1. ✅ **Non-breaking** - Current Spectrum format remains unchanged
2. ✅ **Additive** - DTCG format as *additional* release artifact
3. ✅ **Automated** - Generated during build process
4. ✅ **Extensible** - Use `$extensions` for Spectrum-specific data

**Release Structure:**
```
spectrum-tokens-v13.0.0/
  ├── spectrum/           # Current format (unchanged)
  │   ├── color.json
  │   ├── measurement.json
  │   └── ...
  └── dtcg/              # New DTCG format
      ├── tokens.json    # All tokens in DTCG format
      └── README.md      # DTCG format documentation
```

</v-clicks>

---
layout: default
---

# What This Enables

<div class="grid grid-cols-2 gap-6 mt-8">

<div>

## ✅ Immediate Benefits

<v-clicks>

1. **Third-Party Tools** - Use Spectrum tokens in Style Dictionary, Figma Tokens, etc.
2. **External Partners** - Share tokens in standard format
3. **Industry Alignment** - Show leadership in open standards
4. **Ecosystem Access** - Leverage community tooling
5. **Future-Proof** - Align with where industry is heading

</v-clicks>

</div>

<div>

## 🔮 Long-Term Value

<v-clicks>

- **Broader Adoption** - Easier for external teams to use Spectrum
- **Tool Innovation** - Community can build tools for us
- **Format Evolution** - Influence DTCG spec development
- **Migration Path** - Potentially consolidate formats in future
- **Cross-System** - Share tokens between design systems

</v-clicks>

</div>

</div>

---
layout: default
---

# Implementation Approach

<v-clicks>

## Phase 1: Transformer Development (Q1 2026)

1. **Build transformer** - Convert Spectrum → DTCG format
2. **Handle extensions** - Map Spectrum-specific metadata
3. **Preserve UUIDs** - Maintain traceability
4. **Support modes** - Map light/dark/etc. to DTCG modes
5. **Validate output** - Ensure DTCG spec compliance

## Phase 2: Release Integration (Q2 2026)

1. **Add to build pipeline** - Generate DTCG output automatically
2. **Documentation** - How to consume DTCG format
3. **Examples** - Show usage with popular tools
4. **Versioning** - Keep DTCG output in sync with releases

## Phase 3: Ecosystem Engagement (Ongoing)

1. **Community feedback** - Learn from external users
2. **Tool partnerships** - Work with tool vendors
3. **DTCG participation** - Contribute improvements to spec

</v-clicks>

---
layout: default
---

# Technical Considerations

<div class="grid grid-cols-2 gap-6 mt-8">

<div>

## Challenges

<v-clicks>

**Format Differences:**
- Spectrum: Set-based (light/dark as separate values)
- DTCG: Mode-based (uses modes for variations)

**Spectrum-Specific Features:**
- UUIDs (use `$extensions`)
- Schema types (map to `$type`)
- Token relationships (preserve in extensions)

**Maintenance:**
- Keep transformer updated
- Validate both formats
- Document differences

</v-clicks>

</div>

<div>

## Solutions

<v-clicks>

**Use `$extensions`:**
```json
{
  "$extensions": {
    "com.adobe.spectrum": {
      "uuid": "...",
      "schema": "color-set.json",
      "lifecycle": { ... }
    }
  }
}
```

**Automated Testing:**
- Validate DTCG spec compliance
- Round-trip testing
- Tool compatibility checks

**Clear Documentation:**
- Format differences
- Extension usage
- Migration guides

</v-clicks>

</div>

</div>

---
layout: default
---

# Dependencies & Risks

## Dependencies

<v-clicks>

✅ **Low dependencies:**
- No changes to existing Spectrum format
- No platform team changes required
- Purely additive to build process

🟡 **Moderate coordination:**
- DTCG spec must be stable (nearly there)
- Document extension namespace with DTCG
- Coordinate with DTCG working group

</v-clicks>

## Risks & Mitigations

<v-clicks>

| Risk | Mitigation |
|------|------------|
| DTCG spec changes | Use extensions for flexibility, version DTCG output |
| Format confusion | Clear docs on when to use which format |
| Maintenance burden | Automated generation and testing |
| Breaking spectrum format | Keep formats separate, no changes to current format |

</v-clicks>

---
layout: center
class: text-center
---

# Key Takeaways

<div class="grid grid-cols-3 gap-8 mt-12">

<div v-click="1">

## 🎯 Strategic Value
Industry alignment  
Open standards leadership  
Ecosystem access

</div>

<div v-click="2">

## ✅ Safe Approach
Non-breaking  
Additive output  
Automated generation

</div>

<div v-click="3">

## 🚀 Unlocks
Third-party tools  
External adoption  
Community innovation

</div>

</div>

<div class="mt-16" v-click="4">

### Your Feedback & Questions?

**RFC:** https://github.com/adobe/spectrum-tokens/discussions/627  
**DTCG Spec:** https://design-tokens.github.io/community-group/format/

</div>

---
layout: default
---

# Feedback Wanted

<div class="text-center mt-12">

<v-clicks>

## Questions for Discussion

**Strategic Questions:**
- Does this align with our ecosystem goals?
- What's the priority vs. other initiatives?
- Any concerns about maintaining two formats?

**Implementation Questions:**
- Q1-Q2 2026 timeline reasonable?
- Resource allocation concerns?
- Platform-specific considerations?

**Next Steps Based on Feedback:**
1. Refine approach based on input
2. Develop Spectrum → DTCG transformer
3. Integrate into build pipeline
4. Document usage and examples

</v-clicks>

</div>

---
layout: end
class: text-center
---

# Ready for Discussion

**Seeking:** Your feedback, questions, and suggestions

**Comments welcome on RFC!**

