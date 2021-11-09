module.exports = {
  rules: {
    "jsx-a11y/img-has-alt": 0,
    "no-use-before-define": 0,
    "react/no-did-update-set-state": "off",
    "react/require-default-props": 2,
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          [
            // Packages. `react` related packages come first.
            "^react",
            // Internal packages.
            "^(@|@shoutem)(\/.*|$)",
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
