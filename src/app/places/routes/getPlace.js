'use strict'

const db = require('../../../db')()
const template = require('../views/show')

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  const type = ctx.accepts('html', 'json')

  db.places.findOne({ slug }, (err, place) => {
    if (err) return reject(err)
    if (!place) {
      ctx.status = 404;
      if (type === 'json') {
        ctx.body = { error: 'not_found' }
      }
      return resolve()
    }
    ctx.body = type === 'json' ? place : template(place)
    resolve()
  })
})
