module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  'parser': '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        printWidth: 80,
        trailingComma: 'all',
        endOfLine: 'lf',
        singleAttributePerLine: true,
      },
    ],
  },
};
