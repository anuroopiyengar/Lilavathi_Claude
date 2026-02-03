import {defineType, defineField} from 'sanity'

export const mapping = defineType({
  name: 'mapping',
  title: 'Mapping',
  type: 'document',
  description: 'Links problems to CCSSM standards with confidence scores',
  fields: [
    // References
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'reference',
      to: [{type: 'problem'}],
      validation: (r) => r.required()
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}]
    }),

    // CCSSM mapping (matches batch JSON structure)
    defineField({
      name: 'ccssm_code',
      title: 'CCSSM Code',
      type: 'string',
      description: 'e.g., "7.NS.A", "HSN-Q★"',
      validation: (r) => r.required()
    }),
    defineField({
      name: 'rationale',
      title: 'Rationale',
      type: 'text',
      description: 'Why this standard applies to this problem'
    }),
    defineField({
      name: 'confidence',
      title: 'Confidence (0–100)',
      type: 'number',
      validation: (r) => r.required().min(0).max(100),
      description: '90-100: clear match, 70-89: strong, 50-69: moderate, <50: weak'
    }),

    // Legacy field (keep for migration)
    defineField({
      name: 'ccssmCodes',
      title: 'CCSSM Codes (Legacy)',
      type: 'array',
      of: [{type: 'string'}],
      hidden: true
    }),

    // Ambiguity notes (from batch JSON)
    defineField({
      name: 'ambiguityNotes',
      title: 'Ambiguity Notes',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Translation/OCR issues affecting this mapping'
    }),

    // Review gate
    defineField({
      name: 'reviewed',
      title: 'Reviewed',
      type: 'boolean',
      initialValue: false,
      description: 'Items with confidence <70 require review'
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'string'
    }),
    defineField({
      name: 'reviewedAt',
      title: 'Reviewed At',
      type: 'datetime'
    }),
  ],
  preview: {
    select: {
      excerptId: 'problem.excerpt_id',
      code: 'ccssm_code',
      confidence: 'confidence',
      reviewed: 'reviewed'
    },
    prepare({ excerptId, code, confidence, reviewed }) {
      return {
        title: `${excerptId || '?'} → ${code || '?'}`,
        subtitle: `${confidence}% confidence ${reviewed ? '✓' : '(needs review)'}`
      }
    }
  }
})
