'use strict'

const Koa = require('koa')
const logger = require('koa-logger')
const compress = require('koa-compress')
const staticAssets = require('koa-static')
//const bodyParser = require('koa-body')

const config = require('../config')
const db = require('../db')
const homeRouter = require('../app/home/routes')
const placesRouter = require('../app/places/routes')

const app = new Koa()

// Logger
if (config.NODE_ENV !== 'test') {
  app.use(logger());
}

// Database
app.use((ctx, next) => {
  ctx.db = db
  return next()
})

// Assets
app.use(compress())
app.use(staticAssets('src/public'))

// Parsing Request Bodies
//app.use(bodyParser())

// Protect routes behind auth rules
// and give 404 if not auth'd.
// Should have this somewhere else.
// app.use()

// Home Routes
app.use(homeRouter.routes())
app.use(homeRouter.allowedMethods())

// Places Routes
app.use(placesRouter.routes())
app.use(placesRouter.allowedMethods())

if (require.main === module) {
  module.exports = app;
} else {
  app.listen(config.port, () => console.log(`listening on port ${config.port}`))
}
