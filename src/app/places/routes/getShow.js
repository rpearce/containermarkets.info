'use strict'

const template = require('../views/show')

const places = [
  { name: 'DeKalb Market', slug: 'dekalb-market' },
  { name: 'BoxPark', slug: 'boxpark' },
  { name: 'ReStart Container Mall', slug: 'restart-container-mall' }
]

module.exports = (ctx, next) => {
  const place = places.find(p => p.slug === ctx.params.slug)
  ctx.body = template(place)
  return next()
}
