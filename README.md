# Husky ESLint Setup for React App

This repository demonstrates how to set up Husky, ESLint, and custom local rules in a React application to ensure code quality and consistency.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Husky Installation and Configuration](#husky-installation-and-configuration)
3. [ESLint Configuration](#eslint-configuration)
4. [Local Rules](#local-rules)
5. [Test Component](#test-component)
6. [Using the Setup](#using-the-setup)
7. [Troubleshooting](#troubleshooting)
8. [References](#references)
9. [Learning Points](#learning-points)

## Descriptions
This setup integrates Husky, ESLint, Prettier, lint-staged, and commitlint into a React application to ensure high code quality and consistency.

* Husky: Manages Git hooks to run scripts like linting before commits, ensuring code quality.
* ESLint: Identifies and fixes problems in JavaScript code, enforcing coding standards and best practices.
* Prettier: Formats code consistently to maintain readability and style across the codebase.
* lint-staged: Runs scripts on staged files, allowing targeted linting and automated fixes before commits.
* commitlint: Checks commit messages against predefined rules to ensure consistency and readability.

* This setup helps in maintaining a clean, readable, and maintainable codebase by automating checks and enforcing standards throughout the development process.

## Project Setup

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# OR
# `npx create-react-app my-app`
# `cd my-app`
# `npm start`
 ## Initialize the Project
 #  `npm init -y`

# Install Dependencies
    Install ESLint, Husky, lint-staged, and other required packages:
    
  #  `npm install --save-dev eslint lint-staged husky @commitlint/{cli,config-conventional} eslint-plugin-local-rules`


## Husky Installation and Configuration

# `npx husky init`
This will create a .husky directory and update the package.json with a prepare script.

# 1 Configure Husky Hooks
1. Commit Message Hook: Create .husky/commit-msg with the following content:
    ```base
     npx --no -- commitlint --edit $1
    ```
2. Pre-commit Hook: Create .husky/pre-commit with the following content:
    ```base
     npx lint-staged
    ```
    

# 2 Configure lint-staged
    Add the following configuration to your package.json to specify which files should be linted and automatically fixed before committing:

```json
    "lint-staged": {
    "*.{js,jsx,ts,tsx}": "eslint --cache --fix"
    }
```
This configuration ensures that all JavaScript and TypeScript files will be linted and fixed (if necessary) before being committed.


## ESLint Configuration
 1 Create ESLint Configuration

 Add an .eslintrc.json file with the following content:

 ```json
 {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:local-rules/all"
  ],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "react-hooks",
    "import",
    "jsx-a11y",
    "local-rules"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "no-console": "warn",
    "eqeqeq": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "comma-dangle": "off",
    "eol-last": "warn",
    "local-rules/no-hardcoded-keys": "error",
    "no-unused-vars": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}

 ```
2. Add ESLint Scripts 
Update package.json with the following linting scripts:
```json
    "scripts": {
  "lint": "eslint \"src/**/*.{js,jsx}\"",
  "lint:fix": "eslint \"src/**/*.{js,jsx}\" --fix"
}
```

## Local Rules
The eslint-plugin-local-rules plugin allows you to define and enforce custom linting rules.

1. Define Local Rules
    Ensure the local-rules plugin is configured properly in your .eslintrc.json file. For example, the no-hardcoded-keys rule is enforced:

```json
    "rules": {
  "local-rules/no-hardcoded-keys": "error"
}

```
 Ensure the local-rules plugin is configured properly in your .eslintrc.json file. For example:
 ```json
      "plugins": [
    "local-rules"
  ]
 ```

 # Test Component for local-rules and eslint
    To test the local rules, use the following SignupButton component:

 ```js
    import React, { useEffect } from 'react';

// Test local rule violations
// const myApp_KEY = "3g2uhjirkdddd4jht93onn54930";
// const myApp_SECRET_key = "3g2uhjirkdddd4jht93onn54930";
// let myApp2_KEY = process.env.REACT_APP_API_KEY;

const SignupButton = () => {
  useEffect(() => {
    // Test local rule violations
    // console.log(myApp_KEY);
    // console.log(myApp_SECRET_key);
    // console.log(myApp2_KEY);
  }, []);

  const handleSignup = () => {
    alert('Sign up successful!');
  };

  return (
    <button onClick={handleSignup} className='signup-button'>
      Click here
    </button>
  );
};

export default SignupButton;

 ```

## Using the Setup
1. Run Linting
    To manually lint your code:
## `npm run lint`

    To automatically fix linting errors:
## `npm run lint:fix`

2. Commit Changes
    Husky will automatically run linting checks on staged files before commits. If linting errors are found, the commit will be blocked until they are resolved.

## Troubleshooting

1. Husky Hooks Not Running

Ensure Husky is properly installed and the hooks are executable. Reinstall Husky if necessary.

2. ESLint Errors

Verify your .eslintrc.json configuration. Ensure all required plugins and rules are correctly installed and configured.

For more information on Husky, ESLint, and local rules, refer to their respective documentation:

## References
For more information on Husky, ESLint, and local rules, refer to their respective documentation:

1. Husky Documentation(https://typicode.github.io/husky/)
2. ESLint Documentation(https://eslint.org/)
3. eslint-plugin-local-rules Documentation(https://www.npmjs.com/package/eslint-plugin-local-rules)
7. eslint-plugin-react Documentation(https://www.npmjs.com/package/eslint-plugin-react)
4. eslint-plugin-react-hooks Documentation(https://www.npmjs.com/package/eslint-plugin-react-hooks)
5. lint-staged Documentation(https://www.npmjs.com/package/lint-staged)
6. prettier Documentation(https://www.npmjs.com/package/prettier)
7. @commitlint/cli Documentation(https://commitlint.js.org/guides/getting-started.html)


## Learning Points

# ESLint
ESLint is a tool for identifying and fixing problems in JavaScript code. It helps developers maintain consistent coding styles and catch errors early in the development process.

1. Error Detection

  * Description: ESLint analyzes your JavaScript code to find syntax errors, potential bugs, and other issues. This helps catch problems before they become serious.
  * Benefit: Detecting errors early in the development process can save time and reduce the number of bugs in production.
2. Code Quality

  * Description: ESLint enforces coding standards and best practices, ensuring that your codebase is clean, readable, and maintainable.
  * Benefit: A high-quality codebase is easier to maintain, understand, and extend.

3. Early Bug Prevention

  * Description: ESLint helps you prevent bugs before they become hard-to-debug problems down the road. It is highly customizable,
    allowing you to tweak its rules to   match your project's coding style.
  * Benefit: Customizable rules enable teams to enforce their own standards and prevent common pitfalls specific to their codebase.

# Husky
Husky is a tool that allows you to easily manage Git hooks, which are scripts that run automatically at certain points in your Git workflow.

1. Automated Checks

  * Description: Husky can run scripts before commits, pushes, and other Git actions to ensure that your code meets certain standards.
  * Benefit: Automating checks helps maintain code quality and consistency across the team.

2. Pre-commit Hooks

  * Description: Use Husky to set up pre-commit hooks that run linting or testing scripts before allowing a commit to proceed.
  * Benefit: Prevents bad code from being committed, reducing the number of issues that make it into the main codebase.

3. Easy Configuration

  * Description: Husky is easy to set up and configure, with straightforward integration into your existing workflows.
  * Benefit: Quick to adopt and start using, without significant overhead.

# Prettier
Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.

1. Consistent Formatting

  * Description: Prettier enforces consistent code formatting, removing the need for debates over style issues.
  * Benefit: Consistent code style makes the codebase more readable and easier to work with.
  
2. Automated Formatting

  * Description: Prettier can automatically format your code on save or before commits.
  * Benefit: Saves time and reduces errors by automating the formatting process.
3. Integration with ESLint

  * Description: Prettier can be integrated with ESLint to run alongside it, ensuring both style and code quality are maintained.
  * Benefit: Combines the benefits of linting and formatting in a single workflow.

# lint-staged
lint-staged is a tool that allows you to run scripts on staged files in Git.

1. Targeted Linting

  * Description: lint-staged only lints files that are staged for commit, improving performance and relevance.
  * Benefit: Saves time by only checking files that are about to be committed.

2. Automated Fixes

  * Description: lint-staged can automatically fix linting errors before committing changes.
  * Benefit: Ensures that only clean, linted code is committed, reducing the chance of introducing errors.

3. Customizable Workflow

  * Description: You can configure lint-staged to run any scripts you want, making it flexible and adaptable to your workflow.
  * Benefit: Adaptable to different project needs and workflows.

# commitlint
commitlint checks if your commit messages meet the conventional commit format.

1. Consistent Commit Messages

  * Description: commitlint enforces a consistent commit message format based on predefined rules.
  * Benefit: Consistent commit messages make it easier to read and understand the project's history.

2. Automated Validation

  * Description: commitlint runs automatically to validate commit messages against the configured rules.
  * Benefit: Prevents poorly formatted commit messages from being pushed, ensuring clarity and consistency.

# Custom Rules

  * Description: commitlint allows you to define custom rules for commit messages to match your project's needs.
  * Benefit: Flexibility to enforce specific guidelines and standards for commit messages.

