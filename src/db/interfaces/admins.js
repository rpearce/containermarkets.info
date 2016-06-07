/*
 * Interface for admins
 */

'use strict'

const { admins: sql } = require('../sql')

module.exports = (db) => {
  return {
    // Create table
    create: () => db.none(sql.create),

    // Drop table
    drop: () => db.none(sql.drop),

    // Insert default records
    init: () => db.result(sql.init),

    // Finds by email
    find: email => db.oneOrNone(sql.find, email)
  }
}
