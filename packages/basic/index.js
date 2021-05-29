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

    // Style
    indent: ["error", 2],
    quotes: ["error", "double"],
    curly: ["error", "multi-line"],
    "spaced-comment": [1, "always"],
    "import/order": "error",
    "unicorn/filename-case": "off",
    "unicorn/prefer-ternary": "off",
    yoda: "error",

    // Implementations (affects the code beyond just changing spacing/order)
    "prefer-template": "error",
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
    "unicorn/prevent-abbreviations": [
      "error",
      {
        whitelist: {
          props: true,
        },
        replacements: {
          args: false,
          res: {
            result: false,
          },
          dir: {
            direction: false,
          },
          dev: false,
        },
      },
    ],
  },
  overrides: [
    // Config files are normally executed within a Node environment
    {
      files: [
        "./*.config.js",
        "**/.eslintrc.js",
        "**/postcss.config.js",
        "**/tailwind.config.js",
        "**/windi.config.js",
      ],
      env: {
        node: true,
      },
    },
  ],
  ignorePatterns: ["node_modules", "dist"],
};
