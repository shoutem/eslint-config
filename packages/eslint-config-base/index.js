module.exports = {
  extends: [
    "airbnb-base",
    // custom rules
    require.resolve("./rules/custom"),
    require.resolve("./rules/prettier"),
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {},
};
