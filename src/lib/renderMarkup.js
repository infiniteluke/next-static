import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-jsx';

const renderer = new marked.Renderer();
const langPrefix = 'language-';

// prettier-ignore
renderer.code = (code, language) => `<pre class="${langPrefix}${language}"><code class="${langPrefix}${language}">${Prism.highlight(code, Prism.languages[language])}</code></pre>`;
renderer.table = (header, body) =>
  `<div class="table-wrapper"><table>${header}${body}</table></div>`;

marked.setOptions({
  gfm: true,
  breaks: true,
  langPrefix,
  renderer,
});

export default markdown => marked(markdown);
