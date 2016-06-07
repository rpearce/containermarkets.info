'use strict'

const { db } = require('./index')

const setup = (table) => new Promise((resolve, reject) => {
  table
    .drop()
    .then(table.create)
    .then(() => init(table))
    .then(resolve)
    .catch(reject)
})

const init = (table) => new Promise((resolve, reject) => {
  if (process.env.NODE_ENV === 'test' || !table.hasOwnProperty('init')) return resolve()
  table.init().then(resolve).catch(reject)
})

setup(db.admins)
  .then(() => setup(db.auths))
  .then(() => setup(db.places))
  .then(process.exit)
  .catch(error => console.error(error))
