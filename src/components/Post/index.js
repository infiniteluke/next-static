// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { distanceInWordsToNow } from 'date-fns';
import renderMarkup from '../../lib/renderMarkup';
import { type Post } from '../../../types/post';
import theme from '../../lib/theme';

const BlogPost = styled.div`
  background: ${theme.main};
`;

export default ({ title, author, date, tags, body, slug }: Post) =>
  <BlogPost>
    <article itemScope itemType="http://schema.org/BlogPosting">
      <header>
        <Link href={`/post?post=${slug}`} as={`/post/${slug}`}>
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
    </article>
  </BlogPost>;
