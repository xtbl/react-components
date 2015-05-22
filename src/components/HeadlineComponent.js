'use strict';

var React = require('react/addons');

var HeadlineComponent = React.createClass({
    render: function() {
        return (
            <div className='headline'>
                <h1>Headline Component</h1>
            </div>
        );
    }
});

module.exports = HeadlineComponent;
