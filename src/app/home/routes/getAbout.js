'use strict'

const template = require('../views/about')

module.exports = (ctx, next) => {
  ctx.body = template()
}
