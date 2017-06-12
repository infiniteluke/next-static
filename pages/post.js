// @flow

import React from 'react';
import Link from 'next/link';
import Post from '../src/components/Post';
import posts from '../posts';
import { Request } from '../types/request';

export default ({ url: { query: { post: slug } } }: Request) => {
  const post = posts.find(p => p.slug === slug);
  return (
    <div>
      <Link href="/"><a>Home</a></Link>
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
};
