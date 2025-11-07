# Token Sourcemap POC - One Pager

**Status:** ✅ Complete | **Date:** November 2025 | **Platform:** iOS (Proof of Concept)

---

## What Problem Does This Solve?

When design tokens are compiled into platform-specific code (Swift for iOS), the connection to the original design data is lost. Engineers can't easily:
- Trace generated code back to source tokens
- Know which token version was used
- Discover if tokens are deprecated
- Map between Figma, design data, and implementation

## What Is a Token Sourcemap?

A `.tokens.map` file generated during compilation that maintains bidirectional traceability via UUIDs and semantic versioning:

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

## What We Built (POC Scope)

✅ **UUID Extraction** - Parse UUIDs from token JSON (including color sets, scale sets)  
✅ **Version Tracking** - CLI parameter `--source-version` for semver tracking  
✅ **Sourcemap Generator** - New class that writes `.tokens.map` files  
✅ **Symbol Mapping** - Map Swift enum cases to source token UUIDs  
✅ **File Mapping** - Track which Swift file contains each token

**Code Quality:** Zero linting errors, fully validated

## Usage

```bash
./Scripts/generatetokens --source-version 13.0.0
```

**Output:** All existing Swift files + new `SPTokens.tokens.map`

## What This Enables

### Now (POC Complete)
- Look up source UUID for any Swift symbol
- Know which token version generated the code
- Foundation for cross-platform token tracking

### Future (Unlocked by POC)
- **Deprecation Warnings:** Xcode plugin warns about deprecated tokens at build time
- **Figma Sync:** Validate Figma variables match iOS implementation
- **Usage Analytics:** Answer "Which tokens does iOS actually use?"
- **Migration Automation:** Auto-generate guides like "Replace X with Y"
- **Lifecycle Tracking:** Track introduced/deprecated/removed versions per token

## Next Steps

**Q1 2026:**
1. Validate POC with full token generation
2. Gather feedback from iOS engineering team
3. Document sourcemap format specification v1
4. Integrate into CI/CD pipeline

**Future Enhancements:**
- Add package name support (multi-source tokens)
- Include lifecycle metadata (introduced/deprecated versions)
- Map Figma variable IDs to UUIDs
- Build Xcode deprecation warning plugin
- Extend to Android and Web platforms

## Technical Details

**Repository:** `spectrum-tokens-ios/Tools/tokentool`  
**Files Changed:** 4 modified, 1 created  
**RFC:** [#626 Design Token Sourcemaps and Traceability](https://github.com/adobe/spectrum-tokens/discussions/626)

**Implementation Docs:**
- `/POC_COMPLETION_SUMMARY.md` - Overview
- `/SOURCEMAP_POC_IMPLEMENTATION.md` - Technical details
- `/SOURCEMAP_EXAMPLE.json` - Sample output

## Impact

**For Engineers:**
- Faster debugging (trace code to source)
- Proactive deprecation warnings
- Clear migration paths

**For Designers:**
- Validate Figma ↔ code sync
- Track token usage across platforms
- Data-driven token consolidation

**For Platform Teams:**
- Cross-platform token consistency
- Automated tooling foundation
- Reduced manual coordination

---

**Questions?** Contact: Garth Braithwaite  
**Related:** Spectrum Design Data Governance | Token Structure RFC | Token Lifecycle RFC

