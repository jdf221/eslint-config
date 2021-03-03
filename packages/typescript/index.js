module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "@jdf221/eslint-config-basic",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    // These 2 rules slightly conflict with Prettier
    // Prettier still enforces 2 space indents, but it has a few cases where it will (rightfully) indent another 2
    indent: "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["private-constructors"] },
    ],
  },
};
