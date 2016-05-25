'use strict'

const { model } = require('../place')
const template = require('./template')

module.exports = (ctx, _) => new Promise((resolve, reject) => {
  ctx.body = template({ csrfToken: ctx.state._csrf, place: model })
  resolve()
})
