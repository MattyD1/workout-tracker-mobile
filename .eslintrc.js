module.exports = {
  // Configuration for JavaScript files
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['unicorn'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        semi: false,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['/android', '/ios'],
      },
    ],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      plugins: ['@typescript-eslint', 'unused-imports'],
      extends: ['@react-native-community', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'lf',
            semi: false,
            tabWidth: 2,
            singleQuote: true,
            trailingComma: 'es5',
          },
        ],
        'max-params': ['error', 3], // Limit the number of parameters in a function to use object instead
        'max-lines-per-function': ['error', 70],
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically// Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
}
