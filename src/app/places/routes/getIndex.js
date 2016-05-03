'use strict'

const db = require('../../../db')()

module.exports = (ctx, next) => new Promise((resolve, reject) => {
  db.places.find(null, (err, places) => {
    if (err) return reject(err)
    ctx.body = places
    resolve()
  })
})
