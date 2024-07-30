module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'docs',
        'style',
        'refactor',
        'test',
        'ci',
        'add'
      ]
    ],
    'type-empty': [
      2, 
      'never', 
      'Commit message type is required. Please specify the type (e.g., feat, fix, chore, etc.)'
    ],
    'subject-empty': [
      2, 
      'never', 
      'Commit message subject is required. Please provide a brief description of the change.'
    ],
  },
};
