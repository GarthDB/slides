Shareout - Draft Outline
Spectrum Design Data Onsite Shareout - Draft Outline

Executive Summary

Duration: 20 minutes
Audience: Adobe Design System stakeholders and platform teams
Objective: Share key onsite outcomes, strategic vision, and immediate next steps
Context: Web team shareout same day - keep focused and concise


1. Onsite Outcomes & Key Takeaways (4 minutes)

1.1 What We Accomplished

* 3-day onsite in August 2025 with all platform teams
* Strategic alignment achieved on Spectrum Design Data evolution
* Governance structure established and operational
* 10 Jira tasks created with clear roadmap

1.2 Key Decisions Made

* Repository renaming: spectrum-tokens → spectrum-design-data (RFC in progress)
* Phased implementation: 4 phases respecting team constraints
* Backwards compatibility: Current @adobe/spectrum-tokens package continues
* Governance process: Monthly meetings, RFC process, standard deprecation


2. Customer Pain Points (2 minutes)

2.1 Current Token System Challenges

* Discovery Issues: Difficulty finding the right token (designers and engineers)
* Complexity Overload: Too many tokens with unclear relationships
* Naming Inconsistencies: Inconsistent naming conventions and typos
* Standards Gaps: Lack of enforcement leading to fragmentation

2.2 Impact on System Benefits

* Undermines Core Value: Pain points reduce efficiency, consistency, and team alignment
* Platform Fragmentation: Multiple sources of truth across teams
* Maintenance Burden: Manual processes and coordination overhead

3. Strategic Vision (4 minutes)

3.1 The Opportunity

* Reduce Complexity: Refine token data by consolidating component tokens and increasing semantic tokens
* Improve Trust: More reliable and consistent design system tooling
* Increase Velocity: Faster development for teams consuming design data
* Better Coordination: Automated processes instead of manual overhead
* Expand Design Data: Add structure, component anatomy, and relationship data for richer context

3.2 Business Impact

* Shared Language: Common terminology across all platforms and teams
* Consistency: Unified design language implementation
* Efficiency: Streamlined workflows and reduced manual coordination
* System Reliability: More trustworthy and consistent design data
* Team Efficiency: Reduced coordination overhead across platforms


4. Technical Evolution (4 minutes)

4.1 From Tokens to Design Data

* Current: String-based tokens with naming inconsistencies and discovery issues
* Future: Schema-based relationship objects with strong typing and validation
* Key Innovation: Platform-aware data that adapts to native conventions
* AI Integration: LLM-powered assistance with deep design data understanding

4.2 Multi-Platform Strategy

* Platform Scope: Web (desktop + mobile), Native Desktop (Drover), Native Mobile (iOS, Android)
* Platform Autonomy: Enable platform teams while maintaining cohesion
* Clear Terminology: Standardized definitions for platform, foundation, implementation
* Customization Guardrails: Intentional frameworks to prevent fragmentation
* From Enforcement to Enablement: Provide core value and guidance, not strict rules

4.3 Core Architecture

* Lifecycle Metadata: Swift-like @available attribute tracking
* Contextual Intelligence: Rich semantic data objects
* Platform SDKs: Cross-platform native SDK generation
* Adaptive Generation: Algorithmic design data creation


5. Immediate Next Steps & Follow-ups (4 minutes)

5.1 September Deliverables

* DNA-1474: Draft outline for on-site shareout ✅
* DNA-1475: Review shareout outline for feedback
* DNA-1476: Create deck and share
* Governance completion: Finish remaining startup deliverables

5.2 Q4 2025 Priorities (Sept 1 - Nov 30)

* Taxonomy Improvements (DNA-1480): Address naming inconsistencies
* Schema Enhancements (DNA-1485): Fix component schema issues
* Platform Onboarding: Begin phased rollout to platform teams
* Tooling Development: Create validation and migration tools

5.3 Key Follow-ups Needed

* Platform team input on implementation timeline and constraints
* Resource allocation discussions for Q4 initiatives
* Technical deep-dives for specific Jira tasks
* Governance meeting scheduling and participation (starts October 3rd)
* Token usage audit to identify consolidation opportunities
* Figma architecture collaboration for variable management
* Component anatomy proposal for design team collaboration


6. Jira Task Roadmap Overview (2 minutes)

6.1 10 Jira Tasks

* DNA-1479: Project tracking and roadmap IA
* DNA-1480: Taxonomy exploration
* DNA-1481: Typing improvements
* DNA-1482: Data system repo structure changes
* DNA-1483: Data package structural changes
* DNA-1484: Data system repo tooling changes
* DNA-1485: Design data schema improvements
* DNA-1486: Foundation data editing solution
* DNA-1487: Data tiers assessment
* DNA-1488: Theme/platform definitions

6.2 Implementation Phases

* Phase 1: Foundation & Spectrum Pilot
* Phase 2: Multi-Platform & Abstraction
* Phase 3: Enterprise Features & Open Source
* Phase 4: Product Platform & Market Expansion


7. Key Takeaways & Immediate Actions (1 minute)

7.1 What We Need From You

* Review Jira tasks and provide feedback on priorities
* Identify platform-specific requirements and constraints
* Schedule follow-up technical deep-dive sessions
* Participate in governance meetings starting this month

7.2 Next Steps

* This week: Review Jira tasks and provide input
* October 3: First governance meeting with platform-specific technical discussions
* Q4 (Sept-Nov): Start phased implementation of priority initiatives

7.3 Questions & Discussion

* Platform concerns: What are your biggest challenges?
* Timeline questions: What works for your team's schedule?
* Resource needs: What support do you need?
* Technical details: Which Jira tasks interest you most?

