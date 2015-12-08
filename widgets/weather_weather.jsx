var React = require('react');

var Weather = React.createClass({

  getInitialState: function() {

    return ({weather: "Loading weather ..."});

  },

  componentDidMount: function() {
    var that = this;

      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = Math.floor(position.coords.latitude).toString();
        var lon = Math.floor(position.coords.longitude).toString();
        return that.getWeather(lat, lon);
      });

    },

    getWeather: function(lat, lon) {
      var request = new XMLHttpRequest();

      var apiAddress = 'http://api.openweathermap.org/data/2.5/weather?lat='
        + lat
        + '&lon='
        + lon
        + '&APPID=645c5d39c7603f17e23fcaffcea1a3c1';

      request.open('GET', apiAddress, true);

      var self = this;

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          self.setState({weather: JSON.parse(request.responseText)});
        } else {
          alert ("Reached target server, but error");
        }
      };

      request.onerror = function() {
        alert("Did not hit server, error");
      };

      request.send();
    },

  render: function() {
    if (typeof this.state.weather === 'string') {
      return <p>{this.state.weather}</p>;
    } else {
      var temp = (this.state.weather.main.temp * (9/5) - 459.67).toFixed(1);
      return <p>The current weather is {temp} Fahrenheit</p>;
    }
  }
});


module.exports = Weather;
