# eslint-html-report

[![npm version](https://img.shields.io/npm/v/eslint-html-report.svg)](https://www.npmjs.com/package/eslint-html-report)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-html-report.svg)](https://www.npmjs.com/package/eslint-html-report)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/justforuse/eslint-html-report/blob/master/LICENSE)

> 🎨 A beautiful HTML reporter for ESLint with modern UI

> Forked from [eslint-detailed-reporter](https://github.com/mportuga/eslint-detailed-reporter)

## ✨ Features

- 📊 **Summary Dashboard** - Top errors, warnings, and problematic files at a glance
- 💻 **Source Code View** - See issues highlighted directly in your code
- 📁 **Flexible Grouping** - View issues by file or by rule
- 🔍 **Filter & Search** - Quickly find what you're looking for
- 🌿 **Git Integration** - Shows branch, commit, and timestamp
- 🎯 **Modern UI** - Clean design with ESLint branding

## 📸 Example

👉 [View example report](http://htmlpreview.github.io/?https://github.com/justforuse/eslint-html-report/blob/master/example/example-report.html)

👉 [View success report](http://htmlpreview.github.io/?https://github.com/justforuse/eslint-html-report/blob/master/example/success-report.html)

## 🚀 Quick Start

```sh
npx eslint-html-report
```

That's it! This will run ESLint and generate `eslint-report.html` in your project.

## 📦 Installation

```sh
npm install eslint-html-report -D
```

## 📖 Usage

### CLI (Recommended)

```sh
# Auto-run ESLint and generate report
npx eslint-html-report

# Specify output file
npx eslint-html-report my-report.html

# Use existing ESLint JSON output
npx eslint-html-report eslint.json report.html
```

### With ESLint CLI

```sh
eslint . -f node_modules/eslint-html-report/lib/detailed.js -o report.html
```

### With Grunt

```js
module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    eslint: {
      options: {
        outputFile: 'report.html',
        format: require('eslint-html-report')
      },
      target: ['src/**/*.js']
    }
  });

  grunt.registerTask('default', ['eslint']);
};
```

### With Gulp

```js
const eslint   = require('gulp-eslint');
const reporter = require('eslint-html-report');
const path     = require('path');
const fs       = require('fs');

gulp.src(['js/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format(reporter, function(results) {
    fs.writeFileSync(path.join(__dirname, 'report.html'), results);
  }));
```

## 🤝 Contributing

Contributions are welcome! Feel free to open a [pull request](https://github.com/justforuse/eslint-html-report/pulls).

```sh
npm install
npm test
```

## 📝 Changelog

See [CHANGELOG](./CHANGELOG.md)

## 📄 License

[MIT](https://opensource.org/licenses/MIT)
