'use strict'

const dbConnDev  = 'postgres://localhost:5432/containermarkets'
const dbConnTest = 'postgres://localhost:5432/containermarkets_test'

module.exports = {
  connectionString: process.env.DATABASE_URL || process.env.NODE_ENV === 'test' ? dbConnTest : dbConnDev
}
