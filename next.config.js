const posts = require('./posts');

const getParams = (page, value) => {
  return { page: `/${page}`, query: { [page]: spaceReplace(value) } };
}

const spaceReplace = (string) => string.replace(/\s+/g, '-').toLowerCase();

const buildPagePaths = (
  blogPosts,
  defaultRoutes = {
    '/': { page: '/' },
  }
) => {
    return blogPosts.reduce((routes, post, index) => {
    const postRoutes = Object.assign(routes, { [`post/${post.slug}`]: getParams('post', post.slug) });
    const tags = post.tags || [];
    return tags
      .reduce((acc, tag, index) => Object.assign({ [`tag/${spaceReplace(tag)}`]: getParams('tag', tag) }, acc), postRoutes)
  }, defaultRoutes);
}

exports.exportPathMap = () => buildPagePaths(posts);
