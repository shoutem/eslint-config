module.exports = {
  rules: {
    "camelcase": ["error", { allow: ["^UNSAFE_"] }],
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "no-use-before-define": 0,
    "no-restricted-globals": 0,
    "prefer-const": ["warn", {
      "ignoreReadBeforeAssign": true
    }],
    "import/order": "off",
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "prefer-destructuring": 2,
    "react/no-did-update-set-state": "off",
    // React 19 removed propTypes/defaultProps runtime validation — propTypes
    // are inert, so none of the propTypes-related rules are enforced anymore.
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/sort-prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/default-props-match-prop-types": "off",
    "react/forbid-prop-types": 0,
    "react/static-property-placement": ["warn", "property assignment"],
    "react/sort-comp": 0,
    "react/no-multi-comp": [2, { "ignoreStateless": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".js"] }],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-no-bind": 0,
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          [
            // Packages. `react` related packages come first.
            "^react",
            // Packages
            "^(?!(shoutem).*)|(@?\\w)$",
            // Internal packages.
            "^(@+shoutem)(\/.*|$)",
            "^(shoutem)(\.*|$)",
            // Side effect imports.
            "^\\u0000",
            // Parent imports. Put `..` last.
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            // Other relative imports. Put same-folder imports and `.` last.
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
            // Style imports
            "^.+\\.s?css$"
          ]
        ]
      }
    ],
  },
};
