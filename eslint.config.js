import globals from "globals";
import pluginVue from "eslint-plugin-vue";


export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'import/no-absolute-path': 'off',
      'vue/multi-word-component-names': 0,
      'vue/html-closing-bracket-newline': 'off',
    },
  },
  ...pluginVue.configs["flat/essential"],
];
