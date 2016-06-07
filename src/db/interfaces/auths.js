/*
 * Interface for auths
 */

'use strict'

const { auths: sql } = require('../sql')

module.exports = (db) => {
  return {
    // Add new record
    add: admin_id => db.one(sql.add, admin_id),

    // Create table
    create: () => db.none(sql.create),

    // Drop table
    drop: () => db.none(sql.drop),

    // Find by admin_id
    find: admin_id => db.oneOrNone(sql.find, admin_id),

    // Deletes by admin_id
    remove: author_id => db.result(sql.remove, author_id),
  }
}
