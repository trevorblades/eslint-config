module.exports = {
  extends: [
    './index.js',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      {allowTypedFunctionExpressions: false}
    ]
  }
};
