'use strict'

const Router = require('koa-router')
const getAbout = require('./getAbout')

const router = new Router()

router
  .get('/about', getAbout)

module.exports = router
