module.exports = {
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "react-app"
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "rules": {
    "semi": 2,
    "no-undef": "warn",
    "no-use-before-define": "warn",
    "comma-dangle": [
      "error", {
        "arrays": "never",
        "objects": "never",
        "imports": "ignore",
        "exports": "ignore",
        "functions": "never"
      }
    ],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "ignore"
    }],
    "func-names": 0,
    "indent": ["error", 2, {
      "FunctionDeclaration": {"parameters": 3, "body": 1}
    }],
    "prefer-rest-params": "warn",
    "import/prefer-default-export": "warn",
    "no-underscore-dangle": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
  }
};
