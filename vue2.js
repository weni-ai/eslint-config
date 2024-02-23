module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
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
    'vue/attribute-hyphenation': [
      'error',
      'never',
      {
        ignore: [],
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
  },
};
