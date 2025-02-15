# eslint-html-report

[![npm version](https://img.shields.io/npm/v/eslint-html-report.svg)](https://www.npmjs.com/package/eslint-html-report)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-html-report.svg)](https://www.npmjs.com/package/eslint-html-report)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/justforuse/eslint-html-report/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/justforuse/eslint-html-report.svg?style=flat)](https://github.com/justforuse/eslint-html-report/issues)

> A Detailed HTML reporter for ESLINT based on the code written by Julian Laval for [eslint's default HTML reporter](http://eslint.org/docs/user-guide/formatters/#html) and inspired by Sven Piller's [eslint-formatter-markdown](https://github.com/sven-piller/eslint-formatter-markdown) and [mochajs](https://mochajs.org/)'s HTML coverage report.

> Forked from [eslint-detailed-reporter](https://github.com/mportuga/eslint-detailed-reporter)

## Features

- Total count of problems on linted files(counting both errors and warnings)
- Tables with top 5 warnings and errors in the linted files.
- List of top 5 files with the most problems.
- View of source code with issues for files with issues.
- Summary of issues per file
- Links to the rule descriptions for all default eslint rules, as well as angular and lodash rules.
- Ability to filter file list to just error or warning files.
- Keyboard accessible.
- Can return either multiple files or a single file as the result. (This feature is in BETA).
- [**New feature**] Summary of related files per rule

## Example

[Click here](http://htmlpreview.github.io/?https://github.com/justforuse/eslint-html-report/blob/master/example/example-report.html) to view an example report.

[Click here](http://htmlpreview.github.io/?https://github.com/justforuse/eslint-html-report/blob/master/example/success-report.html) to view an example success report.

## Installation

```sh
npm install eslint-html-report -D
```

## Usage

### With [ESLint CLI](http://eslint.org/docs/user-guide/command-line-interface):

```sh
# Single file
eslint file.js -f node_modules/eslint-html-report/lib/detailed.js -o report.html

# Recurse current directory
eslint . -f node_modules/eslint-html-report/lib/detailed.js -o report.html

# Recurse current directory with multiple files as the result
eslint . -f node_modules/eslint-html-report/lib/detailed-multi.js -o report.html
```

### With [Grunt ESLint](https://www.npmjs.com/package/grunt-eslint):

```js
module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				outputFile: 'example/example-report.html',
				format: require('eslint-html-report')
			},
			target: ['test/**/*.js']
		}
	});

	grunt.registerTask('default', ['eslint']);
};
```

* If you want to use the new multi file feature, you must use the full path to the detailed-multi file in the format section and
add --outputDirectory=<your directory here> to the command line.

### With [Gulp ESLint](https://github.com/adametry/gulp-eslint):

```js
var eslint   = require('gulp-eslint'),
    reporter = require('eslint-html-report'),
    path     = require('path'),
    fs       = require('fs');

gulp.src(['js/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format(reporter, function(results) {
      fs.writeFileSync(path.join(__dirname, 'report-results.html'), results);
    })
  );
```

## Dependencies

- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.

## Dev Dependencies

- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-angular](https://github.com/dustinspecker/eslint-config-angular): ESLint shareable config for Angular plugin.
- [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular): ESLint rules for your angular project with checks for best-practices, conventions or potential errors.
- [eslint-plugin-lodash](https://github.com/eslint-plugins/eslint-plugin-lodash): Lodash-specific linting rules for ESLint.
- [grunt](http://gruntjs.com/): The JavaScript Task Runner.
- [grunt-cli](https://github.com/gruntjs/grunt-cli): The Grunt command line interface.
- [grunt-eslint](https://github.com/sindresorhus/grunt-eslint): Validate files with ESLint.
- [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks): Load multiple grunt tasks using globbing patterns.

## Contributing

Feel free to contribute!

Fork this repo and run the following commands to get started:

```sh
npm install
npm install -g grunt-cli
npm test
```

After that, just open a [pull request](https://github.com/justforuse/eslint-html-report/pulls) and I will review it when I can!

For more detailed contributing instructions checkout out our [contributing documentation](./.github/CONTRIBUTING.md)!

## Release History

See [CHANGELOG](./CHANGELOG.md)

## License

[MIT](https://opensource.org/licenses/MIT) © Marcelo S. Portugal


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmportuga%2Feslint-html-report.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmportuga%2Feslint-html-report?ref=badge_large)