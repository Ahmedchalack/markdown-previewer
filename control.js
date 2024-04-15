const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

const template = `# Welcome to my Markdown Previewer!
## This is a sub-heading
Some text, a link to [freeCodeCamp](https://www.freecodecamp.org), inline code \`<div></div>\`, a code block:

\`\`\`
function greet() {
    return 'Hello, World!';
}
\`\`\`

- Bullet list item 1
- Bullet list item 2

> Blockquote

![Markdown Previewer](https://via.placeholder.com/150)

**Bold text** and _italic text_`;

editor.innerHTML = template;
preview.innerHTML = marked(template);

// marked.setOptions({
//     renderer: new marked.Renderer(),
//     highlight: function(code, language){
//         const hljs = require('highlight.js');
//         const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
//         return hljs.highligh(validLanguage, code).value;
//     },
//     pedantic:false,
//     gfm:true,
//     breaks: false,
//     sanitize: true,
//     smartLists: true,
//     smartypants: false,
//     xhtml: false
// });



editor.addEventListener('keyup', event=>{
    preview.innerHTML = marked(event.target.value);

} )