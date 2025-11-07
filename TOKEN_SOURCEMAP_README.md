# Token Sourcemap POC Presentation

## Quick Start

```bash
cd /Users/garthdb/Spectrum/slides
npm run dev token-sourcemap-poc.md
```

Then open the URL shown (usually http://localhost:3030)

## Presentation Overview

**Duration:** ~10 minutes  
**Slides:** 9 slides  
**Audience:** Governance meeting stakeholders

### Slide Breakdown

1. **Title** - Introduction and status
2. **The Problem** - Context: why traceability matters
3. **The Solution** - Sourcemap concept with examples
4. **What We Implemented** - POC scope and deliverables
5. **Usage & Output** - How to use it, what you get
6. **What This Enables** - Current + future capabilities
7. **Demo** - Example sourcemap output
8. **Next Steps** - Immediate actions + future enhancements
9. **Key Takeaways** - Summary and Q&A

## Presentation Tips

### Key Points to Emphasize

1. **Complete and Working** - POC is done, validated, zero errors
2. **Foundation for Future** - Enables deprecation warnings, Figma sync, etc.
3. **Non-Breaking** - Additive feature, doesn't change existing generation
4. **Follows RFC** - Aligns with published RFC #626

### If Asked About...

**"What's the performance impact?"**
- Minimal - sourcemap generation happens after Swift generation
- Single JSON file write (~1-2MB for all tokens)
- No impact on generated Swift code

**"When can we use this in production?"**
- POC is complete and validated
- Next: Test with full token generation
- Then: Add to CI/CD pipeline
- Timeline: Q1 2026

**"What about other platforms?"**
- POC proves the concept for iOS
- Same approach can extend to Android, Web
- Architecture is platform-agnostic

**"How does this relate to Figma?"**
- Current POC: Token UUID tracking
- Future: Map Figma variable IDs to UUIDs
- Enables bidirectional Figma ↔ code sync

### Demo Notes

If you want to show the actual implementation:

```bash
# In separate terminal, show the generated files
cd /Users/garthdb/Spectrum/spectrum-tokens-ios
ls -la Sources/SpectrumTokens/GeneratedFiles/

# Show sourcemap structure
cat SOURCEMAP_EXAMPLE.json | jq . | head -30

# Show implementation summary
cat POC_COMPLETION_SUMMARY.md
```

## Navigation

- **Next slide:** Space, Arrow Right, or Click
- **Previous slide:** Arrow Left
- **Overview mode:** Press 'o'
- **Presenter mode:** Press 'p' (shows notes)
- **Drawing mode:** Press 'd'

## Exporting (Optional)

To create a PDF:

```bash
npm run build token-sourcemap-poc.md
npm run export token-sourcemap-poc.md
```

This creates `token-sourcemap-poc.pdf` you can share.

## Questions to Anticipate

1. **Timeline?** - POC complete, validation in progress, production Q1 2026
2. **Cost?** - Minimal development time, no ongoing costs
3. **Maintenance?** - Low, sourcemap generation is automated
4. **Other platforms?** - Can extend to Android/Web using same approach
5. **Breaking changes?** - None, purely additive feature

## After the Presentation

Share these resources:
- 📄 `/POC_COMPLETION_SUMMARY.md` - Technical overview
- 📄 `/SOURCEMAP_POC_IMPLEMENTATION.md` - Implementation details
- 📄 `/SOURCEMAP_EXAMPLE.json` - Example output
- 🔗 [RFC #626](https://github.com/adobe/spectrum-tokens/discussions/626)

