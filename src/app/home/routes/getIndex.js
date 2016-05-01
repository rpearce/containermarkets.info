'use strict'

//const views = require('co-views')
//const templateEngine = require('hogan.js')

//const render = views('src/app/home/views', {
//  map: { html: 'hogan' }
//})

const template = require('../views/index')

module.exports = (ctx, next) => {
  ctx.body = template()
  return next()
}
