#!/usr/bin/env node
/**
 * Validate batch JSON files before import
 *
 * Usage:
 *   node scripts/validate-batch.js
 */

const fs = require('fs')
const path = require('path')

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

function validateItem(item, batchId) {
  const errors = []

  // Required fields
  if (!item.excerpt_id) {
    errors.push('Missing excerpt_id')
  }

  // Confidence validation
  if (item.ccssm_mappings) {
    item.ccssm_mappings.forEach((m, i) => {
      if (m.confidence < 0 || m.confidence > 100) {
        errors.push(`ccssm_mappings[${i}].confidence out of range: ${m.confidence}`)
      }
    })
  } else {
    errors.push('Missing ccssm_mappings array')
  }

  // Word count check for excerpt_text_short
  if (item.excerpt_text_short) {
    const wordCount = item.excerpt_text_short.split(/\s+/).length
    if (wordCount > 30) { // Allow some buffer over 25
      errors.push(`excerpt_text_short too long: ${wordCount} words`)
    }
  }

  return errors
}

function main() {
  console.log('Validating batch JSON files...\n')

  const allExcerptIds = new Set()
  const duplicates = []
  let totalItems = 0
  let validItems = 0
  let itemsNeedingReview = 0
  const allErrors = []
  const confidenceDistribution = { high: 0, medium: 0, low: 0 }

  for (const batchFile of BATCH_FILES) {
    const filePath = path.join(BATCH_DIR, batchFile)

    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      continue
    }

    const batchData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    console.log(`${batchFile}: ${batchData.items.length} items`)

    for (const item of batchData.items) {
      totalItems++

      // Check for duplicates
      if (allExcerptIds.has(item.excerpt_id)) {
        duplicates.push(item.excerpt_id)
      }
      allExcerptIds.add(item.excerpt_id)

      // Validate item
      const errors = validateItem(item, batchData.batch_id)
      if (errors.length > 0) {
        allErrors.push({ batch: batchFile, excerpt_id: item.excerpt_id, errors })
      } else {
        validItems++
      }

      // Track confidence distribution
      const maxConf = item.mapping_confidence_summary?.max_confidence || 0
      if (maxConf >= 70) {
        confidenceDistribution.high++
      } else if (maxConf >= 50) {
        confidenceDistribution.medium++
        itemsNeedingReview++
      } else {
        confidenceDistribution.low++
        itemsNeedingReview++
      }
    }
  }

  console.log('\n=== Validation Summary ===')
  console.log(`Total items: ${totalItems}`)
  console.log(`Valid items: ${validItems}`)
  console.log(`Unique excerpt_ids: ${allExcerptIds.size}`)
  console.log(`Duplicates: ${duplicates.length}`)

  console.log('\n=== Confidence Distribution ===')
  console.log(`High (>=70): ${confidenceDistribution.high}`)
  console.log(`Medium (50-69): ${confidenceDistribution.medium}`)
  console.log(`Low (<50): ${confidenceDistribution.low}`)
  console.log(`Items needing review: ${itemsNeedingReview}`)

  if (duplicates.length > 0) {
    console.log('\nDuplicate excerpt_ids:')
    duplicates.forEach(d => console.log(`  - ${d}`))
  }

  if (allErrors.length > 0) {
    console.log('\nValidation errors:')
    allErrors.forEach(e => {
      console.log(`  ${e.batch} / ${e.excerpt_id}:`)
      e.errors.forEach(err => console.log(`    - ${err}`))
    })
  }

  // Exit with error code if validation failed
  if (allErrors.length > 0 || duplicates.length > 0) {
    process.exit(1)
  }

  console.log('\n✓ All validations passed!')
}

main()
