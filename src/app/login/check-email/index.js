'use strict'

const template = require('./template')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  ctx.body = template()
  resolve()
})
