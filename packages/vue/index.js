module.exports = {
  env: {
    browser: true,
  },
  plugins: ["vue"],
  extends: [
    "@jdf221/eslint-config-basic",
    "plugin:vue/vue3-recommended",
    "plugin:prettier-vue/recommended",
    "prettier/vue",
  ],
  rules: {},
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
