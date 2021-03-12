module.exports = {
  env: {
      browser: true,
      es6: true,
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  settings: {
      react: {
          pragma: "React",
          version: "detect",
      },
  },
  globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
  },
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 2019,
      sourceType: "module",
  },
  plugins: ["react", "prettier", "unused-imports"],
  rules: {
      semi: ["error", "always"],
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": 2,
      "unused-imports/no-unused-vars": 1,
      "prettier/prettier": ["error", require("./prettier.config")],
  },
};