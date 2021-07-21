module.exports = {
  "parser": "@typescript-eslint/parser",
  'extends': [
    'plugin:react/recommended'
  ],
  plugins: ['redux-saga', 'react', 'jsx-a11y', '@typescript-eslint', 'react-hooks'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true,
      "classes": true,
      "defaultParams": true
    },
  },
  rules: {
    "no-mixed-operators" : 2,
    'no-extra-bind': 0,
    'react-hooks/exhaustive-deps': 2,
    'array-callback-return': 2,
    'no-useless-concat': 2,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [0, {"extensions": [".ts", ".tsx"]}],
    "typescript/no-object-literal-type-assertion": 0,
    "no-global-assign": [0, {"exceptions": ["Object"]}],
    "no-param-reassign": [2, {"props": false}],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': [0, 'never'],
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      0,
      1,
      {
        SwitchCase: 1,
      },
    ],
    "jsx-a11y/anchor-is-valid" : 2,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      0,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/alt-text': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 2,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
    'require-yield': 0,
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
};
