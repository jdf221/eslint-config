const util = require("./util.cjs");

module.exports = {
  env: { es6: true },
  plugins: ["html", "simple-import-sort", "import"],
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:jsonc/base",
  ],
  rules: {
    "prettier/prettier": "error",

    // Style
    indent: ["error", 2],
    quotes: ["error", "double"],
    curly: ["error", "multi-line"],
    "spaced-comment": [1, "always"],
    "unicorn/filename-case": "off",
    "unicorn/prefer-ternary": "off",
    yoda: "error",

    "import/first": "error",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "import/extensions": [
      "error",
      {
        ignorePackages: true,
        pattern: { ts: "never", js: "never", vue: "always", json: "always" },
      },
    ],
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArrowFunction: true,
        allowAnonymousFunction: true,
      },
    ],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Node.js built ins
          [`^(${require("module").builtinModules.join("|")})(/|$)`],
          // Packages
          ["^\\w"],
          // Internal files
          ["^(~/)(/*)"],
          // Parent (..) imports
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Relative imports
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Side effect imports
          ["^\\u0000"],
          // Style imports
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["*/../../*", "../../*"],
            message: `\n\t\t-> No relative parent imports, use a path mapping or use ${util.ansiInverseText(
              "//eslint-disable-[next-]line no-restricted-imports"
            )}`,
          },
        ],
      },
    ],

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
        allowList: {
          props: true,
          env: true,
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
    util.configFileOverride({
      env: {
        node: true,
      },
      rules: {
        "unicorn/prefer-module": "off",
      },
    }),
    // Specific JSON key orders
    {
      files: ["tsconfig.json"],
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: ".*",
            order: [
              "strict",
              "incremental",
              "moduleResolution",
              "esModuleInterop",
              "skipLibCheck",
              "noUnusedLocals",
              "resolveJsonModule",
              "forceConsistentCasingInFileNames",
              "exactOptionalPropertyTypes",
              "noImplicitOverride",
              "rootDir",
            ],
          },
        ],
      },
    },
    {
      files: ["package.json"],
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: ".*",
            order: [
              "name",
              "description",
              "version",
              "private",
              "author",
              "license",
            ],
          },
        ],
      },
    },
  ],

  ignorePatterns: ["node_modules", "dist"],
};
