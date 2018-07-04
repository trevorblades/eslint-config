module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: false
      }
    ],
    'import/no-unresolved': ['error', {commonjs: true}],
    'no-console': 'warn',
    'prefer-const': 'error',
    'object-shorthand': 'error',
    quotes: ['error', 'single']
  }
};
