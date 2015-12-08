var React = require('react');

var Header = React.createClass({
  //
  // getInitialState: function() {
  //   return ({focused: 0});
  // },

  // clicked: function(index) {
  //   if(self.state.focused == index ) {
  //     var style = 'strong';
  //   }
  // },

  //

  render: function() {
    return <li className={this.props.class} onClick={this.props.showArticle}>{this.props.name}</li>;
  },
});


module.exports = Header;
