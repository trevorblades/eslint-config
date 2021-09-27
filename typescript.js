module.exports = {
  extends: [
    './index.js',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks'],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      {allowTypedFunctionExpressions: false}
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
