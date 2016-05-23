'use strict'

const { dbName } = require('../../../db/config')
const r = require('../../../db')
const template = require('../views/edit')

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  r.db(dbName).table('places').filter({ slug }).run()
    .then((res) => {
      const place = res[0]

      if (!place) {
        ctx.status = 404;
        return resolve()
      }

      ctx.body = template(place)
    })
    .then(resolve)
    .catch(reject)
})
