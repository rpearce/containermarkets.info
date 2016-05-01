'use strict'

//const views = require('co-views')
//const templateEngine = require('hogan.js')

//const render = views('src/app/home/views', {
//  map: { html: 'hogan' }
//})

//module.exports = (ctx, next) => {
//  ctx.body = render('index')
//}

const template = require('../views/index')

module.exports = (ctx, next) => {
  ctx.body = template()
}
