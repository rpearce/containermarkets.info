'use strict'

const { db } = require('../../../db')
const template = require('./template')

module.exports = (ctx, next) => new Promise((resolve, reject) => {
  const type = ctx.accepts('html', 'json')

  db.places.all()
    .then(places => ctx.body = type === 'json' ? places : template(places))
    .then(resolve)
    .catch(reject)
})
