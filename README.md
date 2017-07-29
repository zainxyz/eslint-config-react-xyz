# eslint-config-react-xyz
A Good configuration for ESLint for ReactJS

## How to setup this `eslint-config-react-xyz`?

1. Update your project's package.json, adding in a new script and the eslint dependencies:
````javascript
"scripts": {
  "lint": "node_modules/eslint/bin/eslint.js ./src",
  ...
},
"devDependencies": {
  "eslint": "^3.19.0",
  "eslint-config-airbnb": "^15.0.1",
  "eslint-config-react-app": "^1.0.5",
  "eslint-config-react-xyz": "git@github.com:zainxyz/eslint-config-react-xyz.git",
  "eslint-loader": "^1.8.0",
  "eslint-plugin-flowtype": "^2.35.0",
  "eslint-plugin-import": "^2.7.0",
  "eslint-plugin-jsx-a11y": "^5.0.1",
  "eslint-plugin-react": "^7.1.0",
  ...
},
...
````

2. Add in an `.eslintrc.js` to the root `./` directory and extend the `eslint-config-react-xyz`:
````javascript
module.exports = {
  "extends": "eslint-config-react-xyz"
};
````

3. Run the command `npm i && npm run lint`
