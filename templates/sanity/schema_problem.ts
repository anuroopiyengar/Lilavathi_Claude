import {defineType, defineField} from 'sanity'

export const problem = defineType({
  name: 'problem',
  title: 'Problem',
  type: 'document',
  fields: [
    defineField({ name: 'chapterNumber', title: 'Chapter Number', type: 'number', validation: (r) => r.required().min(1) }),
    defineField({ name: 'verseId', title: 'Verse ID', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'prompt', title: 'Prompt (as shown to learner)', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'modernStatement', title: 'Modern Statement', type: 'text' }),
    defineField({ name: 'hint', title: 'Hint', type: 'text' }),
    defineField({ name: 'solutionSteps', title: 'Solution Steps', type: 'array', of: [{type: 'text'}] }),
    defineField({ name: 'answer', title: 'Final Answer', type: 'string' }),
    defineField({ name: 'difficulty', title: 'Difficulty (1–5)', type: 'number', validation: (r) => r.min(1).max(5) }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'reviewed', title: 'Reviewed', type: 'boolean', initialValue: false }),
    defineField({ name: 'provenance', title: 'Provenance', type: 'object', fields: [
      defineField({ name: 'source', title: 'Source', type: 'string' }),
      defineField({ name: 'aiModel', title: 'AI Model (if any)', type: 'string' }),
      defineField({ name: 'aiPromptId', title: 'AI Prompt ID (if any)', type: 'string' }),
    ]}),
  ],
  preview: {
    select: { title: 'verseId', subtitle: 'prompt' }
  }
})
