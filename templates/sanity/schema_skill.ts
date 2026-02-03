import {defineType, defineField} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    // Identity
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
      description: 'Skill name in modern terms'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),

    // Modern terms (from batch JSON skills_modern_terms)
    defineField({
      name: 'modern_terms',
      title: 'Modern Terms',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Alternative descriptions from batch JSON skills_modern_terms'
    }),

    // Classification
    defineField({
      name: 'gradeBand',
      title: 'Grade Band',
      type: 'string',
      options: {
        list: ['K-2', '3-5', '6-8', '9-10', '11-12', 'Other']
      }
    }),
    defineField({
      name: 'ccssmCodes',
      title: 'CCSSM Codes',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., "7.NS.A", "HSN-Q★"'
    }),

    // Mapping metadata
    defineField({
      name: 'typical_confidence',
      title: 'Typical Confidence',
      type: 'number',
      description: 'Average confidence when this skill is mapped (0-100)',
      validation: (r) => r.min(0).max(100)
    }),

    // Review gate
    defineField({
      name: 'reviewed',
      title: 'Reviewed',
      type: 'boolean',
      initialValue: false
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'gradeBand',
      codes: 'ccssmCodes'
    },
    prepare({ title, subtitle, codes }) {
      return {
        title,
        subtitle: `${subtitle || ''} ${codes?.length ? `(${codes.join(', ')})` : ''}`
      }
    }
  }
})
