module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true // Updated to es2020 as per your new configuration
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:promise/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {} // This will make ESLint use tsconfig.json for path resolution
    }
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "*.config.*js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "es2020",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: ["./tsconfig.json", "./tsconfig.node.json"]
  },
  plugins: ["simple-import-sort", "prettier", "react-refresh", "react", "@typescript-eslint", "promise", "import"],

  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true
      }
    ],
    "@typescript-eslint/comma-dangle": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "comma-dangle": "off",
    curly: ["error", "multi-line", "consistent"],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-alert": "error",
    "no-console": "error",
    "no-unused-vars": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "import/no-unresolved": ["error", { ignore: ["/assets/.*"] }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prefer-const": "error",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
        variables: true,
        enums: false,
        ignoreTypeReferences: true
      }
    ],
    "no-useless-constructor": "error",
    "no-eval": "error",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "promise/prefer-await-to-then": "error",
    "no-return-await": "error",
    "no-shadow": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      // Allow camelCase for general variables, functions, and type-like entities
      {
        selector: "variable",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow"
      },
      { selector: "function", format: ["camelCase", "PascalCase"] },
      { selector: "typeLike", format: ["PascalCase"] },
      // Specifically for constants that can be functions (including components) or objects, allow both camelCase and PascalCase
      { selector: "variable", modifiers: ["const"], format: ["camelCase", "PascalCase"] },
      // Enforce camelCase for other identifiers not covered above, with an exception for properties which may be in PascalCase (useful for certain APIs or when working with JSON objects that require it)
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
        modifiers: ["private"]
      },
      { selector: "property", format: ["camelCase", "PascalCase", "UPPER_CASE"] },
      {
        selector: "objectLiteralProperty",
        format: null, // Disable format checking
        // Allow specific patterns such as 'Content-Type'
        custom: {
          regex: "^[a-zA-Z0-9-]+$",
          match: true
        }
      }
    ]
  },
  overrides: [
    {
      files: ["e2e/**/*.ts", "e2e/**/*.tsx"], // Target files within the e2e directory
      rules: {
        "@typescript-eslint/no-misused-promises": "off", // Disable this rule for specified files
        "@typescript-eslint/require-await": "off" // Disable this rule for specified files
      }
    },
    {
      files: ["*.test.ts", "*.test.tsx", "**/__tests__/*"],
      rules: {
        "@typescript-eslint/no-unsafe-call": "off"
      }
    }
  ]
};
