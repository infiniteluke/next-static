import React from 'react';
import Post from '../src/components/Post';
import posts from '../posts';

export default () => (
  <div>
    <h1>My Blog</h1>
    {posts.map(post => (
      <Post
        key={post.slug}
        title={post.title}
        slug={post.slug}
        date={post.date}
        author={post.author}
        body={post.body}
        tags={post.tags}
      />
    ))}
  </div>
);
