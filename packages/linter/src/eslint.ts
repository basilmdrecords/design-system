export default (pathToTsconfig: string) => ({
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:sonarjs/recommended',
    'prettier'
  ],
  rules: {
    'linebreak-style': 0,
    'no-console': 2,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-unused-vars': [
      'error', { argsIgnorePattern: '^_' }
    ],
    'no-restricted-imports': [
      2, { patterns: [{ group: ['*.css'] }] }
    ],
    'react/jsx-key': 2,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'sonarjs',
    'prettier'
  ],
  parserOptions: {
    project: pathToTsconfig,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true,
  },
  ignorePatterns: [
    '**/node_modules/*',
    '**/dist/**',
  ],
  globals: {
    spyOn: 'readonly',
  },
  overrides: [
    {
      files: [
        '*.js',
      ],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        'import/no-extraneous-dependencies': 0,
        'linebreak-style': 0,
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
});
