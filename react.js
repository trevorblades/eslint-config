module.exports = {
  extends: [
    'airbnb',
    './index.js',
    'prettier/react'
  ],
  env: {
    browser: true
  }
  parser: 'babel-eslint',
  plugins: [
    'prefer-object-spread'
  ],
  rules: {
    'jsx-a11y/no-static-element-interactions': 0,
    'prefer-object-spread/prefer-object-spread': 2,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-sort-props': 2,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'react/sort-prop-types': 2
  }
};
