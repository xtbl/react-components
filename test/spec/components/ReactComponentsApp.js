'use strict';

describe('ReactComponentsApp', function () {
  var React = require('react/addons');
  var ReactComponentsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactComponentsApp = require('components/ReactComponentsApp.js');
    component = React.createElement(ReactComponentsApp);
  });

  it('should create a new instance of ReactComponentsApp', function () {
    expect(component).toBeDefined();
  });
});
