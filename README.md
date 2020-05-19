# Shoutem JavaScript Style Guide

This repository provides two eslint packages:

1. eslint-config-web used for web applications
2. eslint-config-server used for server applications

## Automatically Fix Code in VS Code

For a good developer experience, it's useful to setup your editor to automatically run ESLint's automatic fix command (i.e. eslint --fix) whenever a file is saved. If you are using VS code, download ESLint extension for VS code and add this config in the settings.json file in VS Code to get automatic fixing whenever saving a file:

```sh
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```
