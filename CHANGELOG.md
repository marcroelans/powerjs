# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0-alpha.13] - 2018-09-26
### Bugfix
- createElement could not except an array as arg of `...args`

## [2.0.0-alpha.12] - 2018-09-24
### Added
- add prettier + eslint + lintstaged; apply formatting rules (#28)
- add code coverage (#29)
- add hook onComponentCreate

### Changed
- clean up tests

## [2.0.0-alpha.11] - 2018-09-22
### Bugfix
- Added webpack production config `optimization: {minimize: false},` because `this.construcor.name` was always n

## [2.0.0-alpha.10] - 2018-09-22
### Added
- First version of docs under /docs
- package.json script "docs"
- env preset for docs
- unitize commentary
- adding `@public` and `@private` to the comments
- Updates .is tests (#27)
- Supports inline objects as param values (#27)

### Changed
- Removes the need for |number and uses a new util method .isNumeric to handle type casting properly of numerical param values (#27)

### Bugfix
- Fix JsDocs Bugs in comments

## [2.0.0-alpha.9] - 2018-09-17
### Added
- more infos to the package.json

### Changed
- update a few devDependencies
- change script `prepublish` to `prepare`

## [2.0.0-alpha.8] - 2018-09-16
### Changed
- wrap console log for future control of log output (#18)

## [2.0.0-alpha.7] - 2018-09-16
### Changed
- better typechecking (#17)

### Added
- additional checks for: window, Date, Error, Function,  Number, RegExp, Undefined (#17)
- Tests (test/utils/is.test.js) for all function in src/utils/is.js
- Tests (test/core/createElement/createElement.test.js) for createElement in src/core/createElement/createElement.js

## [2.0.0-alpha.6] - 2018-09-13
### Added
- Tests for is.js

### Bugfix
- isObject returned true when passing an array

### Changed
- do not ignore package-lock.json anymore in .gitignore

## [2.0.0-alpha.5] - 2018-09-12
### Added
- Jest as a testing framework (testing files are located in the /test dir)

### Changed
- .babelrc splited in 3 environments now (test / development / production)

### Removed
- Karma as a testing tool

## [2.0.0-alpha.4] - 2018-09-11
### Fixed
- Component which gets rendered by the registerComponent Method can use the afterComponentMount Method now

## [2.0.0-alpha.3] - 2018-09-11
### Added
- A simple demo page

### Fixed
- Components data excepts more then one property now
