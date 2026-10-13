import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin, { createNodeResolver } from 'eslint-plugin-import-x';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react-x';
import globals from 'globals';

export default [
  {
    ignores: ['build/**', 'dist/**', 'node_modules/**', '**/.git/**'],
  },
  {
    files: ['src/**/*.{js,jsx}', '*.config.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      'react-x': react,
      'react-hooks': reactHooks,
      'import-x': importPlugin,
    },
    settings: {
      'react-x': { version: '18.2' },
      'import-x/resolver-next': [
        createNodeResolver({ extensions: ['.js', '.jsx', '.mjs', '.json'] }),
      ],
    },
    rules: {
      ...js.configs.recommended.rules,
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': ['error', 'always'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'import-x/no-duplicates': 'error',
      'import-x/no-unresolved': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'react-x/no-duplicate-key': 'error',
      'react-x/no-missing-key': 'error',
      'react-x/no-nested-component-definitions': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  prettier,
];
