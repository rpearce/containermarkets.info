/*
 * Interface for places
 */

'use strict'

const { places: sql } = require('../sql')

module.exports = (db) => {
  return {
    // Create table
    create: () => db.none(sql.create),

    // Drop table
    drop: () => db.none(sql.drop),

    // Insert default records
    init: () => db.result(sql.init),

    // Remove all records
    empty: () => db.none(sql.empty),

    // Add new record and return slug
    add: values => db.one(sql.add, values).then(data => data.slug),

    // Find all records
    all: () => db.any(sql.all),

    // Find by slug
    find: slug => db.oneOrNone(sql.find, slug),

    // Delete by slug
    remove: slug => db.result(sql.remove, slug),

    // Update by old slug
    update: (oldSlug, values) => db.one(sql.update, Object.assign(values, { oldSlug }))
  }
}
