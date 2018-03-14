import React from 'react';

import ArticleList from './ArticleList';

import DataApi from 'state-api';
// import { data } from '../testData';

// const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }
  articleActios = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  render() {
    return (
      <ArticleList 
        articles={this.state.articles}
        //authors={this.state.authors}
        articleActios={this.articleActios}
      />
    );
  }
}

export default App;