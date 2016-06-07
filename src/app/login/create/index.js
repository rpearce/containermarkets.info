'use strict'

const { db } = require('../../../db')
const template = require('../new/template')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  const email = cleanProps(ctx.request.body.admin.email)

  // find email in admins table
  // if admin is found
  //   send admin email for login
  //   redirect to page saying to check your email plx
  // else
  //   invalid



  if (isValid(params)) {
    db.places.add(params).then(slug => {
      ctx.redirect(`/${slug}`, 302)
      resolve()
    }).catch(reject)
  } else {
    ctx.status = 422
    ctx.body = template({
      csrfToken: ctx.state._csrf,
      errors: ['Email not found']
    })
    resolve()
  }
})
