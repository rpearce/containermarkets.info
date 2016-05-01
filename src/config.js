'use strict'

module.exports = {
  port: process.env.APP_PORT || 3000,
  host: process.env.APP_HOST || 'localhost',
  db: {
    connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/containermarkets'
  }
}
