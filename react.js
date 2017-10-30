module.exports = {
  extends: ['airbnb', './index.js', 'prettier/react'],
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  plugins: ['prefer-object-spread'],
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: ['render']
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'prefer-object-spread/prefer-object-spread': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-sort-props': ['error', {shorthandFirst: true}],
    'react/no-unescaped-entities': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error'
  }
};
