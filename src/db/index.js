'use strict'

const massive = require('massive')
const connectionString = require('./config').connectionString

module.exports = () =>
  massive.connectSync({
    connectionString,
    scripts: 'src/db/sql'
  })
