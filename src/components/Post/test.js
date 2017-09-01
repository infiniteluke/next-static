import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import dom from 'cheerio';
import Post from './index';
import renderer from 'react-test-renderer';
// Global Test Setup
const Component = Post;

const defaultProps = {
  title: 'Hello',
  author: 'User',
  date: '7/22/2017',
  tags: ['javascript', 'angular'],
  body: 'lorem ipsum is the name making tests is this game',
  slug: 'test-post',
};

const makeProps = ({ title, author, date, tags, body, slug } = defaultProps) =>
  Object.assign(
    {},
    {
      title,
      author,
      date,
      tags,
      body,
      slug,
    }
  );

const loadComponent = el => dom.load(render(el));

describe('<Post /> with no args', () => {
  it('should render a post with default args', () => {
    const props = makeProps();
    const re = RegExp(props);

    const el = <Component {...props} />;

    const $ = loadComponent(el);

    const output = $('.post').html();
    const actual = re.test(output);
    const expected = true;

    expect(actual).toEqual(expected);
  });
});

describe('Snapshot::<Post />s', () => {
  it('should render the contents of the component.', () => {
    const props = makeProps();
    const el = <Component {...props} />;

    const tree = renderer.create(el).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
