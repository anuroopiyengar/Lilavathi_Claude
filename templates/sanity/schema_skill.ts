import {defineType, defineField} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'gradeBand', title: 'Grade Band', type: 'string', options: {
      list: ['6-8', '9-10', '11-12', 'K-5', 'Other']
    }}),
    defineField({ name: 'ccssmCodes', title: 'CCSSM Codes', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'reviewed', title: 'Reviewed', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'name', subtitle: 'gradeBand' } }
})
