# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Tests (test/utils/is.test.js) for all function in src/utils/is.js
- Tests (test/core/createElement/createElement.test.js) for createElement in src/core/createElement/createElement.js

## [2.0.0-alpha.7] - 2018-09-16
### Changed
- better typechecking (#17)

### Added
- additional checks for: window, Date, Error, Function,  Number, RegExp, Undefined (#17)

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
