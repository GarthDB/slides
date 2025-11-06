---
theme: apple-basic
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Component Schemas for Spectrum Designers
  Vision for data and design authoring
drawings:
  persist: false
transition: slide-left
title: Component Schemas for Spectrum Designers
mdc: true
---

# Component Schemas for Spectrum Designers

**Vision for Data and Design Authoring**

Doc Squad Data Group Meeting

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# What Are Component Schemas?

**Structured data describing component options and properties**

Component schemas are JSON files that define:
- Available component properties (e.g., `size`, `variant`, `isDisabled`)
- Valid values for each property
- Default values
- Property descriptions and relationships

```json
{
  "size": {
    "type": "string",
    "enum": ["xs", "s", "m", "l", "xl"],
    "default": "m"
  },
  "isDisabled": {
    "type": "boolean",
    "default": false
  }
}
```

---
layout: center
class: text-center
---

# The Designer Workflow

## Before you design a new component or alter an existing one...

---
layout: default
---

# The Designer Workflow

## Three Key Steps

**Step 1: Review Current Component Schema**
- Understand what options already exist
- Review property names and valid values
- Check defaults and relationships

**Step 2: Consider What Changes**
- What new properties are needed?
- What values need to be added or removed?
- How do changes affect existing implementations?

**Step 3: Update Schema Alongside Design Work**
- Document changes in the component schema
- Ensure consistency between design and data
- Communicate changes clearly to implementation teams

---
layout: two-cols
---

# Uses of Schema Data

## Why This Matters

**Implementation Tracking**
- Implementations can track changes to schema with releases of the package
- Clear versioning and change history
- Semantic versioning for breaking changes

**Clear Communication**
- Designers ensure they correctly communicate what is changing in a component
- Reduces ambiguity and implementation errors
- Creates shared language across teams

::right::

<div class="mt-12"></div>

**S2 Website Integration**
- Data is published to S2 website on the component options table
- Single source of truth for component documentation
- Automatically generated from schema

**Token Alignment**
- Improve future alignment with token names (based on component options)
- Consistent naming conventions
- Better integration between design tokens and component APIs

---
layout: default
---

# Example: Component Options on S2

<div class="mt-8">
  <img src="/component-options-screenshot.png" alt="Component options table on S2 website" class="rounded shadow-lg" />
</div>

Component options are automatically published from the schema to the S2 documentation site, providing developers and designers with a reliable reference.

---
layout: two-cols
---

# Current Pain Points

## Challenges We're Working Through

**Manual Authoring**
- Not currently easy to author
- Manual process with help from AI coding tools like Cursor/Claude
- Requires technical knowledge of JSON and schema structures
- Time-consuming for designers unfamiliar with code

**Restrictive Process**
- Can be restrictive to designers who haven't had to design with these restrictions previously
- Requires thinking in structured, systematic ways
- Learning curve for new contributors

::right::

<div class="mt-12"></div>

**Data Duplication**
- Somewhat duplicate data with Figma component assets
- Figma can't completely contain the full components as designed
- Figma isn't 100% reliable as an authoring solution for this data
- Multiple sources of truth create maintenance burden

---
layout: default
---

# Future Improvements

## Making This Easier

**Figma Plugin or Web App**
- Dedicated authoring tool for component schemas
- User-friendly interface for designers
- No need to manually edit JSON files

**Real-Time Validation**
- Instant feedback on schema validity
- Catch errors before they reach the repository
- Ensure consistency and correctness

**Scaffold or Diff with Figma**
- Automatically generate schema structure from Figma component definitions
- Highlight differences between Figma and schema
- Reduce manual work and duplication

---
layout: default
---

# Resources

## Where to Learn More

**NPM Package**
- [npmjs.com/package/@adobe/spectrum-component-api-schemas](https://npmjs.com/package/@adobe/spectrum-component-api-schemas)
- Published package with all component schemas

**GitHub Repository**
- [github.com/adobe/spectrum-tokens/tree/main/packages/component-schemas](https://github.com/adobe/spectrum-tokens/tree/main/packages/component-schemas)
- Source code and schema files
- Located in spectrum-tokens mono repo

**S2 Website Example**
- [s2.spectrum.corp.adobe.com/page/action-button/#component-options](https://s2.spectrum.corp.adobe.com/page/action-button/#component-options)
- Live example of component options table

**Release Notes**
- [Release v5.0.0 with Schema Diff](https://github.com/adobe/spectrum-tokens/releases/tag/%40adobe%2Fspectrum-component-api-schemas%405.0.0)
- Example of automated release notes showing schema changes

---
layout: two-cols
---

# Key Takeaways

## What We're Building Toward

**Shared Ownership**
- Design contributes to and influences the component schema
- Clear lines of ownership between design and engineering
- Collaborative maintenance model

**Better Communication**
- Structured data creates shared language
- Reduces ambiguity in component specifications
- Improves alignment across platforms

::right::

<div class="mt-12"></div>

**Future-Proof System**
- Foundation for AI-powered assistance
- Scalable documentation generation
- Platform-aware design data

**Your Role**
- Review schemas before designing
- Consider data structure in design decisions
- Contribute feedback to improve the process

---
layout: center
class: text-center
---

# Discussion

## Questions & Next Steps

**What are your biggest concerns?**

**How can we make this process easier?**

**What training or support do you need?**

<div class="mt-12">
  <span class="text-sm opacity-50">
    Component Schemas for Spectrum Designers • Doc Squad Data Group
  </span>
</div>
