Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .
in eslintrc add setting configuration and specified react version

```
module.exports = {
  // ...
  settings: {
    react: {
      version: 'latest',
    },
  },
};

```
