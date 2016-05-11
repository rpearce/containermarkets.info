'use strict'

const template = require('../views/about')

module.exports = (ctx, next) => new Promise((resolve, reject) => {
  ctx.body = template()
  resolve()
})
