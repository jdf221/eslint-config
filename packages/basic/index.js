module.exports = {
  env: { es6: true },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2],
    quotes: ["error", "double"],
    "import/order": ["error"],
    "spaced-comment": [1, "always"],
    "unicorn/filename-case": "off",
  },
};
