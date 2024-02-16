# Weni ESLint Config

ESLint config with Prettier rules used in Weni's projects.

## Setup

First of all, install the ESLint and Prettier plugin:

```bash
yarn add --dev eslint@8.56.0 eslint-config-prettier@9.1.0 eslint-plugin-prettier@4.2.1
```

### Vue 2

Install the Vue plugin for ESLint, Vue ESLint parser and Weni ESLint config:

```bash
yarn add --dev eslint-plugin-vue@9.21.1 vue-eslint-parser@9.4.2 @weni/eslint-config@1.0.0
```

Extend your local `.eslintrc.js` with Weni ESLint configuration by adding `'@weni/eslint-config/vue2'` to `extends` attribute:

```js
module.exports  = {
  extends: ['@weni/eslint-config/vue2'],
};
```
