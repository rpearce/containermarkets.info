'use strict'

module.exports = ({ title, body }) =>
  `<html lang="en">
    <head>
      <title>${title}</title>
      <link href="/app.css" rel="stylesheet">
    </head>
    <body>${body}</body>
  </html>`
