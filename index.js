module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'import/no-unresolved': ['error', {commonjs: true}],
    'no-console': 'warn',
    'prefer-const': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: false
      }
    ]
  }
};
