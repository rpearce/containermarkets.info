'use strict'

const { host, port, dbName } = require('./config')
const r = require('rethinkdbdash')({ host, port })
const { places } = require('./seeds')

const dropDB = (conn) => new Promise((resolve, reject) => {
  r.dbDrop(dbName).run((err, res) => {
    console.log('dropDB:', res)
    resolve()
  })
})

const createDB = () => new Promise((resolve, reject) => {
  r.dbCreate(dbName).run((err, res) => {
    if (err) return reject(err)
    console.log('createDB:', res)
    resolve()
  })
})

const createPlacesTable = () => new Promise((resolve, reject) => {
  r.db(dbName).tableCreate('places').run((err, res) => {
    if (err) return reject(err)
    console.log('createPlacesTable:', res)
    resolve()
  })
})

const insertPlaces = () => new Promise((resolve, reject) => {
  r.db(dbName).table('places').insert(places).run((err, res) => {
    if (err) return reject(err)
    console.log('insertPlaces:', res)
    resolve()
  })
})

const indexSlugOnPlaces = () => new Promise((resolve, reject) => {
  r.db(dbName).table('places').indexCreate('slug').run((err, res) => {
    if (err) return reject(err)
    console.log('indexSlugOnPlaces:', res)
    resolve()
  })
})

const actions = dropDB()
  .then(createDB)
  .then(createPlacesTable)
  .then(indexSlugOnPlaces)

if (process.env.NODE_ENV !== 'test') {
  actions
    .then(insertPlaces)
    .then(process.exit)
} else {
  actions.then(process.exit)
}
