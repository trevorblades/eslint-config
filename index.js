module.exports = {
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        bracketSpacing: false
      }
    ]
  }
};
