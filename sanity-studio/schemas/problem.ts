import {defineType, defineField} from 'sanity'

export const problem = defineType({
  name: 'problem',
  title: 'Problem',
  type: 'document',
  fields: [
    // ========== NEW FIELDS (from batch JSON) ==========

    // Identity - PRIMARY KEY
    defineField({
      name: 'excerpt_id',
      title: 'Excerpt ID',
      type: 'string',
      description: 'e.g., "§33" - primary identifier from batch JSON',
      validation: (r) => r.required()
    }),

    // Source provenance
    defineField({
      name: 'source',
      title: 'Source',
      type: 'object',
      fields: [
        defineField({ name: 'section_number', title: 'Section Number', type: 'number' }),
        defineField({ name: 'epub_page_file', title: 'EPUB Page File', type: 'string' }),
        defineField({ name: 'char_offset', title: 'Character Offset', type: 'number' }),
      ]
    }),

    // Content
    defineField({
      name: 'excerpt_text_short',
      title: 'Excerpt Text (Short)',
      type: 'text',
      description: 'Capped at 25 words from source'
    }),

    // CCSSM mapping (new structure)
    defineField({
      name: 'skills_modern_terms',
      title: 'Skills (Modern Terms)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Mathematical skills in modern terminology'
    }),
    defineField({
      name: 'ccssm_mappings',
      title: 'CCSSM Mappings',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'code', title: 'CCSSM Code', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'rationale', title: 'Rationale', type: 'text' }),
          defineField({ name: 'confidence', title: 'Confidence (0-100)', type: 'number', validation: (r) => r.min(0).max(100) }),
        ]
      }]
    }),
    defineField({
      name: 'mapping_confidence_summary',
      title: 'Mapping Confidence Summary',
      type: 'object',
      fields: [
        defineField({ name: 'max_confidence', title: 'Max Confidence', type: 'number' }),
      ]
    }),

    // Quality metadata
    defineField({
      name: 'translation_ambiguity_notes',
      title: 'Translation Ambiguity Notes',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'extraction_quality',
      title: 'Extraction Quality',
      type: 'object',
      fields: [
        defineField({ name: 'non_ascii_chars', title: 'Non-ASCII Characters', type: 'number' }),
        defineField({ name: 'has_multiple_punct_runs', title: 'Has Multiple Punctuation Runs', type: 'boolean' }),
      ]
    }),

    // ========== LEGACY FIELDS (keep for migration) ==========
    defineField({ name: 'chapterNumber', title: 'Chapter Number (Legacy)', type: 'number', validation: (r) => r.min(1) }),
    defineField({ name: 'verseId', title: 'Verse ID (Legacy)', type: 'string' }),
    defineField({ name: 'prompt', title: 'Prompt (as shown to learner)', type: 'text' }),
    defineField({ name: 'modernStatement', title: 'Modern Statement', type: 'text' }),
    defineField({ name: 'hint', title: 'Hint', type: 'text' }),
    defineField({ name: 'solutionSteps', title: 'Solution Steps', type: 'array', of: [{type: 'text'}] }),
    defineField({ name: 'answer', title: 'Final Answer', type: 'string' }),
    defineField({ name: 'difficulty', title: 'Difficulty (1-5)', type: 'number', validation: (r) => r.min(1).max(5) }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'provenance', title: 'Provenance (Legacy)', type: 'object', fields: [
      defineField({ name: 'source', title: 'Source', type: 'string' }),
      defineField({ name: 'aiModel', title: 'AI Model (if any)', type: 'string' }),
      defineField({ name: 'aiPromptId', title: 'AI Prompt ID (if any)', type: 'string' }),
    ]}),

    // ========== REVIEW GATES ==========
    defineField({ name: 'reviewed', title: 'Reviewed', type: 'boolean', initialValue: false }),
    defineField({ name: 'reviewedBy', title: 'Reviewed By', type: 'string' }),
    defineField({ name: 'reviewedAt', title: 'Reviewed At', type: 'datetime' }),
  ],
  preview: {
    select: {
      title: 'excerpt_id',
      subtitle: 'excerpt_text_short',
      confidence: 'mapping_confidence_summary.max_confidence'
    },
    prepare({ title, subtitle, confidence }) {
      return {
        title: title || 'No excerpt ID',
        subtitle: `${confidence ? `[${confidence}%] ` : ''}${subtitle || ''}`
      }
    }
  }
})
