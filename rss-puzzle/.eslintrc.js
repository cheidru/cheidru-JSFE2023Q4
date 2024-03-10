{
    "plugins": ["prettier", "import", "@typescript-eslint"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "rules": {
        "@typescript-eslint/no-explicit-any": "error",
        "no-debugger": "off",
        "no-console": 0,
        "class-methods-use-this": "off"
    }
}