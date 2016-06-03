/*
 * Custom ORM for places
 */

'use strict'

const { places: sql } = require('../sql')

module.exports = (db) => {
  return {
    // Creates places table
    create: () => db.none(sql.create),

    // Drops places table
    drop: () => db.none(sql.drop),

    init: () =>
      db.result(sql.init)
        .then(result => console.log(`Inserted ${result.rowCount} places`))
        .catch(err => console.log('ERROR: ,', error.message || error)),

    // Removes all records from places table
    empty: () => db.none(sql.empty),

    // Add new record and return slug
    add: values =>
      db.one(sql.add, values)
        .then(data => data.slug)
        .catch(err => console.log('ERROR: ,', error.message || error)),

    // Deletes a place by slug
    remove: slug =>
      db.result(sql.remove, slug)
        .then(result => result.rowCount)
        .catch(err => console.log('ERROR: ,', error.message || error)),

    // Finds by slug
    find: slug =>
      db.oneOrNone(sql.find, slug)
        .catch(err => console.log('ERROR: ,', error.message || error)),

    all: () =>
      db.any('SELECT * FROM places')
        .catch(err => console.log('ERROR: ,', error.message || error)),
  }
}
