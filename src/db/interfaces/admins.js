/*
 * Interface for admins
 */

'use strict'

const { admins: sql } = require('../sql')

module.exports = (db) => {
  return {
    // Creates admins table
    create: () => db.none(sql.create),

    // Drops admins table
    drop: () => db.none(sql.drop),

    // Inserts default admins
    init: () => db.result(sql.init),

    // Finds by email, returning all columns
    find: email => db.oneOrNone(sql.find, email)
  }
}
