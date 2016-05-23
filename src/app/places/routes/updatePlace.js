'use strict'

const { dbName } = require('../../../db/config')
const r = require('../../../db')
const { cleanProps } = require('../place')

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  r.db(dbName).table('places').filter({ slug }).run()
    .then((res) => {
      const place = res[0]
      if (!place) return resolve()

      const params = cleanProps(ctx.request.body.place)
      r.db(dbName).table('places').get(place.id).update(params).run()
        .then((res) => {
          ctx.redirect(`/${slug}`, 302)
          resolve()
        })
        .error(reject)
    })
})
