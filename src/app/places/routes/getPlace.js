'use strict'

const { host, port, dbName } = require('../../../db/config')
const r = require('rethinkdbdash')({ host, port })
const template = require('../views/show')

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  const type = ctx.accepts('html', 'json')

  r.db(dbName).table('places').filter({ slug }).run()
    .then((res) => {
      const place = res[0]

      if (!place) {
        ctx.status = 404;
        if (type === 'json') {
          ctx.body = { error: 'not_found' }
        }
        return resolve()
      }
      ctx.body = type === 'json' ? place : template(place)
    })
    .then(resolve)
    .catch(reject)
})
