module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['sort-imports-es6-autofix'],
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
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']}
    ],
    eqeqeq: 'error',
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'default-case': 'error',
    quotes: ['error', 'single', {avoidEscape: true}]
  }
};
