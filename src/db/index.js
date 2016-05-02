'use strict'

const massive = require('massive')
const connectionString = require('../config').db.connectionString

module.exports = () =>
  massive.connectSync({
    connectionString,
    scripts: 'src/db/sql'
  })
