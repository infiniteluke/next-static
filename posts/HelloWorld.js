// @flow

module.exports = {
  title: 'My First Post',
  slug: 'hello-world',
  author: 'Luke H',
  date: new Date('2017-6-10 15:00 PDT').toString(),
  tags: ['blog', 'first post'],
  body: `
  ## Hello World
  This is an _example_ post that has some text that wraps. Simply use markdown to write your posts.
  
  ## How to add code to a post
  Make sure to escape the backticks when writing code in you posts.
  
  Here's some code:
  \`\`\`jsx
  const a = <Post>{props.dope}</Post>;
  \`\`\`
  
  ## GFM Supported
  Anything that works in Github, works here:
  
  | First Header  | Second Header |
  | ------------- | ------------- |
  | Content Cell  | Content Cell  |
  | Content Cell  | Content Cell  |
  `,
};
