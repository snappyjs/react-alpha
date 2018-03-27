'use strict';

/* eslint-env node */

// ------------------
// Chai
// ------------------
const chai = require('chai');
global.expect = chai.expect;
// ------------------
// Enzyme
// ------------------
const { shallow, mount, render, configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });
global.shallow = shallow;
global.mount = mount;
global.render = render;

// ------------------
// React (ProvidePlugin from Webpack)
// ------------------
const React = require('react');
const PropTypes = require('prop-types');
const ReactDOM = require('react-dom');
global.React = React;
global.PropTypes = PropTypes;
global.ReactDOM = ReactDOM;

global.itRenders = Component => {
    const wrapper = shallow(Component);
    expect(shallow(Component).length).to.eql(1);
    return wrapper;
};
