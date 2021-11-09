module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@shoutem/react",
    // custom rules
    require.resolve("./rules/custom"),
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-native",
    "import",
    "simple-import-sort"
  ],
  rules: {},
};
