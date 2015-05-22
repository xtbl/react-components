'use strict';

var ReactComponentsApp = require('./ReactComponentsApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ReactComponentsApp}>
    <Route name="/" handler={ReactComponentsApp}/>
  </Route>

);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
