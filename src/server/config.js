'use strict'

module.exports = {
  host: process.env.APP_HOST || 'localhost',
  port: process.env.APP_PORT || 3000,
  sessionKey: process.env.SESSION_KEY || 'secret session key'
}
