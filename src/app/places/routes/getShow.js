'use strict'

const db = require('../../../db')()
const template = require('../views/show')

module.exports = (ctx, next) => new Promise((resolve, reject) => {
  db.places.findOne({ slug: ctx.params.slug }, (err, place) => {
    if (err) return reject(err)
    if (!place) {
      ctx.status = 404;
      return resolve()
    }
    ctx.body = template(place)
    resolve()
  })
})
