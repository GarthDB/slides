Brainstorm for Onsite
Data System Overview Session

https://paper.dropbox.com/doc/Design-Data-Onsite-Planning-2025--CqW0j_fWBNR4674G3pzkNfvwAg-dpoZHJfX6xGhsmZOEj0X6
https://www.figma.com/design/FN7Lm9DOW2vPlUQfXESCv5/Design-data-system-model?node-id=1-179&t=mFxjYG7ngqFI0It5-1

* Goals (@brownlee)
    * Reducing complexity
    * Reducing ambiguity
    * Data/information model
        * Design Data
        * Design Assets
            * S2 Specs
            * Figma libraries, variables, styles, components
        * Tooling
            * LLM
            * MCP
            * Linting
            * Visual Diff
            * Metrics
            * Automation
                * CI/CD
                    * Changelogs
                    * Data Diff
                    * Release notes
                * Generated Assets
                    * Sprite sheet
                    * AI Training data
        * Documentation
            * Spectrum Design Website
            * Engineering Documentation
            * Training
        * Partnership and discussion
            * Slack messages
                * QOTD
                * Help
            * Meetings
                * Design workshop
                * Regular partnership meetings
                * Ad-hoc huddles
            * Assumptions
* Overview of current workflow (@garthdb)
    * Design Data Authoring process
    * Design Data Distribution process
* Pain points (open for discussion) (@nbaldwin)
        * Understanding the system
    * Customer pain points
        * Implementation Teams
            * Big questions around customization
            * Reading spec files
        * Product Designers / Engineers
            * What are tokens? What aren’t tokens
            * Finding the right token for the appropriate use case (wayfinding)
            * Big questions around customization
    * Our pain points
        * Authoring spec files
        * Tokens Studio
            * Figma not fully integrating with our design data
        * Complexity of system

Assumption: break here

Aspirational model (@nbaldwin present / collab on content)

    * High level functional / distribution model
    * High level E2E workflow (authoring, distribution, data?)

Engineering Strategy for Model Changes (@garthdb)

* Design Data
    * Component Options API
        * States
    * Component Anatomy
    * Design Tokens
        * Value
        * Global → Base Token
        * Alias Token
        * Alias Token
    * Component Token Relationship (nameless component token)
        * Many -to- many (adaptive possibly a pure function)
            * Unique instance information about the component
            * Which part of the component is being defined
            * Which property of that part is being described
            * Which token is providing the value
    * Mappings / Parsers
* Customization (multi-platform)
    * Enables
        * Platform specific implementation
        * Business specific flavor (TODO)
        * Product specialization
    * Consists of 
        * Parser transforms
        * Filtered out data
        * New data
        * Modified data
            * Mappings
            * Value overrides

Multi-Dimensionality Definition + Alignment (@user)

* todo: prepare and meet to discuss

