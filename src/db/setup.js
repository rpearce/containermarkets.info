'use strict'

const { dbName } = require('./config')
const r = require('./index')
const { places } = require('./seeds')

const dropDB = () => new Promise((resolve, reject) => {
  r.dbDrop(dbName).run()
    .then((res) => console.log('dropDB:', res))
    .then(resolve)
})

const createDB = () => new Promise((resolve, reject) => {
  r.dbCreate(dbName).run()
    .then((res) => console.log('createDB:', res))
    .then(resolve)
})

const createPlacesTable = () => new Promise((resolve, reject) => {
  r.db(dbName).tableCreate('places').run()
    .then((res) => console.log('createPlacesTable:', res))
    .then(resolve)
})

const insertPlaces = () => new Promise((resolve, reject) => {
  r.db(dbName).table('places').insert(places).run()
    .then((res) => console.log('insertPlaces:', res))
    .then(resolve)
})

const indexSlugOnPlaces = () => new Promise((resolve, reject) => {
  r.db(dbName).table('places').indexCreate('slug').run()
    .then((res) => console.log('indexSlugOnPlaces:', res))
    .then(resolve)
})

const actions = dropDB()
  .then(createDB)
  .then(createPlacesTable)
  .then(indexSlugOnPlaces)

if (process.env.NODE_ENV !== 'test') {
  actions
    .then(insertPlaces)
    .then(process.exit)
    .then(() => r.getPoolMaster().drain())
} else {
  actions.then(() => r.getPoolMaster().drain())
}
