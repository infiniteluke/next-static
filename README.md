[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Next Static Blog
__✨ Start static then go server rendered when you need to ✨__

A simple static blog powered by [next.js](https://github.com/zeit/next.js).

## Why
* I found other SSG (Static Site Generator) to be too much for what I need
* I wanted to be able to transition to a dynamic site easily if need be and next.js is a great existing SSR (Server Side Render) framework.

### Getting Started
* Clone this repo
* `yarn`
* Edit `config/index.js` to your liking. 
  * Get the best experience with config by adding a plugin to your text editor that will surface flow errors. This will ensure you're providing the expected types for your config values.
* `yarn dev`
* Write! 📝

### Writting
* Create a `.md` file in `posts`.
* Add front matter separated by `---` and the body of the post in markdown below:
```yaml
---
title: Title
slug: slug
author: Your Name
date: 2017-6-10 15:00 PDT
tags:
  - tags
  - go here
---
## Post
Use markdown to _write_ your post
Here's some code:
\`\`\`javascript
const a = 'thing';
\`\`\`
```
* While writing, run `yarn dev` to see your post live reload when saved.
* Re-run `yarn export` to build your new site.
