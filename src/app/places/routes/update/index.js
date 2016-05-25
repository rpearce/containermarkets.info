'use strict'

const { dbName } = require('../../../../db/config')
const r = require('../../../../db')
const { cleanProps, isValid } = require('../../place')

module.exports = (ctx, slug) => new Promise((resolve, reject) => {
  const params = cleanProps(ctx.request.body.place)
  if (isValid(params)) {
    r.db(dbName).table('places').filter({ slug }).run()
      .then((res) => {
        const place = res[0]
        if (!place) return resolve()

        r.db(dbName).table('places').get(place.id).update(params).run()
          .then((res) => {
            ctx.redirect(`/${slug}`, 302)
            resolve()
          })
          .error(reject)
      })
      .error(reject)
  } else {
    //const template = require('../views/edit')
    //ctx.status = 422
    //ctx.body = template({
    //  csrfToken: ctx.state._csrf,
    //  errors: ['You fucked up', 'Another error'],
    //  place: params
    //})
    //resolve()
  }
})
