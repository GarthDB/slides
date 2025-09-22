---
theme: apple-basic
background: https://source.unsplash.com/1920x1080/?design,data
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Spectrum Design Data
  Onsite Shareout Presentation
drawings:
  persist: false
transition: slide-left
title: Spectrum Design Data
mdc: true
---

# Spectrum Design Data
## Onsite Shareout

**Duration:** 20 minutes  
**Audience:** Adobe Design System stakeholders and platform teams  
**Objective:** Share key onsite outcomes, strategic vision, and immediate next steps

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# Agenda

1. **Onsite Outcomes & Key Takeaways** (4 min)
2. **Customer Pain Points** (2 min)
3. **Strategic Vision** (4 min)
4. **Technical Evolution** (4 min)
5. **Immediate Next Steps & Follow-ups** (4 min)
6. **Jira Task Roadmap Overview** (2 min)
7. **Key Takeaways & Immediate Actions** (1 min)

---
layout: two-cols
---

# 1. Onsite Outcomes & Key Takeaways

## What We Accomplished
- 3-day onsite in August 2025 with all platform teams
- Strategic alignment achieved on Spectrum Design Data evolution
- Governance structure established and operational
- 10 Jira tasks created with clear roadmap

::right::

## Key Decisions Made
- **Repository renaming:** spectrum-tokens → spectrum-design-data (RFC in progress)
- **Phased implementation:** 4 phases respecting team constraints
- **Backwards compatibility:** Current @adobe/spectrum-tokens package continues
- **Governance process:** Monthly meetings, RFC process, standard deprecation

---
layout: two-cols
---

# 2. Customer Pain Points

## Current Token System Challenges
- **Discovery Issues:** Difficulty finding the right token (designers and engineers)
- **Complexity Overload:** Too many tokens with unclear relationships
- **Naming Inconsistencies:** Inconsistent naming conventions and typos
- **Standards Gaps:** Lack of enforcement leading to fragmentation

::right::

## Impact on System Benefits
- **Undermines Core Value:** Pain points reduce efficiency, consistency, and team alignment
- **Platform Fragmentation:** Multiple sources of truth across teams
- **Maintenance Burden:** Manual processes and coordination overhead

---
layout: two-cols
---

# 3. Strategic Vision

## The Opportunity
- **Reduce Complexity:** Refine token data by consolidating component tokens and increasing semantic tokens
- **Improve Trust:** More reliable and consistent design system tooling
- **Increase Velocity:** Faster development for teams consuming design data
- **Better Coordination:** Automated processes instead of manual overhead
- **Expand Design Data:** Add structure, component anatomy, and relationship data for richer context

::right::

## Business Impact
- **Shared Language:** Common terminology across all platforms and teams
- **Consistency:** Unified design language implementation
- **Efficiency:** Streamlined workflows and reduced manual coordination
- **System Reliability:** More trustworthy and consistent design data
- **Team Efficiency:** Reduced coordination overhead across platforms

---
layout: default
---

# 4. Technical Evolution

## From Tokens to Design Data

**Current:** String-based tokens with naming inconsistencies and discovery issues  
**Future:** Schema-based relationship objects with strong typing and validation  
**Key Innovation:** Platform-aware data that adapts to native conventions  
**AI Integration:** LLM-powered assistance with deep design data understanding

---
layout: two-cols
---

# Multi-Platform Strategy

## Platform Scope
- **Web:** Desktop + Mobile
- **Native Desktop:** Drover
- **Native Mobile:** iOS, Android

## Core Principles
- **Platform Autonomy:** Enable platform teams while maintaining cohesion
- **Clear Terminology:** Standardized definitions for platform, foundation, implementation
- **Customization Guardrails:** Intentional frameworks to prevent fragmentation
- **From Enforcement to Enablement:** Provide core value and guidance, not strict rules

::right::

## Core Architecture
- **Lifecycle Metadata:** Swift-like @available attribute tracking
- **Contextual Intelligence:** Rich semantic data objects
- **Platform SDKs:** Cross-platform native SDK generation
- **Adaptive Generation:** Algorithmic design data creation

---
layout: default
---

# 5. Immediate Next Steps & Follow-ups

## September Deliverables
- DNA-1474: Draft outline for on-site shareout ✅
- DNA-1475: Review shareout outline for feedback
- DNA-1476: Create deck and share
- Governance completion: Finish remaining startup deliverables

## Q4 2025 Priorities (Sept 1 - Nov 30)
- **Taxonomy Improvements (DNA-1480):** Address naming inconsistencies
- **Schema Enhancements (DNA-1485):** Fix component schema issues
- **Platform Onboarding:** Begin phased rollout to platform teams
- **Tooling Development:** Create validation and migration tools

---
layout: default
---

# Key Follow-ups Needed

- Platform team input on implementation timeline and constraints
- Resource allocation discussions for Q4 initiatives
- Technical deep-dives for specific Jira tasks
- Governance meeting scheduling and participation (starts October 3rd)
- Token usage audit to identify consolidation opportunities
- Figma architecture collaboration for variable management
- Component anatomy proposal for design team collaboration

---
layout: two-cols
---

# 6. Jira Task Roadmap Overview

## 10 Jira Tasks
- DNA-1479: Project tracking and roadmap IA
- DNA-1480: Taxonomy exploration
- DNA-1481: Typing improvements
- DNA-1482: Data system repo structure changes
- DNA-1483: Data package structural changes
- DNA-1484: Data system repo tooling changes
- DNA-1485: Design data schema improvements
- DNA-1486: Foundation data editing solution
- DNA-1487: Data tiers assessment
- DNA-1488: Theme/platform definitions

::right::

## Implementation Phases
- **Phase 1:** Foundation & Spectrum Pilot
- **Phase 2:** Multi-Platform & Abstraction
- **Phase 3:** Enterprise Features & Open Source
- **Phase 4:** Product Platform & Market Expansion

---
layout: two-cols
---

# 7. Key Takeaways & Immediate Actions

## What We Need From You
- Review Jira tasks and provide feedback on priorities
- Identify platform-specific requirements and constraints
- Schedule follow-up technical deep-dive sessions
- Participate in governance meetings starting this month

::right::

## Next Steps
- **This week:** Review Jira tasks and provide input
- **October 3:** First governance meeting with platform-specific technical discussions
- **Q4 (Sept-Nov):** Start phased implementation of priority initiatives

---
layout: center
class: text-center
---

# Questions & Discussion

## Platform Concerns
What are your biggest challenges?

## Timeline Questions
What works for your team's schedule?

## Resource Needs
What support do you need?

## Technical Details
Which Jira tasks interest you most?

<div class="mt-12">
  <span class="text-sm opacity-50">
    Spectrum Design Data • Onsite Shareout
  </span>
</div>
