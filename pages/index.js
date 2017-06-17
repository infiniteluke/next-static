// @flow

import React from 'react';
import Post from '../src/components/Post';
import Layout from '../src/components/Layout';
import posts from '../posts';
import config from '../config';

export default Layout(
  () =>
    <div>
      <h1>{config.siteName}</h1>
      {posts.map(post =>
        <Post
          key={post.slug}
          title={post.title}
          slug={post.slug}
          date={post.date}
          author={post.author}
          body={post.body}
          tags={post.tags}
        />
      )}
    </div>,
  'Home'
);
