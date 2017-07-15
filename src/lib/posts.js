import preval from 'preval.macro';

const getPostsCode = preval`
  const fs = require('fs');
  const code = fs.readFileSync('./getPosts.js', 'utf8');
  module.exports = code.toString();
`;

const posts = preval`${getPostsCode}`;

export default posts;
