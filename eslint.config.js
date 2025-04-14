/* eslint-disable import-x/no-named-as-default-member */
/* eslint-disable import-x/no-named-as-default */
/* eslint-disable import-x/namespace */
/* eslint-disable import-x/no-unresolved */
/* eslint-disable import-x/default */
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import checkFile from 'eslint-plugin-check-file';
import eslintPluginImportX from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginSecurity from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortClassMembers from 'eslint-plugin-sort-class-members';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	eslintPluginImportX.flatConfigs.recommended,
	pluginSecurity.configs.recommended,
	eslintPluginPrettierRecommended,
	...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
	...eslintPluginJsonc.configs['flat/prettier'],
	{
		ignores: [
			'**/node_modules/**',
			'**/dist/**',
			'**/build/**',
			'**/coverage/**',
			'**/test-results/**',
		],
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: {
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports,
			'check-file': checkFile,
			'@stylistic': stylistic,
			unicorn: eslintPluginUnicorn,
		},
		rules: {
			'prettier/prettier': 'error',

			// Error prevention
			'array-callback-return': ['error', { checkForEach: true }],
			'no-await-in-loop': 'error',
			'no-constant-binary-expression': 'error',
			'no-constructor-return': 'error',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unreachable-loop': 'error',
			'no-unused-private-class-members': 'error',
			'no-use-before-define': [
				'error',
				{
					functions: false,
					classes: true,
					variables: true,
					allowNamedExports: false,
				},
			],
			'require-atomic-updates': 'error',
			'no-lone-blocks': 'error',
			'no-underscore-dangle': 'error',

			// Good Practices
			camelcase: 'error',
			eqeqeq: 'error',
			'new-cap': 'error',
			'no-array-constructor': 'error',
			'no-console': [
				'error',
				{
					allow: ['error', 'info'],
				},
			],
			'no-else-return': [
				'error',
				{
					allowElseIf: false,
				},
			],
			'no-extend-native': 'error',
			'no-lonely-if': 'error',
			'no-param-reassign': 'error',
			'no-return-assign': 'error',
			'no-throw-literal': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-const': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			radix: 'error',
			yoda: 'error',
			'require-await': 'error',

			// Style
			curly: 'error',
			'no-unneeded-ternary': 'error',
			'prefer-arrow-callback': 'error',
			'no-nested-ternary': 'error',
			'max-depth': ['error', 5],
			'no-implicit-coercion': 'error',
			'arrow-body-style': ['error', 'as-needed'],
			'@stylistic/lines-between-class-members': [
				'error',
				{
					enforce: [
						{ blankLine: 'always', prev: 'field', next: '*' },
						{ blankLine: 'always', prev: '*', next: 'field' },
						{ blankLine: 'never', prev: 'field', next: 'field' },
						{ blankLine: 'always', prev: '*', next: 'method' },
						{ blankLine: 'always', prev: 'method', next: '*' },
					],
				},
				{ exceptAfterSingleLine: true },
			],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: [
						'directive',
						'import',
						'cjs-import',
						'export',
						'cjs-export',
						'const',
						'let',
						'var',
						'class',
						'block',
						'block-like',
						'multiline-block-like',
						'function',
						'iife',
						'expression',
						'case',
						'default',
					],
					next: '*',
				},
				{
					blankLine: 'always',
					prev: '*',
					next: [
						'import',
						'cjs-import',
						'export',
						'cjs-export',
						'const',
						'let',
						'var',
						'class',
						'block',
						'block-like',
						'multiline-block-like',
						'function',
						'iife',
						'expression',
						'return',
					],
				},
				{
					blankLine: 'any',
					prev: ['const', 'let', 'var'],
					next: ['const', 'let', 'var'],
				},
				{
					blankLine: 'any',
					prev: 'directive',
					next: 'directive',
				},
				{
					blankLine: 'any',
					prev: 'import',
					next: 'import',
				},
				{
					blankLine: 'any',
					prev: 'cjs-import',
					next: 'cjs-import',
				},
				{
					blankLine: 'any',
					prev: 'export',
					next: 'export',
				},
				{
					blankLine: 'any',
					prev: 'cjs-export',
					next: 'cjs-export',
				},
				{
					blankLine: 'any',
					prev: 'expression',
					next: 'expression',
				},
				{
					blankLine: 'never',
					prev: [
						'singleline-const',
						'singleline-let',
						'singleline-var',
					],
					next: [
						'singleline-const',
						'singleline-let',
						'singleline-var',
					],
				},
			],

			// Unicorn
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
					ignore: [/\.json$/],
				},
			],
			'unicorn/prevent-abbreviations': [
				'error',
				{
					checkFilenames: false,
				},
			],

			// File structure
			'check-file/folder-naming-convention': [
				'error',
				{
					'./src/*/': 'KEBAB_CASE',
					'./src/components/*/': 'PASCAL_CASE',
					'./test/**/': 'KEBAB_CASE',
					'./tests/**/': 'KEBAB_CASE',
				},
			],

			// Imports
			'import-x/first': 'error',
			'import-x/newline-after-import': 'error',
			'import-x/no-duplicates': 'error',
			'import-x/no-unresolved': 'error',
			'import-x/no-webpack-loader-syntax': 'error',
			'simple-import-sort/exports': 'error',
			'simple-import-sort/imports': 'error',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		...jsdoc.configs['flat/recommended'],
		...sortClassMembers.configs['flat/recommended'],
		files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
		rules: {
			'sort-class-members/sort-class-members': [
				'error',
				{
					order: [
						'[properties]',
						'[conventional-private-properties]',
						'[static-properties]',
						'constructor',
						'[methods]',
						'[conventional-private-methods]',
						'[static-methods]',
					],
					accessorPairPositioning: 'getThenSet',
				},
			],
		},
	},
]);
