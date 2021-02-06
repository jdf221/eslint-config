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
