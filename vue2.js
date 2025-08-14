const { defineConfig } = require("eslint/config");
const globals = require("globals");
const pluginVue = require("eslint-plugin-vue");
const prettierPlugin = require("eslint-plugin-prettier");
const js = require("@eslint/js");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = defineConfig([
  js.configs.recommended,
  ...compat.extends(
    "plugin:vue/essential",
    "plugin:prettier/recommended"
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {},
    },

    plugins: {
      vue: pluginVue,
      prettier: prettierPlugin,
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          bracketSpacing: true,
          printWidth: 80,
          trailingComma: "all",
          endOfLine: "lf",
          singleAttributePerLine: true,
        },
      ],

      "vue/attribute-hyphenation": [
        "error",
        "never",
        {
          ignore: [],
        },
      ],

      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      sourceType: "script",
      parserOptions: {},
    },

    files: ["**/.eslintrc.{js,cjs}"],
  },
]);
