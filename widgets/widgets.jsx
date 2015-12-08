var React = require('react'),
    ReactDOM = require('react-dom'),
    AutoComplete = require('./autocomplete_input.jsx'),
    WeatherApp = require('./weather_app.jsx'),
    Tabs = require('./tabs.jsx');

    var names = [
              { name: 'Backbone.js', id: 1},
              { name: 'AngularJS', id: 2},
              { name: 'jQuery', id: 3},
              { name: 'Prototype', id: 4},
              { name: 'React', id: 5},
              { name: 'Ember', id: 6},
              { name: 'Knockout.js', id: 7},
              { name: 'Dojo', id: 8},
              { name: 'Mootools', id: 9},
              { name: 'Underscore', id: 10},
              { name: 'Lodash', id: 11},
              { name: 'Moment', id: 12},
              { name: 'Express', id: 13},
              { name: 'Koa', id: 14},
          ];

    var articles = [
      { title: 'Backbone.js', content: "this is content", id: 1},
      { title: 'AngularJS', content: "this is content", id: 2},
      { title: 'jQuery', content: "this is content", id: 3},
      { title: 'Prototype', content: "this is content", id: 4},
    ];


var MyComponent = React.createClass({
  render: function () {
    return(
      <div>
        <AutoComplete items={ names }/>
        <WeatherApp/>
        <Tabs items={articles}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
});
