const defaultRules = [
  'react-app',
  'eslint:recommended',
  'plugin:jsx-a11y/recommended',
  // any other plugins or custom configuration you'd like to extend from.
];

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: defaultRules,
  rules: {
    'array-callback-return': 'warn',
    'consistent-return': 'warn',
    'default-case': 'warn',
    "indent": ["warn", 2]
    // etc.
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        ...defaultRules,
        'plugin:@typescript-eslint/recommended',
        // any other TypeScript specific config (from a plugin, or custom)
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // etc.
      },
    },
  ],
  settings: {
    react: {
      // React version. "detect" automatically picks the version you have installed.
      version: 'detect',
    },
  },
};