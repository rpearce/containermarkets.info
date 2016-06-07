/*
 * Interface for places
 */

'use strict'

const { places: sql } = require('../sql')

module.exports = (db) => {
  return {
    // Creates places table
    create: () => db.none(sql.create),

    // Drops places table
    drop: () => db.none(sql.drop),

    init: () => db.result(sql.init),

    // Removes all records from places table
    empty: () => db.none(sql.empty),

    // Add new record and return slug
    add: values => db.one(sql.add, values).then(data => data.slug),

    // Find all records
    all: () => db.any(sql.all),

    // Finds by slug, returning all columns
    find: slug => db.oneOrNone(sql.find, slug),

    // Deletes a place by slug, returning rowCount
    remove: slug => db.result(sql.remove, slug).then(result => result.rowCount),

    // Updates a place, returning slug
    update: (oldSlug, values) => db.one(sql.update, Object.assign(values, { oldSlug }))
  }
}
