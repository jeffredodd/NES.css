module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'string-quotes': 'double',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  },
  ignoreFiles: [
    'docs/*',
    'css/*'
  ]
};