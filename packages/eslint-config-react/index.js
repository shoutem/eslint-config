module.exports = {
  extends: [
    "airbnb",
    "@shoutem/base",
    // custom rules
    // require.resolve("./rules/prettier"),
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
