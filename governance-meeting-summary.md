# Spectrum Design Data Governance Meeting
**Date:** November 7, 2025  
**Topics:** Three Infrastructure Enhancement Proposals

---

## 1️⃣ Token Lifecycle Metadata Framework
**RFC:** [#623](https://github.com/adobe/spectrum-tokens/discussions/623) | **Status:** 🟡 Seeking Feedback

### Problem
No formal lifecycle tracking or deprecation process exists, making it difficult to safely evolve the token system without breaking implementations.

### Solution
Add structured lifecycle metadata to every token:

```json
{
  "lifecycle": {
    "introduced": "2.0.0",
    "status": "deprecated",
    "deprecated": "3.0.0",
    "plannedRemoval": "4.0.0",
    "renamed": "new-token-name",
    "message": "Migration guidance here"
  }
}
```

### Governance Process
**Mandatory:** At least 2 monthly governance meetings between deprecation announcement and removal.

### Benefits
- ✅ Safe token evolution with guaranteed migration time
- ✅ Automated deprecation warnings
- ✅ Clear migration paths
- ✅ Unblocks semantic token refinement work (SDS-15500)

### Timeline
- **Nov-Dec 2025:** Schema implementation and validation tooling
- **Q1 2026:** Backfill existing tokens, enable refinement initiatives

### Seeking Feedback On
- Schema design and completeness
- Governance process (2-meeting minimum)
- Implementation priorities and timeline

---

## 2️⃣ Design Token Sourcemaps & Traceability
**RFC:** [#626](https://github.com/adobe/spectrum-tokens/discussions/626) | **Status:** ✅ POC Complete

### Problem
When tokens are transformed for platform use, the connection to source data is lost. Engineers can't trace Swift code back to token UUIDs or know if using deprecated tokens.

### Solution
Generate `.tokens.map` files during token compilation that maintain bidirectional traceability:

```json
{
  "version": 1,
  "sourceVersion": "13.0.0",
  "platform": "ios",
  "mappings": {
    "accentBackgroundColorDefault": {
      "uuid": "C84D8828-6216-4B3F-BD98-43D2C2C63744",
      "designName": "accent-background-color-default",
      "generatedFile": "SPColorToken.generated.swift",
      "generatedSymbol": "accentBackgroundColorDefault"
    }
  }
}
```

### POC Status
- ✅ Fully implemented in `spectrum-tokens-ios/Tools/tokentool`
- ✅ UUID extraction, version tracking, symbol mapping
- ✅ Zero linting errors, validated implementation
- ✅ Non-breaking addition to token generation

### Benefits (Current)
- Look up source UUID for any Swift symbol
- Track which token version generated the code
- Foundation for cross-platform token tracking

### Benefits (Future)
- 🔮 Xcode plugin for deprecation warnings at build time
- 🔮 Validate Figma variables match iOS implementation
- 🔮 Usage analytics: "Which tokens does iOS actually use?"
- 🔮 Auto-generate migration guides

### Timeline
- **Q1 2026:** Validate with full iOS token generation
- **Q1 2026:** Integrate into CI/CD pipeline
- **Q2 2026+:** Extend to Android and Web platforms

### Seeking Feedback On
- POC architecture and approach
- Platform priorities (iOS, Android, Web)
- Production readiness concerns
- Recommended next steps

---

## 3️⃣ DTCG Format as Additional Release Output
**RFC:** [#627](https://github.com/adobe/spectrum-tokens/discussions/627) | **Status:** 🟡 Seeking Feedback

### Problem
Spectrum tokens use a proprietary format that third-party tools can't consume, limiting ecosystem participation and external adoption.

### Solution
Add DTCG (W3C standard) format as **additional** release output:

```
spectrum-tokens-v13.0.0/
  ├── spectrum/           # Current format (unchanged)
  │   ├── color.json
  │   └── ...
  └── dtcg/              # NEW: DTCG format
      ├── tokens.json
      └── README.md
```

### What is DTCG?
- **Design Tokens Community Group** - W3C standard format
- Growing ecosystem support (Style Dictionary, Figma Tokens, Tokens Studio)
- Adobe is already contributing to the spec
- Becoming the de facto industry standard

### Benefits
- ✅ Third-party tool integration (Style Dictionary, Figma Tokens, etc.)
- ✅ Industry standards alignment (W3C)
- ✅ Easier external partner adoption
- ✅ Leverage community tooling innovation
- ✅ Shows Adobe leadership in open standards

### Technical Approach
- **Non-breaking:** Current Spectrum format remains unchanged
- **Additive:** DTCG as additional automated output
- **Extensible:** Use `$extensions` for Spectrum-specific data (UUIDs, lifecycle metadata)

### Timeline
- **Q1 2026:** Develop Spectrum → DTCG transformer
- **Q2 2026:** Integrate into release pipeline
- **Q2 2026:** Documentation and examples

### Seeking Feedback On
- Strategic value and priorities
- Implementation approach
- Timeline and resource concerns
- Platform-specific considerations

---

## How They Work Together

These three initiatives are complementary infrastructure enhancements:

```
┌─────────────────────────────────────────────────────┐
│  Source Tokens with Lifecycle Metadata              │ ← Foundation
├─────────────────────────────────────────────────────┤
│  Transform to Platforms (Swift, Kotlin, JS, etc.)  │
│  + Generate Sourcemaps (.tokens.map)               │ ← Traceability
├─────────────────────────────────────────────────────┤
│  Output DTCG Format (for ecosystem)                │ ← Interoperability
└─────────────────────────────────────────────────────┘
```

**All three are:**
- ✅ Non-breaking
- ✅ Additive enhancements
- ✅ Can be implemented independently
- ✅ No platform team changes required for existing code

---

## Summary: What Feedback We're Seeking

| Initiative | Status | Seeking Feedback On | Timeline |
|-----------|--------|---------------------|----------|
| **Lifecycle Metadata** | 🟡 RFC | Schema design, governance process | Nov-Dec 2025 |
| **Token Sourcemaps** | ✅ POC | POC approach, platform priorities | Q1 2026 |
| **DTCG Format** | 🟡 RFC | Strategic value, implementation | Q1-Q2 2026 |

---

## Proposed Next Steps (Based on Feedback)

### Lifecycle Metadata
1. Finalize schema with DNA-1485 (in progress)
2. Build validation tools and CI/CD integration
3. Backfill lifecycle metadata for existing tokens
4. Enable semantic token refinement initiatives

### Token Sourcemaps
1. Test with full iOS token generation
2. Gather iOS team feedback
3. Document sourcemap format specification
4. Add to CI/CD pipeline
5. Plan Android/Web extension

### DTCG Format
1. Develop Spectrum → DTCG transformer
2. Validate DTCG spec compliance
3. Create usage documentation and examples
4. Integrate into release pipeline

---

## Resources

**RFC Discussions:**
- Token Lifecycle Metadata: https://github.com/adobe/spectrum-tokens/discussions/623
- Design Token Sourcemaps: https://github.com/adobe/spectrum-tokens/discussions/626
- DTCG Format Output: https://github.com/adobe/spectrum-tokens/discussions/627

**Documentation:**
- Governance Model: https://wiki.corp.adobe.com/display/AdobeDesign/Governance+Model
- DTCG Spec: https://design-tokens.github.io/community-group/format/

**Presentation Materials:**
- Unified overview slides: `governance-meeting-nov-2025.md`
- Individual topic deep dives available

**Technical Implementation:**
- Sourcemap POC: `~/Spectrum/spectrum-tokens-ios/Tools/tokentool`
- POC docs: `POC_COMPLETION_SUMMARY.md`

**Communication Channels:**
- Public: #spectrum_tokens
- Private: #spectrum_implementations

---

## Questions?

**Contact:** Garth Braithwaite  
**Follow-up:** Action items will be tracked in #spectrum_tokens

