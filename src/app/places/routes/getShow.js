'use strict'

const db = require('../../../db')()
const template = require('../views/show')
const isJSONRequest = require('../../../server/utils').isJSONRequest

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  db.places.findOne({ slug: slug }, (err, place) => {
    const jsonRequest = isJSONRequest(ctx)

    if (err) return reject(err)
    if (!place) {
      ctx.status = 404;
      if (jsonRequest) {
        ctx.body = { error: 'not_found' }
      }
      return resolve()
    }
    ctx.body = jsonRequest ? place : template(place)
    resolve()
  })
})
