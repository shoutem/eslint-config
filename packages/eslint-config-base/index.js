module.exports = {
  extends: [
    "airbnb-base",
    "prettier",
    // custom rules
    require.resolve("./rules/prettier"),
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {},
};
