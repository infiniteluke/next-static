const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const posts = require('./posts');

const spaceReplace = string => string.replace(/\s+/g, '-').toLowerCase();

const getParams = (page, value) => ({
  page: `/${page}`,
  query: { [page]: spaceReplace(value) },
});

const buildPagePaths = (
  blogPosts,
  defaultRoutes = {
    '/': { page: '/' },
  }
) =>
  blogPosts.reduce((routes, post) => {
    const postRoutes = Object.assign(routes, {
      [`post/${post.slug}`]: getParams('post', post.slug),
    });
    const tags = post.tags || [];
    return tags.reduce(
      (acc, tag) =>
        Object.assign(
          { [`tag/${spaceReplace(tag)}`]: getParams('tag', tag) },
          acc
        ),
      postRoutes
    );
  }, defaultRoutes);

exports.exportPathMap = () => buildPagePaths(posts);

exports.webpack = config => {
  config.plugins.push(
    new SWPrecacheWebpackPlugin({
      verbose: true,
      staticFileGlobsIgnorePatterns: [/\.next\//],
      runtimeCaching: [
        {
          handler: 'networkFirst',
          urlPattern: /^https?.*/,
        },
      ],
    })
  );
};
