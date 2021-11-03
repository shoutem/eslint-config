# Shoutem JavaScript Style Guide

This repository provides three eslint packages:

1. [eslint-config-base](https://github.com/shoutem/eslint-config/tree/develop/packages/eslint-config-base)
2. [eslint-config-react](https://github.com/shoutem/eslint-config/tree/develop/packages/eslint-config-react)
3. [eslint-config-react-native](https://github.com/shoutem/eslint-config/tree/develop/packages/eslint-config-react-native)

## Automatically Fix Code in VS Code

For a good developer experience, it's useful to setup your editor to automatically run ESLint's automatic fix command (i.e. eslint --fix) whenever a file is saved. If you are using VS code, download ESLint extension for VS code and add this config in the settings.json file in VS Code to get automatic fixing whenever saving a file:

```sh
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

File is located in:

```sh
.vscode/settings.json
```
