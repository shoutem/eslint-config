module.exports = {
  rules: {
    // arrow-body-style and prefer-arrow-callback must stay off when using
    // eslint-plugin-prettier (auto-fix conflicts); eslint-config-prettier >=7
    // no longer disables them itself.
    "arrow-body-style": 0,
    "prefer-arrow-callback": 0,
    "no-iterator": 0,
    "no-unused-expressions": 0,
    "no-param-reassign": [2, { props: false }],
    "no-unused-vars": [2, { argsIgnorePattern: "next" }],
    "no-restricted-syntax": 0,
    "no-continue": 0,
    "no-await-in-loop": 0,
    "no-restricted-globals": 0,
    "no-buffer-constructor": 0,
    "max-classes-per-file": 0,
    "prefer-destructuring": 0,
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
    radix: 0,
    "linebreak-style": 0,
  },
};
