'use strict'

module.exports = {
  appDomain: process.env.APP_HOST || 'localhost:3000',
  host: process.env.APP_HOST || 'localhost',
  jwtSecret: process.env.JWT_SECRET || 'jwt secret'
  port: process.env.APP_PORT || 3000,
  protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
  sessionKey: process.env.SESSION_KEY || 'secret session key'
}
