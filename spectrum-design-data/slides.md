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
- ✅ Strategic alignment achieved
- ✅ Governance structure operational
- ✅ 10 Jira tasks with clear roadmap

::right::

## Key Decisions Made
- **Repository:** spectrum-tokens → spectrum-design-data
- **Implementation:** 4 phased rollout
- **Compatibility:** Backwards compatible
- **Governance:** Monthly meetings + RFC process

---
notes: |
  ## Detailed Notes for Slide 1

  **What We Accomplished:**
  - Had a comprehensive 3-day onsite in August 2025 with all platform teams participating
  - Achieved strategic alignment on the future evolution of Spectrum Design Data
  - Established and made operational a governance structure with clear processes
  - Created 10 specific Jira tasks with a clear roadmap for implementation

  **Key Decisions Made:**
  - Repository renaming from spectrum-tokens to spectrum-design-data (RFC currently in progress)
  - Phased implementation approach with 4 phases that respect each team's constraints and capacity
  - Maintaining backwards compatibility - the current @adobe/spectrum-tokens package will continue to work
  - Governance process established with monthly meetings, RFC process, and standard deprecation procedures

---
layout: two-cols
---

# 2. Customer Pain Points

## Current Challenges
- 🔍 **Discovery:** Hard to find the right token
- 🌀 **Complexity:** Too many unclear relationships
- 📝 **Naming:** Inconsistent conventions
- 📐 **Standards:** Fragmentation across teams

::right::

## The Impact
- ⚡ Reduced efficiency
- 🎯 Lost consistency
- 🔧 Manual overhead
- 📊 Multiple sources of truth

---
notes: |
  ## Detailed Notes for Slide 2

  **Current Token System Challenges:**
  - Discovery Issues: Both designers and engineers have difficulty finding the right token for their needs
  - Complexity Overload: We have too many tokens with unclear relationships between them
  - Naming Inconsistencies: Inconsistent naming conventions and typos throughout the system
  - Standards Gaps: Lack of enforcement leading to fragmentation across different teams and platforms

  **Impact on System Benefits:**
  - Undermines Core Value: These pain points actively reduce efficiency, consistency, and team alignment
  - Platform Fragmentation: Creates multiple sources of truth across different teams
  - Maintenance Burden: Results in manual processes and coordination overhead that could be automated

---
layout: two-cols
---

# 3. Strategic Vision

## The Opportunity
- 🎯 **Reduce Complexity**
- 🛡️ **Improve Trust**
- 🚀 **Increase Velocity**
- 🤖 **Better Coordination**
- 📈 **Expand Design Data**

::right::

## Business Impact
- 🗣️ **Shared Language**
- 🎨 **Unified Consistency**
- ⚡ **Streamlined Efficiency**
- 🔒 **System Reliability**
- 👥 **Team Alignment**

---
notes: |
  ## Detailed Notes for Slide 3

  **The Opportunity:**
  - Reduce Complexity: Refine token data by consolidating component tokens and increasing semantic tokens
  - Improve Trust: Create more reliable and consistent design system tooling
  - Increase Velocity: Enable faster development for teams consuming design data
  - Better Coordination: Replace manual processes with automated workflows
  - Expand Design Data: Add structure, component anatomy, and relationship data for richer context

  **Business Impact:**
  - Shared Language: Establish common terminology across all platforms and teams
  - Consistency: Enable unified design language implementation across products
  - Efficiency: Create streamlined workflows and reduce manual coordination needs
  - System Reliability: Deliver more trustworthy and consistent design data
  - Team Efficiency: Reduce coordination overhead across all platform teams

---
layout: default
---

# 4. Technical Evolution

## From Tokens to Design Data

📄 **Current:** String-based tokens  
🔗 **Future:** Schema-based relationships  
🎯 **Innovation:** Platform-aware adaptation  
🤖 **AI:** LLM-powered assistance

---
notes: |
  ## Detailed Notes for Slide 4

  **Technical Evolution - From Tokens to Design Data:**
  - Current State: String-based tokens with naming inconsistencies and discovery issues
  - Future State: Schema-based relationship objects with strong typing and validation
  - Key Innovation: Platform-aware data that automatically adapts to native conventions for each platform
  - AI Integration: LLM-powered assistance that understands deep design data relationships and context

---
layout: two-cols
---

# Multi-Platform Strategy

## Platform Scope
- 💻 **Web:** Desktop + Mobile
- 🖥️ **Desktop:** Drover
- 📱 **Mobile:** iOS, Android

## Core Principles
- 🎯 **Platform Autonomy**
- 📖 **Clear Terminology**
- 🛡️ **Customization Guardrails**
- 🚀 **Enablement over Enforcement**

::right::

## Core Architecture
- ⏰ **Lifecycle Metadata**
- 🧠 **Contextual Intelligence**
- 🔧 **Platform SDKs**
- 🤖 **Adaptive Generation**

---
notes: |
  ## Detailed Notes for Slide 5

  **Platform Scope:**
  - Web: Both desktop and mobile web applications
  - Native Desktop: Drover platform specifically
  - Native Mobile: iOS and Android native applications

  **Core Principles:**
  - Platform Autonomy: Enable platform teams to work independently while maintaining overall system cohesion
  - Clear Terminology: Establish standardized definitions for platform, foundation, and implementation concepts
  - Customization Guardrails: Create intentional frameworks that prevent fragmentation while allowing flexibility
  - From Enforcement to Enablement: Focus on providing core value and guidance rather than imposing strict rules

  **Core Architecture:**
  - Lifecycle Metadata: Swift-like @available attribute tracking for managing feature lifecycle
  - Contextual Intelligence: Rich semantic data objects that understand relationships and context
  - Platform SDKs: Cross-platform native SDK generation for consistent implementation
  - Adaptive Generation: Algorithmic design data creation that adapts to platform needs

---
layout: default
---

# 5. Immediate Next Steps

## September Deliverables
- ✅ **DNA-1474:** Draft outline complete
- 🔍 **DNA-1475:** Review shareout outline
- 📊 **DNA-1476:** Create and share deck
- ⚙️ **Governance:** Complete startup deliverables

## Q4 2025 Priorities
- 📝 **Taxonomy:** Fix naming inconsistencies
- 🔧 **Schema:** Enhance component schemas
- 🚀 **Platform Onboarding:** Begin rollout
- 🛠️ **Tooling:** Validation and migration tools

---
notes: |
  ## Detailed Notes for Slide 6

  **September Deliverables:**
  - DNA-1474: Draft outline for on-site shareout ✅ (completed)
  - DNA-1475: Review shareout outline for feedback from stakeholders
  - DNA-1476: Create comprehensive deck and share with all platform teams
  - Governance completion: Finish remaining startup deliverables for the governance structure

  **Q4 2025 Priorities (September 1 - November 30):**
  - Taxonomy Improvements (DNA-1480): Address naming inconsistencies across the token system
  - Schema Enhancements (DNA-1485): Fix component schema issues and improve data structure
  - Platform Onboarding: Begin phased rollout to platform teams with proper support
  - Tooling Development: Create validation and migration tools to support the transition

---
layout: default
---

# Key Follow-ups Needed

- 👥 **Platform team input** on timeline and constraints
- 💰 **Resource allocation** for Q4 initiatives
- 🔧 **Technical deep-dives** for Jira tasks
- 📅 **Governance meetings** (starts October 3rd)
- 📊 **Token usage audit** for consolidation
- 🎨 **Figma collaboration** on variables
- 🧩 **Component anatomy** design collaboration

---
notes: |
  ## Detailed Notes for Follow-ups

  **Key Follow-ups Needed:**
  - Platform team input on implementation timeline and constraints for each team's specific needs
  - Resource allocation discussions for Q4 initiatives to ensure proper staffing and support
  - Technical deep-dives for specific Jira tasks with relevant stakeholders
  - Governance meeting scheduling and participation (starts October 3rd) - monthly cadence
  - Token usage audit to identify consolidation opportunities and reduce complexity
  - Figma architecture collaboration for variable management and design tool integration
  - Component anatomy proposal for design team collaboration on structural improvements

---
layout: two-cols
---

# 6. Jira Task Roadmap

## 10 Jira Tasks
- 📊 **DNA-1479:** Project tracking IA
- 📝 **DNA-1480:** Taxonomy exploration
- 🔧 **DNA-1481:** Typing improvements
- 🏗️ **DNA-1482:** Repo structure changes
- 📦 **DNA-1483:** Package structural changes
- 🛠️ **DNA-1484:** Tooling changes
- 🔗 **DNA-1485:** Schema improvements
- ✏️ **DNA-1486:** Foundation editing solution
- 📈 **DNA-1487:** Data tiers assessment
- 🎨 **DNA-1488:** Theme/platform definitions

::right::

## Implementation Phases
- **Phase 1:** Foundation & Pilot
- **Phase 2:** Multi-Platform
- **Phase 3:** Enterprise & Open Source
- **Phase 4:** Market Expansion

---
notes: |
  ## Detailed Notes for Slide 7

  **10 Jira Tasks:**
  - DNA-1479: Project tracking and roadmap information architecture
  - DNA-1480: Taxonomy exploration to address naming and categorization
  - DNA-1481: Typing improvements for better type safety and validation
  - DNA-1482: Data system repository structure changes for better organization
  - DNA-1483: Data package structural changes to improve usability
  - DNA-1484: Data system repository tooling changes for automation
  - DNA-1485: Design data schema improvements for richer relationships
  - DNA-1486: Foundation data editing solution for easier maintenance
  - DNA-1487: Data tiers assessment to understand hierarchy and organization
  - DNA-1488: Theme/platform definitions for clearer boundaries and scope

  **Implementation Phases:**
  - Phase 1: Foundation & Spectrum Pilot - establish core infrastructure
  - Phase 2: Multi-Platform & Abstraction - expand to all platforms
  - Phase 3: Enterprise Features & Open Source - advanced capabilities
  - Phase 4: Product Platform & Market Expansion - scale and growth

---
layout: two-cols
---

# 7. Key Takeaways & Actions

## What We Need From You
- 📋 **Review** Jira tasks and priorities
- 🎯 **Identify** platform requirements
- 📅 **Schedule** technical deep-dives
- 🤝 **Participate** in governance meetings

::right::

## Next Steps
- **This week:** Review and provide input
- **October 3:** First governance meeting
- **Q4:** Start phased implementation

---
notes: |
  ## Detailed Notes for Slide 8

  **What We Need From You:**
  - Review Jira tasks and provide feedback on priorities based on your team's needs
  - Identify platform-specific requirements and constraints that we need to consider
  - Schedule follow-up technical deep-dive sessions for tasks relevant to your platform
  - Participate in governance meetings starting this month to ensure ongoing alignment

  **Next Steps:**
  - This week: Review Jira tasks and provide input on what's most important for your team
  - October 3: First governance meeting with platform-specific technical discussions
  - Q4 (September-November): Start phased implementation of priority initiatives with proper support

---
layout: center
class: text-center
---

# Questions & Discussion

## 🚧 Platform Concerns
What are your biggest challenges?

## ⏰ Timeline Questions
What works for your team's schedule?

## 🤝 Resource Needs
What support do you need?

## 🔧 Technical Details
Which Jira tasks interest you most?

---
notes: |
  ## Detailed Notes for Q&A Slide

  **Discussion Topics:**
  - Platform Concerns: Open discussion about specific challenges each platform team is facing
  - Timeline Questions: Understanding what timeline works best for each team's current commitments
  - Resource Needs: Identifying what support, tools, or resources teams need to be successful
  - Technical Details: Deep-dive into specific Jira tasks that are most relevant or interesting to attendees

  **Facilitator Notes:**
  - Encourage specific examples and concrete concerns
  - Take notes on resource requests for follow-up
  - Identify which teams want to be involved in which Jira tasks
  - Schedule follow-up meetings based on interest and availability

<div class="mt-12">
  <span class="text-sm opacity-50">
    Spectrum Design Data • Onsite Shareout
  </span>
</div>
