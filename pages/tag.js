import React from 'react';
import Link from 'next/link';
import Post from '../src/components/Post';
import posts from '../posts';

export default ({ url: { query: { tag } } }) => (
  <div>
    <Link href='/'><a>Home</a></Link>
    <h1>{tag}</h1>
    {posts
      .filter(post => post.tags.includes(tag))
      .map(post => (
        <Post
          key={post.slug}
          title={post.title}
          slug={post.slug}
          date={post.date}
          author={post.author}
          body={post.body}
          tags={post.tags}
        />
      ))
    }
  </div>
);
