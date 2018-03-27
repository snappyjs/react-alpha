'use strict';

/* eslint-env node */
process.env.NODE_ENV = 'test';

module.exports = function(wallaby) {
    return {
        files: [
            { pattern: 'client/**/*.spec.js', ignore: true },
            { pattern: 'client/**/*.js' },
            { pattern: 'client/test/helpers/**/*.js', instrument: false },
            { pattern: 'client/**/*.scss', instrument: false },
            { pattern: 'client/**/*.png', load: false},
            { pattern: 'client/**/*.jpg', load: false},
            { pattern: 'client/**/*.gif', load: false}
        ],
        tests: [{ pattern: 'client/**/*.spec.js', load: true }],

        compilers: {
            '**/*.js*': wallaby.compilers.babel()
        },

        env: {
            type: 'node',
            runner: 'node'
        },

        debug: true,
        testFramework: 'mocha',

        setup: function() {
            require('./client/test/helpers/ignores');
            require('./client/test/helpers/dom');
            require('./client/test/helpers/globals');
        }
    };
};
