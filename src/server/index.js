'use strict'

const Koa = require('koa')
const logger = require('koa-logger')
const compress = require('koa-compress')
const staticAssets = require('koa-static')
//const bodyParser = require('koa-body')

const config = require('../config')
const homeRouter = require('../app/home/routes')

const app = new Koa()

// Logger
if (config.NODE_ENV !== 'test') {
  app.use(logger());
}

// Assets
app.use(compress())
app.use(staticAssets('src/public'))

// Parsing Request Bodies
//app.use(bodyParser())

// Protect routes behind auth rules
// and give 404 if not auth'd
// app.use()

// Routes
app.use(homeRouter.routes())
app.use(homeRouter.allowedMethods())

if (require.main === module) {
  module.exports = app;
} else {
  app.listen(config.port, () => console.log(`listening on port ${config.port}`))
}
