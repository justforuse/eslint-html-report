#!/usr/bin/env node

import { Command } from 'commander'
import { generateReport } from '../lib/detailed.js'
import fs from 'fs/promises'
import fsSync from 'fs'
import { execSync } from 'child_process'
import process from 'process'

const program = new Command()

/**
 * Run eslint and get JSON output
 * @returns {Promise<string>} JSON string of eslint results
 */
async function runEslint() {
  try {
    console.log('Running eslint . --format=json...')
    const result = execSync('eslint . --format=json', {
      encoding: 'utf-8',
      maxBuffer: 50 * 1024 * 1024, // Increase buffer size to 50MB for large projects
    })
    return result
  } catch (error) {
    // ESLint returns non-zero exit code when there are linting errors
    // But it still outputs the JSON to stdout
    if (error.stdout) {
      return error.stdout
    }
    throw new Error(`Failed to run eslint: ${error.message}`)
  }
}

program
  .name('eslint-html-report')
  .description('Generate HTML report from ESLint JSON output')
  .version('1.0.0')
  .argument(
    '[input]',
    'Input JSON file (if not provided, will run eslint automatically)'
  )
  .argument('[output]', 'Output HTML file', 'eslint-report.html')
  .action(async (input, output) => {
    try {
      let tmpFile = null
      let shouldCleanup = false
      let outputFile = output

      // Smart detection: if only one argument is provided
      // Check the actual arguments passed (excluding program name and script name)
      const actualArgs = process.argv
        .slice(2)
        .filter((arg) => !arg.startsWith('-'))

      if (actualArgs.length === 1 && input) {
        // Only one argument provided
        // Check if it ends with .html (likely output file) or if the file doesn't exist (likely output file)
        if (input.endsWith('.html') || !fsSync.existsSync(input)) {
          // Treat as output file
          outputFile = input
          input = null
        }
      }

      // Check if input file is provided
      if (input) {
        // Use the provided input file
        tmpFile = input
        console.log(`Using input file: ${tmpFile}`)
      } else {
        // No input file provided, run eslint automatically
        console.log('No input file provided, running eslint automatically...')
        tmpFile = '.eslint-temp.json'
        shouldCleanup = true

        // Run eslint and get JSON output
        const eslintOutput = await runEslint()

        // Write the output to a temporary file
        await fs.writeFile(tmpFile, eslintOutput)
        console.log(`ESLint results saved to temporary file: ${tmpFile}`)
      }

      // Generate the HTML report
      console.log(`Generating HTML report at ${outputFile}...`)
      const result = await generateReport(tmpFile, outputFile)

      console.log(`✨ Report generated successfully at ${outputFile}`)
      console.log(`📊 Summary:`)
      console.log(`   Total Issues: ${result.totalIssues}`)
      console.log(`   Errors: ${result.errors}`)
      console.log(`   Warnings: ${result.warnings}`)

      // Clean up temporary file if it was created
      if (shouldCleanup) {
        await fs.unlink(tmpFile)
        console.log(`Temporary file ${tmpFile} cleaned up`)
      }
    } catch (error) {
      console.trace(error)
      console.error('❌ Error:', error.message)
      process.exit(1)
    }
  })

program.parse()
