import React from 'react';
import test from 'tape';
import reactDom from 'react-dom/server';
import dom from 'cheerio';
import Post from './index';

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
const render = reactDom.renderToStaticMarkup;

test('<Post />', nest => {
  nest.test('given no props', assert => {
    const msg = `should render a post`;

    const props = makeProps();
    const re = RegExp(props);

    const el = <Component {...props} />;

    const $ = dom.load(render(el));
    const output = $('.post').html();
    const actual = re.test(output);
    const expected = true;

    assert.same(actual, expected, msg);
    assert.end();
  });
});
