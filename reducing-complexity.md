---
theme: default
background: https://cover.sli.dev
title: Reducing Complexity & Token Reduction
info: |
  ## Reducing Complexity & Token Reduction
  
  Strategy for simplifying the design data system while maintaining functionality.
  
  Presenter: Garth Braithwaite
  Duration: Discussion facilitator
  Event: Design Data Onsite 2025 - Day 2
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Reducing Complexity
## Token Reduction Strategy

Making the system easier while keeping all the information

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Day 2 Discussion • Garth Braithwaite
  </span>
</div>

<!--
This is our discussion on reducing complexity - inspired directly by pain points in applying the current system.
-->

---
layout: default
---

# The Problem Statement

<v-clicks>

## Current Pain Points
- **Too many component tokens** to manage
- **Complex naming conventions** confuse users
- **Overwhelming choices** for implementers
- **Maintenance burden** grows with every addition

## The Challenge
- Reduce complexity **without losing information**
- Make it **easier for designers** to follow the system
- Give **implementers appropriate data** in technical formats
- Maintain **backward compatibility** during transition

</v-clicks>

<!--
Let's start with what we're hearing from our users. These pain points are driving the "less component tokens" thinking, but we need to be strategic about this.
-->

---
layout: two-cols
---

# Current Token Explosion

```yaml
# Example: Button tokens today
button-primary-background-color-default
button-primary-background-color-hover  
button-primary-background-color-active
button-primary-background-color-focus
button-primary-background-color-disabled

button-secondary-background-color-default
button-secondary-background-color-hover
button-secondary-background-color-active
button-secondary-background-color-focus
button-secondary-background-color-disabled

# ... and so on for every variant
```

::right::

# Proposed Simplification

```yaml
# Component Token References (CTR)
button-primary-background: {
  default: color.blue.900
  hover: color.blue.800  
  active: color.blue.1000
  focus: color.blue.900
  disabled: color.gray.400
}

button-secondary-background: {
  default: color.transparent
  hover: color.gray.100
  active: color.gray.200
  focus: color.transparent
  disabled: color.transparent
}
```

<!--
Here's a concrete example of the problem. On the left, we see the current explosion of individual tokens. On the right, a more structured approach using Component Token References.

The key insight: we can maintain all the information while dramatically reducing the cognitive load.
-->

---
layout: default
---

# Three Audiences, Three Approaches

<div class="grid grid-cols-3 gap-6 mt-8">

<div v-click="1">

## Implementers
**Need**: Technical detail & permutations

```typescript
interface ButtonTokens {
  primary: StateMap<Color>
  secondary: StateMap<Color>
  variants: VariantMap
}
```

**Solution**: Full technical schema with all states

</div>

<div v-click="2">

## Designers  
**Need**: Clear guidance & inference rules

```figma
Button Primary
├─ Background: Primary Blue
├─ Text: White
└─ States: Auto-generated
```

**Solution**: Semantic tokens + inference tooling

</div>

<div v-click="3">

## System Maintainers
**Need**: Single source of truth

```yaml
components:
  button:
    source: core.button
    overrides: platform-specific
    states: auto-generate
```

**Solution**: Declarative configuration

</div>

</div>

<!--
This is the key insight - we don't need to give everyone the same data. Each audience has different needs, and we can serve them appropriately.

[Click through each audience]

The magic happens when we can automatically generate what each group needs from a simpler source.
-->

---
layout: default
---

# Component Token References (CTR)

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## What is CTR?
<v-clicks>

- **Structured references** instead of flat tokens
- **Automatic state generation** from base values
- **Platform-specific output** from shared source
- **Reduced naming complexity** for authors

</v-clicks>

</div>

<div>

## How It Works
<v-clicks>

```yaml
button-primary:
  base: color.blue.900
  states:
    hover: "lighten(base, 10%)"
    active: "darken(base, 10%)"
    disabled: color.gray.400
```

**Generates**:
- CSS custom properties
- iOS semantic colors  
- Android color resources
- Design token files

</v-clicks>

</div>

</div>

<!--
CTR is our proposed solution. Instead of manually creating every possible token, we define the logic and let the system generate what's needed.

This reduces authoring burden while actually providing MORE information to implementers through the generated outputs.
-->

---
layout: default
---

# Hiding Global Values Strategy

<v-clicks>

## Current Problem
- **Global tokens** (color.blue.900) exposed to all users
- **Decision fatigue** from too many primitive choices
- **Inconsistent usage** across teams
- **Brand compliance** hard to enforce

## Proposed Solution
- **Hide primitives** from most user interfaces
- **Expose semantic** tokens as primary choices
- **Provide escape hatches** for valid custom use
- **Build tooling** to guide correct usage

</v-clicks>

<div class="mt-8" v-click>

> "Make the right choice the easy choice, and the wrong choice possible but obvious"

</div>

<!--
This is about information architecture. We're not removing capability, we're organizing it better.

The quote at the bottom captures our philosophy - we want to guide people toward correct usage while not completely blocking edge cases.
-->

---
layout: two-cols
---

# Tooling Strategy

<v-clicks>

## In Figma
- **Semantic token library** as primary interface
- **Auto-complete suggestions** based on context  
- **Validation warnings** for off-brand usage
- **Component inspector** shows token mapping

## In Implementation
- **Build-time validation** catches token misuse
- **IDE extensions** provide token suggestions
- **Documentation generation** from token definitions
- **Migration tools** for legacy token updates

</v-clicks>

::right::

<div v-click="5">

## Dev Mode Integration

```figma
✅ Recommended Tokens
├─ button-primary-background
├─ button-secondary-background  
└─ button-tertiary-background

⚠️ Advanced Options
├─ color.blue.900
├─ color.blue.800
└─ ... (show all)

🔧 Custom Values  
└─ Enter hex/rgb value
```

</div>

<!--
The tooling is crucial to making this work. We need to meet people where they are - in Figma for designers, in code editors for engineers.

The Figma integration on the right shows how we might structure choices to guide users toward correct usage.
-->

---
layout: default
---

# Migration Strategy

<div class="grid grid-cols-3 gap-6 mt-8">

<div v-click="1">

## Phase 1: Parallel Systems
- **Maintain existing** token structure
- **Introduce CTR** alongside current tokens
- **Build tooling** for CTR consumption
- **Document migration** path

</div>

<div v-click="2">

## Phase 2: Deprecation
- **Mark legacy tokens** as deprecated
- **Provide automated** migration tools
- **Support both systems** during transition
- **Communicate timeline** clearly

</div>

<div v-click="3">

## Phase 3: Cleanup
- **Remove deprecated** tokens
- **Consolidate documentation**
- **Optimize tooling** for new system
- **Measure success** metrics

</div>

</div>

<div class="mt-8" v-click="4">

> **Timeline**: 6-month parallel period, 6-month deprecation, 3-month cleanup

</div>

<!--
We can't just flip a switch - this needs to be a carefully managed transition that doesn't break existing work.

The timeline at the bottom gives teams predictability for planning their own migrations.
-->

---
layout: default
---

# Success Metrics

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## Quantitative Measures
<v-clicks>

- **Token count reduction**: Target 60-80% fewer named tokens
- **Implementation time**: Reduce component setup by 50%
- **Support requests**: 75% reduction in "which token?" questions
- **Consistency scores**: Automated brand compliance measurement

</v-clicks>

</div>

<div>

## Qualitative Measures
<v-clicks>

- **Designer confidence** in token selection
- **Engineer satisfaction** with implementation data
- **System maintainer** efficiency in updates
- **Cross-platform consistency** in visual outcomes

</v-clicks>

</div>

</div>

<div class="mt-8" v-click>

> The goal: People spend time on design problems, not token management

</div>

<!--
These metrics help us measure whether we're actually solving the problems we set out to solve.

The bottom line is about freeing cognitive capacity for higher-value work.
-->

---
layout: default
---

# Discussion Questions

<v-clicks>

## Immediate Decisions
- Which components should we pilot CTR with first?
- How do we handle existing products mid-redesign?
- What level of automation is appropriate for state generation?

## Strategic Considerations  
- How does this align with multi-platform goals?
- What governance changes do we need?
- How do we measure and communicate ROI?

## Implementation Details
- What tooling needs to be built vs. adapted?
- How do we handle edge cases and custom requirements?
- What's our communication strategy for the transition?

</v-clicks>

<!--
These questions should drive our discussion. Some we can answer today, others will need follow-up research and planning.

The key is getting alignment on the direction so we can start the detailed planning.
-->

---
layout: center
class: text-center
---

# Let's Discuss

## What questions or concerns do you have?

<div class="text-4xl text-blue-400 mt-8">
  💬
</div>

<div class="mt-8">
Ready to dive into the details...
</div>

<!--
Now let's hear from everyone. This is a big change, and we need all perspectives to make it successful.
-->

