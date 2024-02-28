module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "*.config.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: ["./tsconfig.json", "./tsconfig.node.json"]
  },
  plugins: ["simple-import-sort", "prettier", "react-refresh"],
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
    "func-style": ["error", "declaration"],
    "no-alert": "error",
    "no-console": "error",
    "no-unused-vars": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // Overrides
    overrides: [
      {
        files: ["*.test.js", "*.test.ts", "*.test.tsx", "**/test/**/*.js", "**/__tests__/**/*.js"],
        rules: {
          "@typescript-eslint/no-unsafe-call": 0
        }
      }
    ]
  }
};
