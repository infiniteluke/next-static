import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import dom from 'cheerio';
import Header from './index';
import renderer from 'react-test-renderer';

describe('Snapshot::<Header /> component', () => {
  it('should render the contents of the component.', () => {
    const el = <Header />;
    const tree = renderer.create(el).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
