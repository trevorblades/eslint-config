module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  rules: {
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-boolean-value': 'error'
  }
};
