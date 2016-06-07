'use strict'

const jwt = require('jsonwebtoken')
const { db } = require('../../../db')
const template = require('./template')
const { jwtSecret } = require('../../../server/config')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  const token = ctx.request.query.t
  if (token) {
    db.auths.find(token).then(auth => {
      // login admin
      const token = jwt.sign(profile, jwtSecret);
      ctx.redirect('/', 302)
    }).catch(reject)
  } else {
    ctx.body = template({ csrfToken: ctx.state._csrf })
  }
  resolve()
})
