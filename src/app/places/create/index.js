'use strict'

const { db } = require('../../../db')
const { cleanProps, isValid } = require('../place')
const template = require('../new/template')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  const params = cleanProps(ctx.request.body.place)
  if (isValid(params)) {
    db.places.add(params).then(slug => {
      ctx.redirect(`/${slug}`, 302)
      resolve()
    }).catch(reject)
  } else {
    ctx.status = 422
    ctx.body = template({
      csrfToken: ctx.state._csrf,
      errors: ['Please fill out all the fields'],
      place: params
    })
    resolve()
  }
})
