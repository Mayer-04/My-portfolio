/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  globals: {
    NodeJS: true,
    NodeListOf: true,
  },
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  extends: ["eslint-config-prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "eol-last": "off",
    "jsx-quotes": ["warn", "prefer-double"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "@stylistic/js/no-tabs": "off",
    "@stylistic/ts/indent": "off",
    "no-constant-binary-expression": "warn",
    "no-debugger": "warn",
    "no-extend-native": "off",
    "no-trailing-spaces": "warn",
    "space-before-function-paren": "off",
    "@stylistic/js/operator-linebreak": "off",
    "@stylistic/ts/brace-style": "off",
    "@stylistic/js/multiline-ternary": "off",
    "n/prefer-global/process": "off",
    "@stylistic/js/no-mixed-spaces-and-tabs": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "object-curly-newline": [
      "warn",
      {
        consistent: true,
        multiline: true,
      },
    ],
    "object-curly-spacing": ["warn", "always"],
    "array-element-newline": ["warn", "consistent"],
    "array-bracket-newline": ["warn", "consistent"],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      extends: ["plugin:astro/recommended"],
      rules: {
        "astro/no-conflict-set-directives": "warn",
        "astro/no-unused-define-vars-in-style": "warn",
        "astro/no-unused-css-selector": "off",
        "astro/prefer-class-list-directive": "warn",
        "astro/semi": ["warn", "always"],
        "@stylistic/ts/indent": "off",
      },
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
