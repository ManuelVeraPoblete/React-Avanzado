import React        from 'react';
import ArticleList  from '../ArticleList';

import renderer     from 'react-test-renderer';

describe('AticleList', () => {
  const testPropos = {
    article: {
      a: { id: 'a'},
      b: { id: 'b'},
    }, 
    articleActions: {
      lookupAuthor: jest.fn(() => ({})),
    }
  };
  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testPropos}                
      />
    ).JSON();

    expect(tree.children.length).toBE(2);

    expect(tree).toMatchSnapshot();

  });
});