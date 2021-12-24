const util = require("@jdf221/eslint-config-basic/util.cjs");

module.exports = {
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "@jdf221/eslint-config-basic",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    indent: "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["private-constructors"] },
    ],
  },
  overrides: [
    util.configFileOverride(
      {
        rules: {
          "@typescript-eslint/no-var-requires": "off",
        },
      },
      ["js"]
    ),
  ],
};
