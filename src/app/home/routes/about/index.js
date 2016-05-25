'use strict'

const template = require('../../views/about')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  ctx.body = template()
  resolve()
})
