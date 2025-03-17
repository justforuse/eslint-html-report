#!/usr/bin/env node

import { Command } from 'commander';
import { generateReport } from '../lib/detailed.js';
import fs from 'fs/promises';
import { stdin } from 'process';
// import readline from 'readline'

// let rl = readline.createInterface({
//     input: stdin,
//     terminal: true
// });

// let res = ''
// function readLine (line) {
//     //process your line, which could be very very long
//     console.log('get line')
//     res += line
// }

// rl.on('line', readLine);

// rl.on("close", () => {
//   console.log(res)
// })

// console.log('in process...')

const program = new Command();

async function getStdinData() {
  const chunks = [];
  for await (const chunk of stdin) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

program
  .name('oxlint-html')
  .description('Generate HTML report from oxlint JSON output')
  .version('1.0.0')
  .argument('[input]', 'Input json file', 'eslint-temp.json')
  .argument('[output]', 'Output HTML file', 'eslint-report.html')
  .action(async (input, output) => {
    try {
      console.log(`Start generated successfully at ${output}`);
      // Create a temporary file for the JSON input
      let tmpFile = 'eslint-temp.json';
      let fileName = program.args[0]
      if (fileName) {
        tmpFile = fileName
      }

      console.log(tmpFile)

      // Read from stdin if no input file is provided
      // const jsonData = await getStdinData();
      // await fs.writeFile(tmpFile, jsonData);

      const result = await generateReport(tmpFile, output);
      // console.log(`✨ Report generated successfully at ${output}`);
      // console.log(`📊 Summary:`);
      // console.log(`   Total Issues: ${result.totalIssues}`);
      // console.log(`   Errors: ${result.errors}`);
      // console.log(`   Warnings: ${result.warnings}`);

      // // Clean up temporary file
      // await fs.unlink(tmpFile);
    } catch (error) {
      console.trace(error)
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  });

program.parse();
