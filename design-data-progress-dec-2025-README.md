# Design Data Progress & Token Status Review
**Presentation for December 16, 2025 Meeting**

## Quick Start

### Development Mode (Live Preview)
```bash
cd ~/Spectrum/slides
npm run dev:progress
# Or simply: npm run dev (this is now the default)
```

This will open the presentation in your browser with hot-reload enabled.

### Presenter Mode with Notes
When the presentation is running, **click the presenter mode icon** or navigate to:
```
http://localhost:3030/presenter
```

This opens a two-window view:
- **Main window**: Clean slides for audience/screen sharing
- **Presenter window**: Slides + presenter notes + timer + next slide preview

All presenter notes are embedded in the slide deck as HTML comments and will appear automatically in presenter mode.

### Build for Production
```bash
npm run build:progress
```

Output will be in `dist/progress-dec-2025/`

### Export to PDF
```bash
npm run export:progress
```

PDF will be saved to `exports/design-data-progress-dec-2025.pdf`

## Files

- **design-data-progress-dec-2025-slides.md** - Main presentation slides (Slidev format)
- **design-data-progress-dec-2025-OUTLINE.md** - Detailed speaker notes and presentation guide
- **design-data-progress-dec-2025-README.md** - This file

## Presentation Details

**Duration:** 30 minutes  
**Date:** December 16, 2025 3:05-3:30 PM  
**Audience:** 
- Sean Voisen (Engineering Director)
- Allison Shaw (Design Director)
- Aaron Brownlee
- Ashley Stell

**Presenters:** Garth Braithwaite, Aaron Brownlee, Ashley Stell

## Content Overview

### Slide Structure (12 slides)
1. **Title** - Meeting focus and agenda
2. **Executive Summary** - Phase 1 status and key metrics
3. **From Vision to Execution** - August onsite → December progress
4. **Governance & Process** - 3 meetings completed, monthly cadence
5. **Technical Progress** - Completed and active work
6. **PR 644 Deep Dive** - Token parser and schema system
7. **RFC Pipeline** - 6 active RFCs
8. **Roadmap & Timeline** - Q4 2025 → Q1 2026
9. **Discussion Topics** - Questions and risk areas
10. **Token Status & Strategy** - Current state and path forward
11. **Key Takeaways** - Three main themes
12. **Questions & Resources** - Closing and references

### Key Messages
1. **Strong Progress:** 16 weeks from onsite vision to concrete delivery
2. **Governance Working:** 3 successful meetings, cross-platform participation
3. **Technical Delivery:** Real milestones hit (monorepo, version tracking, PR 644)
4. **Phase 2 Ready:** Infrastructure in place, Q1 2026 rollout prepared

## Speaker Notes

See **design-data-progress-dec-2025-OUTLINE.md** for:
- Detailed speaker notes for each slide
- Timing guidance (30 min total)
- Key themes to emphasize
- Anticipated questions and answers
- Backup slide content

## Data Sources

This presentation synthesizes information from:
- Meeting prep notes (provided by Garth)
- Jira DNA project tracking
- Adobe Wiki roadmap page
- GitHub Discussions (spectrum-design-data)
- PR 644: Structured token parser and comprehensive schema system
- Governance meeting notes (Oct 3, Nov 7, Dec 5)

## Customization

### Changing the Theme
Edit the frontmatter in `design-data-progress-dec-2025-slides.md`:
```yaml
theme: apple-basic  # Change to another Slidev theme
```

### Adding Custom Styling
Create a `style.css` file in the same directory and it will be automatically loaded.

### Navigation
- **Next slide:** Arrow keys, space, click
- **Previous slide:** Arrow keys, backspace
- **Overview mode:** Press `O`
- **Drawing mode:** Press `D`
- **Presenter mode:** Click presenter icon in bottom left, or go to `/presenter` route
  - Shows presenter notes, timer, next slide preview
  - All notes embedded in the slides

## Troubleshooting

### Dependencies Not Installed
```bash
cd ~/Spectrum/slides
npm install
```

### Port Already in Use
```bash
npm run dev:progress -- --port 3031
```

### PDF Export Issues
Ensure playwright-chromium is installed:
```bash
npm install playwright-chromium --save-dev
```

## Next Steps After Meeting

1. **Record feedback** from directors and team
2. **Update Wiki** with any decisions made
3. **Adjust Q1 2026 planning** based on discussion
4. **Share slides** via GitHub or internal sharing

## Related Resources

- **Wiki Roadmap:** [Design Data System - Initiatives and Roadmap](https://wiki.corp.adobe.com/display/AdobeDesign/Design+Data+System+-+Initiatives+and+Roadmap)
- **GitHub Discussions:** [spectrum-design-data/discussions](https://github.com/adobe/spectrum-design-data/discussions)
- **Jira Project:** DNA (Design Data)
- **Governance Meetings:** First Friday of each month
- **Previous Governance Deck:** `governance-meeting-nov-2025.md`

---

*Created: December 16, 2025*  
*Author: Garth Braithwaite (with Ferris AI Assistant)*

