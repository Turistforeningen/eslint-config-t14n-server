module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
    ecmaFeatures: {
      modules: false
    }
  },
  rules: {
    'no-console': [0],
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'no-param-reassign': [2, {'props': false}],
    'no-underscore-dangle': [2, {'allow': ['_id']}],
    'no-unused-vars': [2, {'args': 'none'}],
    'function-paren-newline': [2, 'consistent'],
    'arrow-parens': [2, 'always'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore'
    }]
  }
};
