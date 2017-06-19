// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import Link from 'next/link';
import { distanceInWordsToNow } from 'date-fns';
import renderMarkup from '../../lib/renderMarkup';
import { type Post } from '../../../types/post';

export default ({ title, author, date, tags, body, slug }: Post) =>
  <article itemScope itemType="http://schema.org/BlogPosting" className="post">
    <header>
      <Link href={`/post?post=${slug}`} as={`/post/${slug}`}>
        <a><h1 itemProp="headline" className="post--title">{title}</h1></a>
      </Link>
      <footer className="post--info">
        <span>
          <time itemProp="datePublished" dateTime={date}>
            {distanceInWordsToNow(date, { addSuffix: true })}
          </time>
        </span>
        <span itemProp="author">{author}</span>
      </footer>
    </header>
    <div
      className="post--body"
      dangerouslySetInnerHTML={{ __html: renderMarkup(body) }}
    />
    <footer>
      <small className="post--tags">
        <span>Filed under: </span>
        {tags.map((tag, index) =>
          <span key={tag} itemProp="keywords" className="post--tag">
            <Link
              href={`/tag?tag=${tag}`}
              as={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <a>{tag}</a>
            </Link>
            {index !== tags.length - 1 ? ', ' : ''}
          </span>
        )}
      </small>
    </footer>
  </article>;
