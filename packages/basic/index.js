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
    "prefer-template": "error",
    "import/order": "error",
    "import/no-unresolved": "off", // Really just causes issues, any half decent editor will show errors for this anyways
    "no-var": "error",
    eqeqeq: ["error", "smart"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "spaced-comment": [1, "always"],
    "unicorn/filename-case": "off",
    "unicorn/prefer-ternary": "off",
    yoda: "error",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          res: {
            result: false,
          },
        },
      },
    ],
  },
  overrides: [
    {
      files: [
        "./*.config.js",
        "**/.eslintrc.js",
        "**/postcss.config.js",
        "**/tailwind.config.js",
      ],
      env: {
        node: true,
      },
    },
  ],
  ignorePatterns: ["node_modules"],
};
