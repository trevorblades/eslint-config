module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'sort-imports': [
      'error',
      {
        memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple']
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
