// @flow

import React from 'react';
import Post from '../src/components/Post';
import Layout from '../src/components/Layout';
import posts from '../posts';

export default Layout(
  () =>
    <div>
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
