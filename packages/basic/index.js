module.exports = {
  env: { es6: true },
  plugins: ["html"],
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2],
    quotes: ["error", "double"],
    "import/order": "error",
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "spaced-comment": [1, "always"],
    "unicorn/filename-case": "off",
  },
  ignorePatterns: ["node_modules"],
};
