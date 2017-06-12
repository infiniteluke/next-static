// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import Link from 'next/link';
import { distanceInWordsToNow } from 'date-fns';
import renderMarkup from '../../lib/renderMarkup';
import { Post } from '../../../types/post';

export default ({ title, author, date, tags, body, slug }: Post) =>
  <article itemScope itemType="http://schema.org/BlogPosting">
    <header>
      <Link href={`/post/?post=${slug}`} as={`/post/${slug}`}>
        <a><h1 itemProp="headline">{title}</h1></a>
      </Link>
      <p>
        <time itemProp="datePublished" dateTime={date}>
          {distanceInWordsToNow(date)}
        </time>
      </p>
      <p><span itemProp="author">{author}</span></p>
    </header>
    <span dangerouslySetInnerHTML={{ __html: renderMarkup(body) }} />
    <footer>
      <ul>

        {tags.map(tag =>
          <small key={tag} itemProp="keywords">
            <li>
              <Link
                href={`/tag?tag=${tag}`}
                as={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <a>{tag}</a>
              </Link>
            </li>
          </small>
        )}
      </ul>
    </footer>
  </article>;
