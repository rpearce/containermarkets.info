const { host, port, dbName } = require('./config')

module.exports = require('rethinkdbdash')({ host, port })
