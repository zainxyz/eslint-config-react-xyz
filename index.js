module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "react-app"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "comma-dangle": [
      "error",
      {
        "arrays": "never",
        "exports": "ignore",
        "functions": "never",
        "imports": "ignore",
        "objects": "never"
      }
    ],
    "func-names": 0,
    "import/prefer-default-export": "warn",
    "indent": [
      "error",
      2,
      {
        "FunctionDeclaration": {
          "body": 1,
          "parameters": 3
        }
      }
    ],
    "key-spacing": [
      2,
      {
        "align": "colon"
      }
    ],
    "no-undef": "warn",
    "no-underscore-dangle": 0,
    "no-use-before-define": "warn",
    "prefer-rest-params": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "semi": 2,
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "ignore",
        "named": "never"
      }
    ],
    "valid-jsdoc": [
      "warn",
      {
        "prefer": {
          "returns": "return",
          "yield": "yields"
        },
        "preferType": {
          "Boolean": "boolean",
          "Number": "number",
          "String": "string",
          "array": "Array",
          "function": "Function",
          "object": "Object"
        },
        "requireParamDescription": false,
        "requireReturn": false,
        "requireReturnDescription": false
      }
    ]
  }
};
