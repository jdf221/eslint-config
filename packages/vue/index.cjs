module.exports = {
  env: {
    browser: true,
  },
  plugins: ["vue"],
  extends: [
    "@jdf221/eslint-config-basic",
    "plugin:vue/vue3-recommended",
    "plugin:prettier-vue/recommended",
  ],
  rules: {},
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
