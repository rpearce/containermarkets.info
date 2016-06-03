'use strict'

const pgpLib = require('pg-promise')
const places = require('./orms/places')

// pg-promise initialization options
const options = {
  extend: db => {
    db.places = places(db)
  }
}

// initialize PGP lib
const pgp = pgpLib(options)

// Database connection params
const connection = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || '5432',
  database: process.env.NODE_ENV === 'test' ? 'containermarkets_test' : 'containermarkets',
  user: '',
  password: ''
}

// create DB instance
const db = pgp(connection)

module.exports = {
  pgp,
  db
}
