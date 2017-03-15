module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "comma-dangle": 0,
    "indent": 0,
    "linebreak-style": ["error", "windows"],
    "quotes": 0,
    "semi": ["error", "always"],
    "no-unused-vars": ["warn"],
    "no-console": 0
  }
};