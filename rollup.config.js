import eslint from '@rollup/plugin-eslint';
import { writeFileSync } from 'fs';

export default {
  input: 'src/index.js', // Adjust the entry point as needed
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    eslint({
      include: ['fixture/**/*.js'],
      formatter: './lib/detailed.js',
      outputFile: {
        filePath: 'example/example-report.html',
        formatter: results => {
          writeFileSync('example/example-report.html', results);
        }
      }
    })
  ]
};
