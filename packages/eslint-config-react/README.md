# @shoutem/eslint-config

[![npm version](https://badge.fury.io/js/@shoutem/eslint-config-react.svg)](http://badge.fury.io/js/@shoutem/eslint-config-react)

This package provides Shoutem's react JS .eslintrc (with React plugins) as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react` and `prettier`.

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "@shoutem/eslint-config-react@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev @shoutem/eslint-config-react
```

If using **npm < 5**, you can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev @shoutem/eslint-config-react
```

2. Add `"extends": "@shoutem/react"` to your .eslintrc.
