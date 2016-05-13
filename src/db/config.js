'use strict'

module.exports = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || '28015',
  dbName: process.env.NODE_ENV === 'test' ? 'containermarkets_test' : 'containermarkets'
}
