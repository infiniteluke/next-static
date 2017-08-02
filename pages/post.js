// @flow

import React, { type Element } from 'react';
import Link from 'next/link';
import Post from '../src/components/Post';
import posts from '../posts';
import { type Request } from '../types/request';
import Layout from '../src/components/Layout';

export default Layout(({ url: { query: { post: slug } } }: Request): Element<
  *
> => {
  const post = posts.find(p => p.slug === slug);
  return (
    <div>
      <Link href="/">
        <a className="home-link">Home</a>
      </Link>
      <Post
        title={post.title}
        slug={post.slug}
        date={post.date}
        author={post.author}
        body={post.body}
        tags={post.tags}
      />
    </div>
  );
}, 'Post');
