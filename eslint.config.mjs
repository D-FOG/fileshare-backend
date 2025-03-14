// DELETE HERE IF NOT NEEDED
// import globals from "globals";
// import pluginJs from "@eslint/js";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];

// import globals from "globals";
// import js from "@eslint/js";
// import jest from "eslint-plugin-jest";
//DELETE THE ABOVE IF NOT NEEDED

import globals from "globals";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import prettier from "eslint-config-prettier";

// /** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // General JavaScript Configuration
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node, // Ensures `process` is recognized
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: "error",
    },
  },

  // ESLint Recommended Rules (instead of "extends")
  js.configs.recommended,

  // Prettier Formatting Rules (instead of "extends")
  prettier,

  // Jest Testing Configuration
  {
    files: ["__tests__/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: globals.jest, // Ensures Jest globals are recognized
    },
    plugins: { jest },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];



