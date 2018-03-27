'use strict';

/* eslint-env node */

/**
 * Enable DOM running mocha.
 */
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = document;
global.window = document.defaultView;
global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
};

global.window.matchMedia =
    window.matchMedia ||
    (() => {
        return { matches: false, addListener: () => {}, removeListener: () => {} };
    });

global.navigator = {
    userAgent: 'node.js',
    platform: 'Win32'
};
