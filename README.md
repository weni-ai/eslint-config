# Weni ESLint Config

ESLint config with Prettier rules used in Weni's projects.

## Setup

First of all, install the ESLint and Prettier plugin:

```bash
yarn add --dev eslint@9.33.0 @vue/eslint-config-prettier@10.2.0
```

### Vue 3

Install the Vue plugin for ESLint, Vue ESLint parser and Weni ESLint config:

```bash
yarn add --dev eslint-plugin-vue@10.4.0 @weni/eslint-config@2.0.0
```

Extend your local `.eslint.config.js` with Weni ESLint configuration by adding `'@weni/eslint-config/vue3'` as a `config` attribute:

```js
import weniConfig from '@weni/eslint-config/vue3';

export default defineConfig({
  ...,
  weniConfig,
});
```
