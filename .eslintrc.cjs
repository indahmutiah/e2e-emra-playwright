module.exports = {
  env: {
    browser: true,    // Browser globals (window, document)
    es2021: true,    // ES2021 features
    node: true,       // Node.js globals (process, console)
  },
  extends: [
    'eslint:recommended',                    // Recommended rules
    'plugin:@typescript-eslint/recommended',  // TypeScript rules
  ],
  parser: '@typescript-eslint/parser',        // Parser for TypeScript
  parserOptions: {
    ecmaVersion: 'latest',  // Latest ECMAScript version
    sourceType: 'module',   // ES modules (import/export)
  },
  plugins: [
    '@typescript-eslint',     // TypeScript plugin
  ],
  ignorePatterns: [
    'node_modules/**',
    'playwright-report/**',
    'test-results/**',
    'dist/**',
    'coverage/**',
    '.github/**',
    'scripts/**',
  ],
  rules: {
    'no-unused-vars': 'off',                      // Disable for TS (use TS rule instead)
    '@typescript-eslint/no-unused-vars': 'warn',    // Warn on unused variables
    'no-console': 'off',                          // Allow console.log (optional)
  },
};