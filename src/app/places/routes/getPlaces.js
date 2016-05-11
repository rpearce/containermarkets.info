'use strict'

const db = require('../../../db')()
const template = require('../views/index')
const isJSONRequest = require('../../../server/utils').isJSONRequest

module.exports = (ctx, next) => new Promise((resolve, reject) => {
  db.places.find(null, (err, places) => {
    if (err) return reject(err)
    ctx.body = isJSONRequest(ctx) ? places : template(places)
    resolve()
  })
})
