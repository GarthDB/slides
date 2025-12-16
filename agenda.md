Doc Squad Data GroupWhen: Thursdays, cadence TBD (50 mins)

* :flag-us: Austin, USA: 2:10 PM
* :flag-us: Illinois, USA: 2:10 PM

* :flag-us: Idaho, USA: 1:10 PM

Why: This meeting is focused on defining the maintenance plan and vision forcomponent-schemaJSON
Who: Invites are limited to Amun Ra, Jess Sattell, and Garth Braithwaite . Other contributors/collaborators are welcome to join as needed.

:warning: This working group focuses on the plan that defines how design contributes to and influences the component-schema repository—not specific lines of JSON. 

Referenced material :bookmark: 

* [DRAFT RFC]  Schema Maintenance & Feedback Integration Process | aka: “RFC”, “Draft RFC”, “Schema plan RFC”
* [S2 Docs Sprint] Component page status + resource links | aka: “Paper”, “Paper doc” “Doc sprint Paper”, “Doctober”
* [Automation Script]  JSON Feedback Categorizer | aka: “Amun’s script”, “Cursor script”, “Automation script”
* [Component-schema repo] Component Schemas | aka: “JSON”, “API”, “Schema repo”, “Data”

FAQ :question-mark: 

Where is the design team at today in terms of the component-schema?
Right now, design feedback on the component schema is centralized in Paper, with no defined process for triage, validation or schema updates. This centralization creates a single point of dependency, slowing progress and increasing maintenance risk.

Why don't we just teach designers to make pull requests of their own feedback into the repo right now? 
Without defined structures for validation, ownership, and merging, we risk multiplying inconsistencies across more contributors. The goal is to ensure contributions remain accurate, reviewed, and sustainable before contributing to the repo.

Why don't we do ad hoc contributions to the repo as we did before Paper doc?
Ad hoc contribution was possible when feedback volume was small and centralized. Now that multiple designers and squads are contributing feedback, lack of structure creates delayed merges and confusion. Spectrum design data groups are moving towards decentralized contribution models. This means the system should not rely on single maintainers and instead should prioritize visible, shared workflows when appropriate. 

Why an RFC? 
The RFC prevents feedback debt from compounding. It creates the structure needed to triage, validate, and merge design input consistently as the system scales.




Agenda :book: 




Time
	Topic
	Purpose/Focus
	Speaker
	Outcome
	Notes

10 mn
	Kickoff 
	Align on purpose of working group, expected group cadence
	Amun 
	-Draft RFC / where it lives/ timeline for approval
-FAQ answers
-Calendar invites

	Need to align on where Draft RFC lives (Git/Paper) and timeline of approval before execution

TBD
	Vision for data and design authoring 
	Define what the data structure represents and how it supports AI + documentation design goals.
	Garth
	-Clarity on preferred lines of ownership for design + eng

-Data info slides 
	

20 min (?)
	Scheduling awareness and training for designers for understanding and contributing to data
	Identify the actual pain points that designers are having with understanding this data and their responsibilities for contributing to it.

And, make a plan for how we will address these pain points, through communication.
	Jess
	Plan to communicate awareness and training

Currently the biggest unknowns/points of confusion for designers encountering and contributing to this data are:
* How this is different from what we did in the past (the S1 "Design API")
* How to write it (the process of translating design into data)
* How this data connects (or doesn’t) to implementations — including Figma, “the design tool implementation.”
	Awareness - sharing information about this topic —what people need to know, and any expectations for them regarding this
* Example: A walkthrough of the process so far to create this data (the work that Amun and Garth have done)
Training - educating people on how to actually contribute
* Example: A tutorial for how to use GitHub





