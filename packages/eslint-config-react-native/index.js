module.exports = {
  // @shoutem/react is self-contained (airbnb, react, react-hooks, base,
  // prettier) — only the React Native additions live here.
  extends: [
    "@shoutem/react",
    // custom rules
    require.resolve("./rules/custom"),
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react-native"],
  rules: {},
};
