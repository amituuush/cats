var _$ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var jsdom = require('jsdom');
var chai = require('chai');
var expect = require('chai').expect;
var Provider = require('react-redux').Provider;
var chaiJquery = require('chai-jquery');
var createStore = require('redux').createStore;
var reducers = require('../src/reducers');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// export {renderComponent, expect};
module.exports = {renderComponent, expect};
