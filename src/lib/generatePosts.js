#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs');
const posts = require('./getPosts');

fs.writeFile(
  `posts/index.js`,
  `export default ${JSON.stringify(posts)}`,
  err => {
    if (err) {
      console.error(err);
    }
    console.log('Posts generated successfully.');
  }
);
