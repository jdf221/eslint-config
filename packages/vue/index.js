module.exports = {
  env: {
    browser: true,
  },
  plugins: ["vue"],
  extends: [
    "@jdf221/eslint-config-basic",
    "prettier/vue",
    "plugin:prettier-vue/recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
  ],
  rules: {},
};
