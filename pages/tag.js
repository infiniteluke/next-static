// @flow

import React from 'react';
import Link from 'next/link';
import Post from '../src/components/Post';
import posts from '../posts';
import { type Request } from '../types/request';
import Layout from '../src/components/Layout';

export default Layout(
  ({ url: { query: { tag } } }: Request) =>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>
        {tag}
      </h1>
      {posts
        .filter(post => post.tags && post.tags.includes(tag))
        .map(post =>
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
  'Tag'
);
