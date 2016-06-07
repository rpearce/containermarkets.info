'use strict'

const template = require('./template')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  const token = ctx.request.query.t
  if (token) {
    // go find token in DB
    // if token is good
    //   login user
    //   redirect to root
    ctx.redirect('/', 302)
  } else {
    ctx.body = template({ csrfToken: ctx.state._csrf })
  }
  resolve()
})
