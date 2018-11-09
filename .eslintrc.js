module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'node': true,
        'es6': true,
        'jquery': true
    },
    'globals': {
        'NODE_ENV': true,
        'Modernizr': true,
        'Translator': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [
            'warn',
            4
        ],
        'eol-last': [
            'warn',
            'always'
        ],
        'linebreak-style': [
            'warn',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'always'
        ],
        'no-unused-vars': [
            'warn'
        ]
    },
    'parserOptions': {
        'sourceType': 'module'
    }
};