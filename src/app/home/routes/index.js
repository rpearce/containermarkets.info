'use strict'

const Router = require('koa-router')
const getIndex = require('./getIndex')
const getAbout = require('./getAbout')

const router = new Router()

router
  .get('/', getIndex)
  .get('/about', getAbout)

module.exports = router
