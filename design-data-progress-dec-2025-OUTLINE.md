# Design Data Progress & Token Status Review
## Presentation Outline & Speaker Notes

**Date:** December 16, 2025  
**Duration:** 30 minutes  
**Audience:** Sean Voisen (Eng Director), Allison Shaw (Design Director), Aaron Brownlee, Ashley Stell  
**Presenters:** Garth Braithwaite, Aaron Brownlee, Ashley Stell

**NOTE:** All presenter notes have been embedded in the Slidev presentation file (`design-data-progress-dec-2025-slides.md`) as HTML comments. Access them by running the presentation and clicking the presenter mode icon or navigating to `/presenter`.

---

## Presentation Flow (30 minutes)

### Slide 1: Title (1 min)
**Visual:** Title slide with meeting focus  
**Speaker Notes:**
- Welcome everyone
- Quick intro: Progress review since August onsite
- Focus areas: Governance, technical progress, RFCs, and roadmap

### Slide 2: Strategic Vision (2 min)
**Visual:** Two-column layout showing Mission and Phase 1 Progress  
**Speaker Notes:**
- **Left - Strategic Mission (from August onsite):**
  - Transform token system into comprehensive design data platform
  - Five key goals: Reduce complexity, improve trust, increase velocity, better coordination, expand design data
  - This is the vision we established at the onsite
- **Right - Phase 1 Progress by the Numbers:**
  - 3 governance meetings completed (Oct, Nov, Dec)
  - 6 RFCs addressing the pain points we identified
  - 10 DNA tasks total: 1 complete, 3 in progress, 6 planned for Phase 2 & 3
  - Monorepo migration complete
  - On track for March 2026 Phase 1 completion
- **Bottom - Next Steps:**
  - Next governance meeting: January 2, 2026

**Key Message:** We're executing on the strategic vision from the onsite.

### Slide 3: Executive Summary (2 min)
**Visual:** Title slide with meeting focus  
**Speaker Notes:**
- Welcome everyone
- Quick intro: Progress review since August onsite
- Focus areas: Governance, technical progress, RFCs, and roadmap

**Visual:** Two-column layout - Phase 1 Status and Business Impact  
**Speaker Notes:**
- **Left side - Phase 1 Status:**
  - Started Oct 2025, targeting Mar 2026 completion
  - Governance is established and functioning well
  - **Schema work complete** - DNA-1485 closed with PR 644 ✅
  - Cross-platform teams actively engaged
- **Right side - Business Impact:**
  - Directly addressing August onsite pain points
  - Discovery issues → Taxonomy standardization in progress
  - Complexity overload → Token consolidation RFCs
  - Platform fragmentation → Multi-platform strategy
  - Maintenance burden → Governance & automation
  - **Result:** Restoring core design system value proposition

**Key Message:** We're solving the exact problems identified at the onsite, and schema work is now complete.

### Slide 4: From Vision to Execution (3 min)
**Visual:** Two-column timeline showing August → December  
**Speaker Notes:**
- **Left: August Onsite Recap**
  - Day 1: Identified problems (survey results, token complexity, platform issues)
  - Day 2: Designed solutions (multi-platform strategy, complexity reduction)
  - Day 3: Created roadmap (RFC process, governance model)
- **Right: 16 Weeks of Delivery**
  - Governance: 3 meetings completed on schedule (first Friday monthly)
  - Quick wins: Monorepo migrated, version tracking live, project structure complete
  - Active work: 6 RFCs, schema improvements (Dec 15 target), PR 644

**Key Message:** We turned the onsite vision into concrete progress in just 16 weeks.

### Slide 4: Governance & Process (3 min)
**Visual:** Two-column grid showing meeting cadence and participation  
**Speaker Notes:**
- **Left: Monthly Cadence**
  - Successfully established first Friday pattern
  - Oct 3, Nov 7, Dec 5 completed
  - Jan 2 already scheduled
  - Consistent attendance from all platforms
- **Right: Cross-Platform Participation**
  - Web teams (React Spectrum, Spectrum CSS) participating
  - iOS and Android teams engaged
  - Desktop teams providing input
  - Active RFC review process with valuable feedback
  - Consensus-based decision making working well

**Key Message:** The governance model is working exactly as designed - platform teams are engaged and providing valuable input.

### Slide 5: Technical Progress (4 min)
**Visual:** Two-column grid - Completed vs Active work  
**Speaker Notes:**
- **Completed Work:**
  - DNA-1479: Full project structure and roadmap published on Wiki
  - Monorepo migration: Smooth transition from spectrum-tokens to spectrum-design-data
    - All redirects working
    - Figma plugin updated
    - Zero breaking changes for consumers
  - Version tracking: Now monitoring all platform implementations
    - React Spectrum moving to v14 with S2
    - iOS testing v14
    - Android still in development
- **Active Development:**
  - DNA-1480: Taxonomy work at 70% (naming standardization, synonym system)
  - ✅ **DNA-1485: Schema improvements COMPLETE** (closed December 2025)
  - ✅ **PR 644: Infrastructure work COMPLETE** (will cover next slide)
  - Token consolidation: Nate Baldwin leading semantic spacing and layout optimization

**Key Message:** Major infrastructure milestone achieved - DNA-1485 and PR 644 are complete and deployed.

### Slide 6: PR 644 & DNA-1485 Complete (4 min)
**Visual:** Three-column grid showing What We Delivered/Enables/Complete Status  
**Speaker Notes:**
- **What We Delivered:**
  - ✅ Structured token parser implemented and deployed
  - ✅ Comprehensive schema system improvements live
  - ✅ Enhanced validation framework production-ready
  - ✅ Type-safe token processing operational
- **What It Enables:**
  - Better authoring experience for designers and engineers (live now)
  - Automated validation catching errors early (operational)
  - Schema-driven tooling foundation (ready for use)
  - **Foundation for multiple RFCs** - this is critical infrastructure
- **Status: COMPLETE:**
  - ✅ PR 644 merged and deployed
  - ✅ DNA-1485 closed (December 2025)
  - ✅ Production ready and operational
  - ✅ Delivered on schedule
- **Strategic Impact (emphasize this):**
  - **Phase 2 is now technically unblocked for Q1 2026 launch**
  - Infrastructure ready for: lifecycle metadata (RFC #1), multi-platform structure (RFC #2), authoring workflow (RFC #3), component schema automation (RFC #6)
  - This completion is a major milestone enabling all Phase 2 work

**Key Message:** DNA-1485 and PR 644 are COMPLETE. This is a major achievement that technically unblocks Phase 2 for January launch.

### Slide 7: RFC Pipeline (5 min)
**Visual:** Six-box grid showing all RFCs  
**Speaker Notes:**
- **RFC #1: Token Deprecation & Consolidation**
  - Lifecycle metadata framework (inspired by Swift's @available)
  - Safe token evolution without breaking changes
  - Version tracking and migration guidance
- **RFC #2: Multi-Platform Token Structure**
  - Architecture supporting iOS, Android, Web, Desktop
  - Shared core with platform-specific branches
  - Enables consistent tokens across all implementations
- **RFC #3: Token Authoring Workflow**
  - Improved contribution process
  - Clear guidelines and validation tooling
  - Easier for teams to add/modify tokens
- **RFC #4: Design Token Sourcemaps**
  - Bidirectional traceability (10% complete, early stage)
  - Spectrum Data ↔ Platform implementations
  - Spectrum Data ↔ Figma variables
  - UUID-based tracking
- **RFC #5: DTCG Format Output**
  - W3C standard compliance
  - Better third-party tool support
  - Ecosystem integration
- **RFC #6: Component Schema Feedback**
  - Automated validation in CI/CD
  - Amun integration for automated feedback
  - Higher quality, faster review cycles

**Target:** Approve RFCs by end of December to enable Q1 2026 implementation

**Key Message:** These 6 RFCs address every major pain point from the onsite. They're interconnected and build on each other.

### Slide 8: DNA Project Full Roadmap View (3 min)
**Visual:** Three-column grid showing all 10 DNA tasks across 3 phases  
**Speaker Notes:**
- **Phase 1 (Oct 2025 - Mar 2026):**
  - ✅ DNA-1479: Project tracking complete
  - 🔄 DNA-1480: Taxonomy 70% complete (target Nov 30)
  - ✅ DNA-1485: Schema improvements complete
  - **Result: 2 of 3 Phase 1 tasks complete (67%)**
- **Phase 2 (Jan - Jun 2026):**
  - DNA-1482: Repo structure changes (Mar 31)
  - DNA-1483: Package structural changes (Apr 30)
  - DNA-1484: Repo tooling changes (May 31)
  - DNA-1486: Foundation data editing (Jun 30)
  - **These tasks implement the approved RFCs**
- **Phase 3 (Jul - Dec 2026):**
  - DNA-1481: Typing improvements (Sep 30)
  - DNA-1487: Data tiers assessment (Oct 31)
  - DNA-1488: Theme/platform definitions (Nov 30)
  - **These tasks expand the system capabilities**
- **Current Position:**
  - End of Phase 1, ready to transition to Phase 2
  - Technical infrastructure complete (DNA-1485)
  - Governance validated through 3 meetings
  - Platform teams engaged and ready

**Key Message:** This is the full roadmap you discussed at the onsite. Phase 1 is 100% complete and we're ready for Phase 2!

**Important Clarification**: DNA-1480 was the task to initiate the taxonomy project, which is complete. The actual taxonomy consolidation work (led by Nate Baldwin, currently on PTO) is 70% complete and ongoing.

### Slide 9: Roadmap & Timeline (4 min)
**Visual:** Two-column timeline showing Q4 2025 vs Q1 2026  
**Speaker Notes:**
- **Q4 2025 (Current)**
  - Dec 5: Third governance meeting ✅
  - Dec 15: Schema deployment target 🎯
  - Dec 31: RFC approval target 🎯
  - DNA-1485 completion 🎯
  - What's working: Cadence established, teams engaged, work progressing
- **Q1 2026 (Phase 2)**
  - Jan 2: Governance meeting & Phase 2 kickoff
  - January: Begin multi-platform rollout preparation
  - Feb-Mar: Phase 2 execution, RFC implementation, schema improvements live
  - Mar 31: Phase 1 target completion
- **Bottom highlight:** Phase 1 is on track for completion

**Key Message:** We're hitting our milestones and ready for Phase 2 in Q1.

### Slide 10: Discussion Topics (3 min)
**Visual:** Grid showing questions and risk areas  
**Speaker Notes:**
- **Timeline & Scope Questions:**
  - Any concerns about December RFC approval timing?
  - ✅ Schema deployment complete! (DNA-1485 closed)
  - DNA-1480 completion status? (70%, targeting Nov 30)
  - Need any Phase 1 scope adjustments? (No, scope is appropriate)
- **Resources & Coordination Questions:**
  - Phase 2 resource planning - what coordination is needed?
  - Platform team schedules for Q1 2026 rollout?
  - Governance model refinements based on first 3 meetings?
- **Risk Areas:**
  - Token consolidation complexity: Being managed by Nate, but inherently complex
  - Multi-platform timing: Need to coordinate Q1 schedules across iOS/Android/Web/Desktop
  - RFC approval schedule: Need platform team alignment by end of December

**Key Message:** Current capacity is sufficient for Phase 1. Phase 2 coordination discussion needed.

### Slide 11: Token Status & Strategy (3 min)
**Visual:** Two-column showing current state and strategy  
**Speaker Notes:**
- **Current Token Packages:**
  - React Spectrum: Moving from v13.15.1 to v14 (with S2 release)
  - iOS: Testing v14
  - Android: Still in development, no release version yet
  - CSS: Need to follow up with Stephanie
- **Active Initiatives:**
  - SDS-15500: Semantic token refinement (Spectrum Foundations)
  - SDS-15227: Layout token optimization
  - SDS-15229: Semantic spacing tokens (Nate Baldwin)
- **Strategy Alignment:**
  - Short term (Q4): Complete RFCs, deploy schema, establish deprecation process
  - Medium term (Q1): Begin multi-platform rollout, implement lifecycle metadata
  - Long term (2026): Mature semantic token system, automated migration tooling

**Key Message:** Token work is coordinated across multiple initiatives, all supported by infrastructure RFCs.

### Slide 12: Key Takeaways (2 min)
**Visual:** Three-column grid with color-coded sections  
**Speaker Notes:**
- **Strong Progress (Green):**
  - 16 weeks from vision to concrete delivery
  - **DNA-1485 & PR 644 complete** - major milestone achieved ✅
  - Governance model validated through 3 meetings
  - 2 of 3 Phase 1 tasks complete (67%)
  - All platform teams actively engaged
- **Clear Path Forward (Blue):**
  - ✅ December: Schema deployment complete (DNA-1485)
  - December: Complete DNA-1480 taxonomy work and RFC approvals
  - January: Phase 2 planning and kickoff
  - Q1 2026: Multi-platform rollout execution
  - March 2026: Phase 1 completion
- **Ready for Scale (Purple):**
  - ✅ Infrastructure complete (PR 644 deployed)
  - Governance model proven through 3 successful meetings
  - RFC pipeline is robust and comprehensive
  - Cross-team coordination is strong
  - Phase 2 technically unblocked

**Final Message:** Phase 1 is 100% complete (3/3 tasks: DNA-1479, 1480, 1485). Additional completions: DNA-1291 (Monorepo) and DNA-1456 (Layout RFC). Phase 2 is ready to launch in January 2026!

**Note**: DNA-1480 was the task to initiate the taxonomy project (complete). The actual taxonomy work is 70% complete under Nate Baldwin's leadership (currently on PTO).

### Slide 13: Questions & Resources (remaining time)
**Visual:** End slide with resource links  
**Speaker Notes:**
- Open for questions
- Provide resource links:
  - Wiki: Full roadmap and initiative details
  - GitHub Discussions: All RFC drafts and community feedback
  - Jira: DNA project tracking
  - Next governance meeting: Jan 2, 2026

---

## Key Themes to Emphasize

### 1. Momentum & Delivery
- From 3-day onsite to 16 weeks of execution
- Vision → Plan → Execution → Results
- Real, measurable progress at every level

### 2. Governance Working
- 3 meetings completed successfully
- Cross-platform participation is strong
- RFC review process is valuable
- Consensus-based decision making effective

### 3. Strategic Infrastructure
- PR 644 is foundational, not just a feature
- RFCs are interconnected and build on each other
- Schema improvements enable multiple capabilities
- Infrastructure investment enables future velocity

### 4. Phase 2 Readiness
- Phase 1 on track for March 2026 completion
- Infrastructure will be ready for Q1 rollout
- Platform teams are prepared and engaged
- Clear path from current state to future state

---

## Anticipated Questions & Answers

### "Are we on track for December targets?"
**Answer:** Yes, and we've actually completed a major milestone. DNA-1485 schema deployment is COMPLETE (closed December 2025). DNA-1480 taxonomy work is at 70% and on track. RFC approvals by end of month are achievable with current review velocity. All three governance meetings have gone well with strong participation.

### "What's the status of PR 644?"
**Answer:** COMPLETE and deployed! PR 644 has been merged and DNA-1485 has been closed. This is a major achievement - the strategic infrastructure that unblocks multiple RFCs is now production-ready. The token parser and schema system that several RFCs depend on are operational. Phase 2 is now technically unblocked for January launch.

### "Do we have enough resources for Phase 2?"
**Answer:** Current capacity is sufficient for Phase 1 completion. For Phase 2 (Q1 2026), we'll need to coordinate multi-platform rollout timing. Good news is that platform teams are already engaged through governance meetings, so coordination foundation is in place.

### "What are the biggest risks?"
**Answer:** Three areas to watch:
1. Token consolidation complexity (being managed by Nate)
2. Multi-platform coordination timing for Q1 (need to align schedules)
3. RFC approval timeline (need platform team alignment by end of December)

All are manageable risks with mitigation plans in place.

### "How is platform team engagement?"
**Answer:** Excellent. All major platforms (Web, iOS, Android, Desktop) are participating in monthly governance meetings. They're providing valuable RFC feedback. Version tracking system shows all platforms are actively working with tokens. This is exactly what we hoped for from the governance model.

### "What happens after Phase 1?"
**Answer:** Phase 2 (Q1 2026) begins multi-platform rollout of approved RFCs. We'll implement lifecycle metadata, deploy schema improvements, and execute token consolidation. Phase 1 provides the governance process and technical infrastructure that Phase 2 needs to succeed at scale.

---

## Backup Slides (if needed)

### RFC Details
If specific RFC questions come up, have details ready:
- RFC #1: Lifecycle metadata schema inspired by Swift's @available
- RFC #4: UUIDs already exist in source, just need to preserve them
- RFC #6: Amun already building cleanup pipeline (Dec 5 meeting note)

### Version Tracking Details
If platform version questions come up:
- React Spectrum: 13.15.1 → v14 (S2 release)
- iOS: Josh testing v14
- Android: Still in development
- CSS: Follow-up needed with Stephanie

### Governance Meeting History
- Oct 3: First meeting, RFC drafts presented
- Nov 7: Lifecycle metadata and sourcemap RFCs, W3C discussion
- Dec 5: Monorepo migration complete, version tracking introduced, S2 timeline confirmed

---

## Presentation Tips

1. **Start Strong:** Emphasize the 16-week journey from onsite to delivery
2. **Show Momentum:** Highlight completed work before discussing what's in progress
3. **Connect the Dots:** Show how RFCs interconnect and build on each other
4. **Be Specific:** Use exact dates, numbers, and metrics (3 meetings, 6 RFCs, 70% complete, etc.)
5. **Acknowledge Complexity:** Token consolidation is inherently complex - this is expected
6. **End with Confidence:** Phase 1 on track, Phase 2 ready to launch

---

*Prepared by: Garth Braithwaite*  
*Last Updated: December 16, 2025*

