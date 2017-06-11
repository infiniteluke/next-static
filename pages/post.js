import React from 'react';
import Link from 'next/link';
import Post from '../src/components/Post';
import posts from '../posts';

export default ({ url: { query: { post } } }) => {
  const id = posts.findIndex(p => p.slug === post);
  return (
    <div>
      <Link href='/'><a>Home</a></Link>
      <Post
        title={posts[id].title}
        slug={posts[id].slug}
        date={posts[id].date}
        author={posts[id].author}
        body={posts[id].body}
        tags={posts[id].tags}
      />
    </div>
  );
};
