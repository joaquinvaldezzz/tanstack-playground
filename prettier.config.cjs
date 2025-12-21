/**
 * @type {import("prettier").Config &
 *   import("@ianvs/prettier-plugin-sort-imports").PluginConfig &
 *   import("prettier-plugin-jsdoc").Options &
 *   import("prettier-plugin-tailwindcss").PluginOptions}
 */
module.exports = {
  printWidth: 100,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-jsdoc",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "^(react/(.*)$)|^(react$)",
    "^(react-dom/(.*)$)|^(react-dom$)",
    "^(@tanstack/(.*)$)|^(@tanstack$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "",
    "<TYPES>",
    "<TYPES>^[./]",
    "^[./]",
  ],
  tailwindStylesheet: "./src/styles.css",
};
