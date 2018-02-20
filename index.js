module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prefer-object-spread', 'prettier'],
  rules: {
    'func-names': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['sibling', 'parent', 'index']
        ],
        'newlines-between': 'always'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: false
      }
    ]
  }
};
