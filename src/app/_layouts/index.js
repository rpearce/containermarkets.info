'use strict'

//<meta property="og:image" content="${imageURI}">
//<link href="http://fonts.googleapis.com/css?family=Lato:400" rel="stylesheet" type="text/css">

module.exports = ({ title, body, description, type = 'website', uri = 'http://containermarkets.info' }) =>
  `<html lang="en">
    <head>
      <title>${title}</title>

      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
      <meta name="description" content="${description}">

      <meta property="og:site_name" content="containermarkets.info">
      <meta property="og:title" content="${title}">
      <meta property="og:url" content="${uri}">
      <meta property="og:description" content="${description}">
      <meta property="og:type" content="${type}">

      <link rel="canonical" href="${uri}">
      <link href="/app.css" rel="stylesheet">
    </head>
    <body>
      ${body}
      <script src="/app.js" async></script>
    </body>
  </html>`
