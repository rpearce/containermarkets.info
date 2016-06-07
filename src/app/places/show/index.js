'use strict'

const { db } = require('../../../db')
const template = require('./template')

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  const type = ctx.accepts('html', 'json')

  db.places.find(slug).then(place => {
    if (!place) {
      ctx.status = 404
      if (type === 'json') {
        ctx.body = { error: 'not_found' }
      }
      return resolve()
    }
    ctx.body = type === 'json' ? place : template(place)
  }).then(resolve).catch(reject)
})
