'use strict'

const { db } = require('./index')

const p = db.places

const init = (p) => new Promise((resolve, reject) => {
  if (process.env.NODE_ENV === 'test') return resolve()
  p.init().then(resolve)
})

p
  .drop()
  .then(p.create)
  .then(() => init(p))
  .then(process.exit)
  .catch(error => console.log(error))

