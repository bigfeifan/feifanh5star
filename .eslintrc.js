module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'always'],
    'indent': 0,
    'space-before-function-paren': 0,
    'comma-spacing': 0,
    'space-in-parens': 0,
    'no-tabs': 0,
    'eol-last': 0,
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'no-new': 0
  }
}