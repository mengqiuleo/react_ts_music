/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 03:11:57
 * @LastEditTime: 2022-12-28 12:08:29
 */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-requires-any': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
