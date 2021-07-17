module.exports = {
  "env": {
    "browser": true,
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "no-console": ["warn"],
    "no-debugger": ["warn"],
    "react/react-in-jsx-scope": "off",
    "eqeqeq": ["warn"],
    "no-undefined": ["warn"],
    "jsx-quotes": ["error", "prefer-double"],
    "semi": ["error", "always", {}],
    "indent": ["warn", 2]
  }
}
