module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react', 'jsx-a11y', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  ignorePatterns: ['build/', 'node_modules/'],
  settings: {
    react: {
      version: 'detect', // React version. 'detect' automatically picks the version you have installed.
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
      },
    ],
    // Backward compatibility with legacy tslint-microsoft-contrib rules
    'import/newline-after-import': 'warn',
    'import/no-default-export': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-unassigned-import': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    complexity: 'warn',
    curly: 'warn',
    'default-case': 'warn',
    'dot-notation': 'warn',
    eqeqeq: ['warn', 'smart'],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'max-classes-per-file': ['warn', 3],
    'max-lines': ['warn', 1000],
    'no-bitwise': 'warn',
    'no-caller': 'warn',
    'no-eval': 'warn',
    'no-invalid-this': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': 'warn',
    'no-restricted-syntax': ['warn', 'ForInStatement'],
    'no-return-await': 'warn',
    'no-sequences': 'warn',
    'no-shadow': [
      'warn',
      {
        builtinGlobals: true,
        hoist: 'all',
      },
    ],
    'no-template-curly-in-string': 'warn',
    'no-undef-init': 'warn',
    'no-unused-expressions': 'warn',
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'FIX', 'BUG', 'HACK', 'LATER'],
        location: 'anywhere',
      },
    ],
    'one-var': ['warn', 'never'],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
    ],
    'prefer-object-spread': 'warn',
    'prefer-template': 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'spaced-comment': 'warn',
    yoda: 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-extraneous-class': 'warn',
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-parameter-properties': 'warn',
    '@typescript-eslint/no-throw-literal': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/typedef': ['warn', { arrowParameter: false }],
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/prop-types': 'off',
    '': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-extra-parens': 'off',
    'react/jsx-wrap-multilines': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
