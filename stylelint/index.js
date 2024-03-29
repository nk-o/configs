module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.min.css',
    '**/*.build.css',
    'build',
    'coverage',
    'cypress',
    'node_modules',
    'vendor',
    'vendors',
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-name-space-after': 'always',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-opening-brace-space-before': null,

    // Disable until fixed https://github.com/stylelint-scss/stylelint-config-recommended-scss/issues/163 .
    'import-notation': null,

    // Disable max line length.
    'max-line-length': null,

    // Sometimes we need to use `0px` units inside CSS variables.
    'length-zero-no-unit': null,
    'no-descending-specificity': null,

    // Temporary disable color function notations
    // there is a problem with CSS variables in 'legacy' mode
    // and there is a problem with SASS compiler in 'modern' mode
    'color-function-notation': null,

    // We are using different patterns based on the project, so we don't need predefined patterns here.
    'custom-property-pattern': null,
    'selector-class-pattern': null,

    // Since we may use large margins styles, it is not a good choice to shorthand it to single `margin`.
    'declaration-block-no-redundant-longhand-properties': null,

    // Recommended rules for stylelint-scss
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // these rules may not be used once fix added in https://github.com/stylelint-scss/stylelint-scss/pull/591
    'function-no-unknown': null,
  },
}
