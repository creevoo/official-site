import {
  combine,
  ignores,
  imports,
  javascript,
  react,
  typescript,
} from "@antfu/eslint-config"

export default combine(
  ignores(["build/**", ".react-router/**"]),
  javascript(),
  imports(),
  typescript({
    overrides: {
      "no-console": "off",
      "no-irregular-whitespace": "off",
    },
  }),
  react({
    overrides: {
      "react-dom/no-dangerously-set-innerhtml": "off",
      "react/no-array-index-key": "off",
      "react-refresh/only-export-components": "off",
      "react/no-unstable-context-value": "off",
    },
  }),
)
