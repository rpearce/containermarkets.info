'use strict'

const db = require('../../../db')()
const template = require('../views/index')

module.exports = (ctx, next) => new Promise((resolve, reject) => {
  const type = ctx.accepts('html', 'json')

  db.places.find(null, (err, places) => {
    if (err) return reject(err)
    ctx.body = type === 'json' ? places : template(places)
    resolve()
  })
})
