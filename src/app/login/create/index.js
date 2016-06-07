'use strict'

const { db } = require('../../../db')
const template = require('../new/template')
const { reauthorize } = require('../../admin/admin')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  const email = ctx.request.body.admin.email.trim()

  db.admins.find(email).then(admin => {
    if (!admin) {
      ctx.status = 422
      ctx.body = template({
        csrfToken: ctx.state._csrf,
        errors: ['Email not found']
      })
      return resolve()
    }

    reauthorize(admin)
      .then(() => {
        ctx.redirect('/login/check-email', 302)
        resolve()
      }).catch(reject)
  }).catch(reject)
})
