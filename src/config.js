'use strict'

const dbConnDev  = 'postgres://localhost:5432/containermarkets'
const dbConnTest = 'postgres://localhost:5432/containermarkets_test'

module.exports = {
  db: {
    connectionString: process.env.DATABASE_URL || process.env.NODE_ENV === 'test' ? dbConnTest : dbConnDev
  },
  host: process.env.APP_HOST || 'localhost',
  port: process.env.APP_PORT || 3000,
  sessionKey: process.env.SESSION_KEY || 'secret session key'
}
