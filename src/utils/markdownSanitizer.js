const marked = require('marked');
const sanitizedHtml = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdown(markdownContent){

  // 1. Convert markdown to HTML
  const convertedHTML = marked.parse(markdownContent);
  //console.log(convertedHTML);

  //2. Sanitize HTML
  const sanitizedHTML = sanitizedHtml(convertedHTML,{
    allowedTags:sanitizedHtml.defaults.allowedTags.concat(['img'])
  })
  //console.log(sanitizedHTML)

  //return sanitizedHTML;

  //3. give it back in md; so updates are easier
  const turndownService = new TurndownService();
  const sanitizedMarkdown = turndownService.turndown(sanitizedHTML)
  //console.log(sanitizedMarkdown)

  return sanitizedMarkdown;
}
module.exports = sanitizeMarkdown;