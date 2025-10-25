/**
 * @type {import("prettier").Config &
 *   import("@ianvs/prettier-plugin-sort-imports").PluginConfig &
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
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "",
    "^[./]",
  ],
  tailwindStylesheet: "./src/styles.css",
};
