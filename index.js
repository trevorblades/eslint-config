module.exports = {
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        bracketSpacing: false
      }
    ]
  }
};
