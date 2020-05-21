module.exports = {
  extends: [
    "airbnb",
    "@shoutem/base",
    // custom rules
    require.resolve("./rules/custom"),
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
