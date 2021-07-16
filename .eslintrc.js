module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: module,
    impliedStrict: true,
    ecmaFeatures: {
      jsx: true,
    }
  },
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': ['warn'],
  }
}
