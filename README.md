[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Next Static Blog
__✨ Start static then go server rendered when you need to ✨__

A simple static blog powered by [next.js](https://github.com/zeit/next.js).

## Why
* I found other SSG (Static Site Generator) to be too much for what I need
* I wanted to be able to transition to a dynamic site easily if need be and next.js is a great existing SSR (Server Side Render) framework.

## Getting Started
* Fork this repo
* `yarn`
* Edit `config/index.js` to your liking. 
  * Get the best experience with config by adding a plugin to your text editor that will surface flow errors. This will ensure you're providing the expected types for your config values.
* `yarn dev`
* Write! 📝

## Writting
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

## Default Build
<img width="941" alt="screen shot 2017-08-25 at 2 26 18 pm" src="https://user-images.githubusercontent.com/1127238/29733509-4d09ed38-89a2-11e7-97d4-42dd97a7df35.png">

## Updating Next Static
Currently Next Static is not packaged an distributed on NPM. In order to receive updates you will need to do something like this:
* Inside the your fork `git remote add upstream git@github.com:infiniteluke/next-static.git`
* `git merge upstream master`
* To the extent that you hack Next Static, you will need to resolve merge conflicts.
* I'm open to ideas on how to best package this and make the update process as simple as bumping versions.
