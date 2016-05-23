'use strict'

const { dbName } = require('../../../db/config')
const r = require('../../../db')
const template = require('../views/index')

module.exports = (ctx, next) => new Promise((resolve, reject) => {
  const type = ctx.accepts('html', 'json')

  r.db(dbName).table('places').orderBy('name').run()
    .then((places) => ctx.body = type === 'json' ? places : template(places))
    .then(resolve)
    .catch(reject)
})
