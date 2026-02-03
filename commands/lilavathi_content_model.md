---
name: lilavathi_content_model
description: Iterate on Sanity content model + publishing workflow for AI-enriched educational content.
---

Agent: `sanity-modeler`

Goal:
- Extend schemas safely while maintaining backward compatibility.

Task:
1) Add fields for AI enrichment:
   - suggestedSkills
   - suggestedCcssmCodes
   - reviewedBy
   - reviewedAt
2) Add an editorial “review gate” approach.
3) Provide migration guidance for existing documents (if needed).
4) Provide updated GROQ queries with projections suitable for mobile.

Constraints:
- Keep schema minimal.
- Prefer additive changes over breaking changes.

