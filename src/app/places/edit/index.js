'use strict'

const { db } = require('../../../db')
const template = require('./template')

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  db.places.find(slug)
    .then(place => {
      if (!place) return resolve()
      ctx.body = template({ csrfToken: ctx.state._csrf, place })
    })
    .then(resolve)
    .catch(reject)
})
