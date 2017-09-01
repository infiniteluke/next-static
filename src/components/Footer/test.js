import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import Footer from './index';
import renderer from 'react-test-renderer';

describe('Snapshot::<Footer /> component', () => {
  it('should render the contents of the component.', () => {
    const el = <Footer />;
    const tree = renderer.create(el).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
