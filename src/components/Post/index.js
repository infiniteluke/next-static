// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import Link from 'next/link';
import { distanceInWordsToNow } from 'date-fns';
import styled from 'styled-components';
import renderMarkup from '../../lib/renderMarkup';
import { type Post } from '../../../types/post';
import theme from '../../lib/theme';

const Article = styled.article`
  .table-wrapper {
    overflow-x: auto;
  }
  table {
    border-collapse: collapse;
  }
  table th {
    background-color: ${theme.accent};
    color: ${theme.light};
  }
  table,
  th,
  td {
    border: 1px solid ${theme.dark};
  }
  th,
  td {
    padding: 10px;
  }
  blockquote {
    margin: 1.8rem 20px;
    padding: 1rem 10px;
    p {
      font-size: 1.4rem;
      margin: 0;
      display: inline;
      quotes: "\\201C""\\201D""\\2018""\\2019";
    }
    p:before {
      font-size: 5rem;
      font-family: Georgia, serif;
      color: ${theme.dark.lighten(1.5)};
      content: open-quote;
      line-height: 0.3rem;
      margin-right: 0.8rem;
      vertical-align: -0.4em;
    }
    p:after {
      content: close-quote;
      visibility: hidden;
    }
  }
`;

export default ({ title, author, date, tags, body, slug }: Post) =>
  <Article itemScope itemType="http://schema.org/BlogPosting" className="post">
    <header>
      <Link href={`/post?post=${slug}`} as={`/post/${slug}`}>
        <a>
          <h1 itemProp="headline" className="post--title">
            {title}
          </h1>
        </a>
      </Link>
      <footer className="post--info">
        <span>
          <time itemProp="datePublished" dateTime={date}>
            {distanceInWordsToNow(date, { addSuffix: true })}
          </time>
        </span>
        <span itemProp="author">
          {author}
        </span>
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
              <a>
                {tag}
              </a>
            </Link>
            {index !== tags.length - 1 ? ', ' : ''}
          </span>
        )}
      </small>
    </footer>
  </Article>;
