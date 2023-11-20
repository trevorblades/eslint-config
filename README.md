# @trevorblades/eslint-config

[![Build Status](https://github.com/trevorblades/eslint-config/workflows/Node%20CI/badge.svg)](https://github.com/trevorblades/eslint-config/actions)

This is a shared ESLint config with a few rules that I like to use. It has no dependencies, but should be used alongside ESLint and probably some other plugins.

## Installation

```bash
yarn add -D eslint @trevorblades/eslint-config
```

## Usage

Create an `.eslintrc` file that extends this config. For more configuration options, check out the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": [
    "@trevorblades",
    // ...your other ESLint config extensions
  ]
}
```

## Real life examples

Here's an example config for a project that uses **React with TypeScript**. It also features Prettier code formatting and import sorting.

```bash
yarn add -D eslint @trevorblades/eslint-config eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier eslint-config-prettier prettier eslint-plugin-simple-import-sort @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

```js
// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "@trevorblades",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
  },
}
```
