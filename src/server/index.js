'use strict'

const Koa = require('koa')
const compress = require('koa-compress')
const convert = require('koa-convert')
const bodyParser = require('koa-body')
const favicon = require('koa-favicon')
const logger = require('koa-logger')
const lusca = require('koa-lusca')
const route = require('koa-route')
const serve = require('koa-static')
const session = require('koa-session')

const config = require('./config')
const routes = require('./routes')

const app = module.exports = new Koa()

app.keys = [config.sessionKey]

// Session MGMT.
// (use convert until it comes with promises)
app.use(convert(session(app)))

// Favicon
app.use(favicon(__dirname + 'src/favicon.ico'));

// Logger
if (process.env.NODE_ENV !== 'test') {
  app.use(logger())
}

// Compress content delivery (gzip)
app.use(compress())

// Assets
app.use(serve('src/public'))

// Parse Requests
app.use(bodyParser())

// CSRF
app.use(lusca({
  csrf: {
    secret: config.sessionKey
  },
  xframe: 'SAMEORIGIN',
  csp: {
    'default-src': "'self'",
    'img-src': '*'
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true
  },
  xssProtection: true
}))

// Protect routes behind auth rules
// and give 404 if not auth'd.
// Should have this somewhere else.
// app.use()

// Routes
app.use(route.get('/', routes.getPlaces))
app.use(route.get('/about', routes.getAbout))
app.use(route.get('/:slug', routes.getPlace))
app.use(route.get('/:slug/edit', routes.getPlaceEdit))
app.use(route.post('/:slug', routes.updatePlace))

app.listen(config.port, () => console.log(`listening on port ${config.port}`))
