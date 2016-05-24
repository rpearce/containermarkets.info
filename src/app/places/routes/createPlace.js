'use strict'

const { dbName } = require('../../../db/config')
const r = require('../../../db')
const { cleanProps, isValid } = require('../place')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  const params = cleanProps(ctx.request.body.place)
  if (isValid(params)) {
    r.db(dbName).table('places').insert(params).run()
      .then((res) => {
        const id = res.generated_keys[0]
        r.db(dbName).table('places').get(id).pluck('slug').run()
          .then(({ slug }) => {
            ctx.redirect(`/${slug}`, 302)
            resolve()
          })
          .error(reject)
      })
      .error(reject)
  } else {
    ctx.status = 422
    reject()
  }
})
