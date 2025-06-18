import { FlatCompat } from "@eslint/eslintrc";
import checkFile from "eslint-plugin-check-file";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  ...compat.config({
    extends: [
      "next",
      "next/core-web-vitals", 
      "next/typescript", 
      "prettier"
    ],
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "semi": ["error"],
      "quotes": ["error", "double"]
    },
  }
  ),
  {
    plugins: {
      "check-file": checkFile,
    },
    files: ["src/**/*"],
    rules: {
        "check-file/filename-naming-convention": [
          "error",
          {
            "**/*.{ts,tsx}": "KEBAB_CASE",
          },
          {
            ignoreMiddleExtensions: true,
          },
        ],
        "check-file/folder-naming-convention": [
          "error",
          {
            "src/**": "KEBAB_CASE"
          },
        ],
    },
  },
];

export default eslintConfig;
