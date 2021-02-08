module.exports = {
  env: {
    browser: true,
  },
  plugins: ["vue"],
  extends: [
    "@jdf221/eslint-config-basic",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "plugin:prettier-vue/recommended",
    "prettier/vue",
  ],
  rules: {},
};
