# @trevorblades/eslint-config

[![Build Status](https://travis-ci.com/trevorblades/eslint-config.svg?branch=master)](https://travis-ci.com/trevorblades/eslint-config)

A shared ESLint config with [Prettier](https://github.com/prettier/prettier) and support for [React](https://reactjs.org/) projects

## Installation

```shell
npm install --save-dev eslint @trevorblades/eslint-config
```

## Usage

Create an `.eslintrc` file that extends this config. For more configuration options, check out the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": "@trevorblades"
}
```

For React projects, you'll need to install the [`babel-eslint`](https://github.com/babel/babel-eslint) package and specify it in your config.

```shell
npm install --save-dev babel-eslint
```

```json
{
  "extends": "@trevorblades/eslint-config/react",
  "parser": "babel-eslint"
}
```
