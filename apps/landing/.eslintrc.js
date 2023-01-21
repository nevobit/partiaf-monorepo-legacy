module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "standard-with-typescript",
    "prettier",
    "next",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};
