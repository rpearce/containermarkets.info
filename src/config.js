'use strict'

module.exports = {
  db: {
    connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/containermarkets'
  },
  host: process.env.APP_HOST || 'localhost',
  port: process.env.APP_PORT || 3000,
  sessionKey: process.env.SESSION_KEY || 'secret session key'
}
