'use strict'

const places = [
  { name: 'DeKalb Market', slug: 'dekalb-market' },
  { name: 'BoxPark', slug: 'boxpark' },
  { name: 'ReStart Container Mall', slug: 'restart-container-mall' }
]

module.exports = (ctx, next) => {
  ctx.body = places
  return next()
}
