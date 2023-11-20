// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
  env: {
    node: true,
    es6: true,
  },
  extends: ["./index.js", "plugin:prettier/recommended"],
};

module.exports = config;
