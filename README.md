# Design Data Onsite 2025 - Presentations

Slidev presentations for the Design Data Onsite in Seattle, August 18-22, 2025.

## Presentations by Session

### Day 1 - Tuesday, August 19
- **Data System Model Overview** (`day1-data-system-overview.md`) - 25 minutes (9:50-10:15)
  - Garth's main presentation on current vs aspirational model
  - Covers information scattering, pyramid structure, and implementation strategy
  - Links to interactive circle-packing visualization

### Day 2 - Wednesday, August 20
- **Engineering Strategy for Model Changes** (`day2-engineering-strategy.md`) - Discussion facilitator
  - Technical implementation strategy for multi-platform system
  - Component Token Relationships (CTR) and transform architecture
  - Platform customization and migration strategy

### Additional Discussion Support Materials  
- **Reducing Complexity** (`reducing-complexity.md`) - Discussion facilitator
  - Component Token References (CTR) strategy
  - Token reduction without losing information

- **Multi-Platform Strategy** (`multi-platform-strategy.md`) - Discussion facilitator  
  - Defining our system of systems approach
  - Governance and terminology alignment

## Quick Start

```bash
# Install dependencies
npm install

# Run presentations in development mode
npm run dev:day1              # Day 1: Data System Model Overview (25 min)
npm run dev:day2-engineering  # Day 2: Engineering Strategy discussion
npm run dev:complexity        # Reducing Complexity discussion
npm run dev:multiplatform     # Multi-Platform Strategy discussion

# Build all presentations for production
npm run build

# Export all presentations to PDF
npm run export
```

## Development

Each presentation runs on `http://localhost:3030` when in development mode. Slidev provides:

- **Live reload** as you edit
- **Presenter mode** with speaker notes (press `o`)
- **Drawing mode** for annotations (press `d`)  
- **Recording mode** for demos (press `r`)

## Presentation Features

- **Interactive navigation** with click-through animations
- **Mermaid diagrams** for system architecture
- **Code highlighting** for technical concepts
- **Speaker notes** for each slide (visible in presenter mode)
- **Professional theme** suitable for executive presentation

## Tips for Presenting

1. **Use presenter mode** (`o` key) to see speaker notes
2. **Practice click timing** for animated reveals
3. **Test diagrams** render correctly on presentation display
4. **Have backup PDFs** exported just in case

## File Structure

```
slides/
├── data-system-overview.md      # Main 25-min presentation
├── reducing-complexity.md       # Discussion support slides  
├── multi-platform-strategy.md   # Discussion framework slides
├── package.json                 # Slidev configuration
└── README.md                    # This file
```

---

**Event**: Design Data Onsite 2025  
**Location**: Seattle, WA  
**Presenter**: Garth Braithwaite  
**Theme**: Professional, technical, discussion-focused
