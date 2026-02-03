import {defineType, defineField} from 'sanity'

export const mapping = defineType({
  name: 'mapping',
  title: 'Mapping',
  type: 'document',
  fields: [
    defineField({ name: 'problem', title: 'Problem', type: 'reference', to: [{type: 'problem'}], validation: (r) => r.required() }),
    defineField({ name: 'skills', title: 'Skills', type: 'array', of: [{type: 'reference', to: [{type: 'skill'}]}] }),
    defineField({ name: 'ccssmCodes', title: 'CCSSM Codes', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'confidence', title: 'Confidence (0–100)', type: 'number', validation: (r) => r.min(0).max(100) }),
    defineField({ name: 'ambiguityNotes', title: 'Ambiguity Notes', type: 'text' }),
    defineField({ name: 'reviewed', title: 'Reviewed', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'problem.verseId', subtitle: 'confidence' }
  }
})
