module.exports = {
  rules: {
    "max-len": [
      2,
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
      },
    ],
    "no-empty-label": 0,
    "arrow-body-style": 0,
    "space-before-keywords": 0,
    "space-after-keywords": 0,
    "space-return-throw-case": 0,
    "no-iterator": 0,
    "no-unused-expressions": 0,
    "no-param-reassign": [2, { props: false }],
    "no-unused-vars": [2, { argsIgnorePattern: "next" }],
    "no-shadow": 0,
    "no-plusplus": "off",
    "no-implicit-coercion": [
      1,
      {
        allow: ["!!"],
      },
    ],
    "import/no-absolute-path": 0,
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "func-names": 0,
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    radix: 0,
    "linebreak-style": 0,
  },
};
