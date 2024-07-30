module.exports = {
  'no-hardcoded-keys': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Disallow hardcoded keys and allow keys using process.env',
        category: 'Possible Errors',
        recommended: true,
      },
      schema: [], // no options
    },
    create: function (context) {
      return {
        VariableDeclarator(node) {
          const variableName = node.id.name;
          const variableValue = node.init;

          // Check for variables with 'KEY' or 'SECRET' in their name
          if (/.*(KEY|SECRET).*/.test(variableName)) {
            if (
              variableValue &&
                            variableValue.type === 'Literal' &&
                            typeof variableValue.value === 'string'
            ) {
              context.report({
                node,
                //   message: 'Secret keys should not be hardcoded.',
                message: 'Remove hardcoded secrets. Configure your keys using environment variables.',

              });
            }
          }
        },
      };
    },
  },
};
