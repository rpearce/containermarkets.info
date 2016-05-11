'use strict'

const Koa = require('koa')
const logger = require('koa-logger')
const compress = require('koa-compress')
const staticAssets = require('koa-static')
const bodyParser = require('koa-body')
const convert = require('koa-convert')
const session = require('koa-session')
const csrf = require('koa-csrf')
const route = require('koa-route')

const config = require('../config')
const db = require('../db')
const routes = require('./routes')

const app = module.exports = new Koa()

// Session MGMT.
// (use convert until it comes with promises)
app.use(convert(session(app)))

// Logger
if (process.env.NODE_ENV !== 'test') {
  app.use(logger())
}

// Database
app.use((ctx, next) => {
  ctx.db = db
  return next()
})

// Assets
app.use(staticAssets('src/public'))

// Parse Requests
app.use(bodyParser())

// CSRF
app.keys = [config.sessionKey]
csrf(app)
app.use((ctx, next) => {
  if (ctx.method === 'GET' ||
     ctx.method === 'HEAD' ||
     ctx.method === 'OPTIONS') {
    return next()
  }

  ctx.assertCsrf()
  return next()
})

// Protect routes behind auth rules
// and give 404 if not auth'd.
// Should have this somewhere else.
// app.use()

// Routes
app.use(route.get('/', routes.getPlaces))
app.use(route.get('/about', routes.getAbout))
app.use(route.get('/:slug', routes.getPlace))

// Compress content delivery (gzip)
app.use(compress())

app.listen(config.port, () => console.log(`listening on port ${config.port}`))
