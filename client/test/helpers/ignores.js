/* eslint-env node */

/*
  Disable webpack-specific features for tests since
  Mocha doesn't know what to do with them.
  extensions": [".styl",".css",".png",".jpg",".gif",".svg",".ico"]
*/

const extensions = [
    '.png',
    '.scss',
    '.jpg',
];
const noop = () => null;

extensions.forEach(ext => {
    require.extensions[ext] = noop;
});

