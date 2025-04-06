import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use Next.js recommended configuration
  ...compat.extends("next/core-web-vitals"),

  // Add TypeScript ESLint plugin and rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": compat.plugin("@typescript-eslint"),
    },
    rules: {
      // Disable the "no-empty-object-type" rule
      "@typescript-eslint/no-empty-object-type": "off",

      // Add other TypeScript-specific rules here
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Add global ignores
  {
    ignores: ["node_modules/", "dist/", "build/", ".next/"],
  },
];

export default eslintConfig;
