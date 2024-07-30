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

## Project Setup

1. **Clone the Repository**

```bash
git clone <repository-url>
cd husky-eslint-setup-react-app

```

   # Initialize the Project
    npm init -y
# Install Dependencies

    Install ESLint, Husky, lint-staged, and other required packages:
    
  ##  `npm install --save-dev eslint lint-staged husky @commitlint/{cli,config-conventional} eslint-plugin-local-rules`


# Husky Installation and Configuration
## `npx husky init`
```base
    This will create a .husky directory and update the package.json with a prepare script.
```
# 1 Configure Husky Hooks
1. Commit Message Hook: Create .husky/commit-msg with the following content:
        npx --no -- commitlint --edit $1
2. Pre-commit Hook: Create .husky/pre-commit with the following content:
        npx lint-staged

# 2 Configure lint-staged
    Add the following configuration to your package.json to specify which files should be linted and automatically fixed before committing:

```json
    "lint-staged": {
    "*.{js,jsx,ts,tsx}": "eslint --cache --fix"
    }
```
This configuration ensures that all JavaScript and TypeScript files will be linted and fixed (if necessary) before being committed.


# ESLint Configuration
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

1. Husky Documentation
2. ESLint Documentation
3. eslint-plugin-local-rules Documentation






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
