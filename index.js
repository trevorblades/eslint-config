module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: false
      }
    ],
    'import/no-unresolved': ['error', {commonjs: true}],
    'import/no-useless-path-segments': 'error',
    eqeqeq: 'error',
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'default-case': 'error',
    quotes: ['error', 'single', {avoidEscape: true}]
  }
};
