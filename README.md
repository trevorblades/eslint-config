# @trevorblades/eslint-config

[![Build Status](https://github.com/trevorblades/eslint-config/workflows/Node%20CI/badge.svg)](https://github.com/trevorblades/eslint-config/actions)

A shared ESLint config with opinions about code style

## Installation

```bash
npm install --save-dev eslint @trevorblades/eslint-config
```

## Usage

Create an `.eslintrc` file that extends this config. For more configuration options, check out the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": "@trevorblades"
}
```

If you're using React, extend `@trevorblades/eslint-config/react`.

```json
{
  "extends": "@trevorblades/eslint-config/react"
}
```

If you're using TypeScript, extend `@trevorblades/eslint-config/typescript`.

```json
{
  "extends": "@trevorblades/eslint-config/typescript"
}
```
