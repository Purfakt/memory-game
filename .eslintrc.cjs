/* eslint-env node */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue', '@saji/brace-rules', 'unused-imports'],
    globals: {
        defineOptions: 'readonly',
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'comma-spacing': ['error', { before: false, after: true }],
        'space-in-parens': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'no-unused-vars': ['warn', { args: 'none' }],
        'no-duplicate-imports': 'error',
        'no-case-declarations': 'off',
        'unused-imports/no-unused-imports': 'error',
        'vue/no-v-text-v-html-on-component': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'warn',
        'vue/no-setup-props-destructure': 'warn',
        'brace-style': 0,
        '@saji/brace-rules/brace-on-same-line': [
            'error',
            'allman',
            {
                IfStatement: 'always',
                ForStatement: 'always',
                ForInStatement: 'always',
                ForOfStatement: 'always',
                TryStatement: 'always',
                SwitchStatement: 'always',
                ArrowFunctionExpression: 'always',
            },
        ],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        'vue/multiline-html-element-content-newline': [
            'error',
            {
                ignoreWhenEmpty: true,
                allowEmptyLines: true,
            },
        ],
    },
    overrides: [
    // Indent in .vue files is handled by vue/script-indent rule
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            // Configuration files and module run within nodes
            files: ['*.cjs', 'vite.config.js', 'vitest.config.js'],
            env: {
                node: true,
            },
        },
        {
            // Vitest files
            files: ['**/*.test.js'],
            env: {
                jest: true,
            },
            globals: { vi: true },
        },
        {
            // Declare availability of cypress global variables and methods
            files: ['cypress/**/*.js'],
            extends: ['plugin:cypress/recommended'],
        },
    ],
}
