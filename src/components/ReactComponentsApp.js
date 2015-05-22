'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');


var HeadlineComponent = require('./HeadlineComponent');
var container = document.getElementById('basic-container');

var ReactComponentsApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
        <HeadlineComponent/>
      </div>
    );
  }
});

module.exports = ReactComponentsApp;
