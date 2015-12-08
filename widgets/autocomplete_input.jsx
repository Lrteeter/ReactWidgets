var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return {content: ""};
  },
  handleChange: function(e) {
    this.setState({content: e.target.value});
  },

  autoComplete: function(e) {
    // var targetName = e.target.innerHTML();
    this.setState({content: e.target.innerHTML});
  },

  render: function() {
    var names = this.props.items,
        content = this.state.content.trim().toLowerCase();

    if (content.length > 0) {
      names = names.filter(function(n) {
        return n.name.toLowerCase().match( content );
      });
    }

    var self = this;
    var listNames = names.map(function(n) {
      return <li key={n.id} onClick={self.autoComplete}>{n.name}</li>;
    });

    return (
      <div>
        <input
          type="text"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Search a name" />
        <ul>
          {listNames}
        </ul>
      </div>
    );
  }
});


module.exports = AutoComplete;
