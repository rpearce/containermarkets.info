'use strict'

const template = require('../../views/new')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  ctx.body = template(ctx.state._csrf)
  resolve()
})
