'use strict'

const { dbName } = require('../../../db/config')
const r = require('../../../db')
const template = require('../views/edit')

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  r.db(dbName).table('places').filter({ slug }).run()
    .then((res) => {
      const place = res[0]

      if (!place) {
        return resolve()
      }

      ctx.body = template({ place, csrfToken: ctx.state._csrf })
    })
    .then(resolve)
    .catch(reject)
})
