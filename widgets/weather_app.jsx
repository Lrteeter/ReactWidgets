var React = require('react'),
    Clock = require('./weather_clock.jsx'),
    Weather = require('./weather_weather.jsx');

var WeatherApp = React.createClass({

  render: function() {
    return (
      <div>
        <Clock/>
        <Weather/>
      </div>
    );
  }



});

module.exports = WeatherApp;
