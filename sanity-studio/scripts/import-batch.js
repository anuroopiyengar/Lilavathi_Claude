#!/usr/bin/env node
/**
 * Import batch JSON files into Sanity
 *
 * Usage:
 *   node scripts/import-batch.js
 *
 * Prerequisites:
 *   - npm install @sanity/client
 *   - Set SANITY_PROJECT_ID and SANITY_DATASET env vars (or edit below)
 *   - Set SANITY_TOKEN env var with write access
 */

const fs = require('fs')
const path = require('path')

// Configuration - update these or use environment variables
const PROJECT_ID = process.env.SANITY_PROJECT_ID || 'YOUR_PROJECT_ID'
const DATASET = process.env.SANITY_DATASET || 'production'
const TOKEN = process.env.SANITY_TOKEN || ''

const BATCH_DIR = path.join(__dirname, '../../skills/content-to-sanity-import')
const BATCH_FILES = [
  'lilavati_mapping_batch_001.json',
  'lilavati_mapping_batch_002.json',
  'lilavati_mapping_batch_003.json',
  'lilavati_mapping_batch_004.json',
  'lilavati_mapping_batch_005.json',
  'lilavati_mapping_batch_006.json',
  'lilavati_mapping_batch_007.json',
  'lilavati_mapping_batch_008.json',
]

async function main() {
  // Dynamic import for ES module
  const {createClient} = await import('@sanity/client')

  const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    token: TOKEN,
    apiVersion: '2024-01-01',
    useCdn: false,
  })

  console.log(`Importing to project: ${PROJECT_ID}, dataset: ${DATASET}`)

  let totalItems = 0
  let imported = 0
  let errors = []

  for (const batchFile of BATCH_FILES) {
    const filePath = path.join(BATCH_DIR, batchFile)

    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      continue
    }

    console.log(`\nProcessing ${batchFile}...`)
    const batchData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    for (const item of batchData.items) {
      totalItems++

      // Transform batch JSON item to Sanity document
      const doc = {
        _type: 'problem',
        _id: `problem-${item.excerpt_id.replace(/[^a-zA-Z0-9]/g, '-')}`,
        excerpt_id: item.excerpt_id,
        source: item.source,
        excerpt_text_short: item.excerpt_text_short,
        skills_modern_terms: item.skills_modern_terms,
        ccssm_mappings: item.ccssm_mappings,
        mapping_confidence_summary: item.mapping_confidence_summary,
        translation_ambiguity_notes: item.translation_ambiguity_notes || [],
        extraction_quality: item.extraction_quality,
        reviewed: false,
      }

      try {
        await client.createOrReplace(doc)
        imported++
        process.stdout.write(`  Imported: ${item.excerpt_id}\r`)
      } catch (err) {
        errors.push({ excerpt_id: item.excerpt_id, error: err.message })
        console.error(`  Error importing ${item.excerpt_id}: ${err.message}`)
      }
    }
  }

  console.log(`\n\n=== Import Summary ===`)
  console.log(`Total items: ${totalItems}`)
  console.log(`Imported: ${imported}`)
  console.log(`Errors: ${errors.length}`)

  if (errors.length > 0) {
    console.log('\nErrors:')
    errors.forEach(e => console.log(`  - ${e.excerpt_id}: ${e.error}`))
  }
}

main().catch(console.error)
