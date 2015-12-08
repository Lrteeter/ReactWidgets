var React = require('react');

var Clock = React.createClass({
  getInitialState: function() {
    return ({time: new Date()});
  },

  componentDidMount: function() {
    this.timer = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
  },

  tick: function() {
    this.setState({ time: new Date() });
  },

  render: function() {
    var timeNow = this.state.time.toString();
    return <p>{timeNow}</p>;
  }

});


module.exports = Clock;
