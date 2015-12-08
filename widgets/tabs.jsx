var React = require('react'),
    Header = require('./header.jsx');

var Tabs = React.createClass({

  getInitialState: function() {
    return ({title: [], content: [], id: 0, focused: 0});
  },

  getArticle: function(e) {
    this.setState({focused: e.target.innerHTML});
  },

  render: function() {
    var articles = this.props.items;
    var tabComponentInstance = this;

    var listArticles = articles.map(function(article) {
      var style = '';
      // if (typeof tabComponentInstance.context === 'undefined'){
        tabComponentInstance.context = '';
      // }

      if (tabComponentInstance.state.focused === article.title) {
        style = 'focused';
        tabComponentInstance.context = article.content;
      }

      return (
        <Header
          class = {style}
          key={article.id}
          name={article.title}
          content={article.content}
          showArticle={tabComponentInstance.getArticle}
          id={article.id}
        />
      );
    });

    return(
        <div>
          <ul>
            {listArticles}
          </ul>
          <article>{tabComponentInstance.context}</article>
        </div>
      );
  }

});

module.exports = Tabs;
