import React from 'react';

const styles = {
  article: {
    paddingbottom : 10,
    borderbottomStyle: 'solid',
    borderbottomColor: '#aaa',
    borderbottomWidth: 1,
    marginBottom: 10,
  },
  title :{
    fontWeidght: 'bold',
  },
  date: {
    fontSize: '0.85em',
    color: '#8888',
  },
  author: {
    paddingTop : 10,
    paddingnBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};

const Article = (props) => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);
  const dateDisplay = (dateString) =>
    new Date(dateString).toDateString();

  return (
    <div style= {styles.article}>
      <div styke={styles.title} >{article.title} </div>
      <div style={styles.date} >
        {dateDisplay(article.date)}
      </div>
      <div>
        < a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

export default Article;