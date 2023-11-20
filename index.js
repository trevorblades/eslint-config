// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
  extends: "eslint:recommended",
  rules: {
    eqeqeq: "error",
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "default-case": "error",
    "no-return-await": "error",
    quotes: ["error", "single", { avoidEscape: true }],
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ],
  },
};

module.exports = config;
