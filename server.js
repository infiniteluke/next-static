const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // custom route for posts
  server.get('/post/:slug', (req, res) =>
    app.render(req, res, '/post', {
      post: req.params.slug,
    })
  );
  // custom route for tags
  server.get('/tag/:slug', (req, res) =>
    app.render(req, res, '/tag', {
      tag: req.params.slug,
    })
  );

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000'); // eslint-disable-line no-console
  });
});
