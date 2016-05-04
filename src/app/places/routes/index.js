'use strict'

const Router = require('koa-router')
const getIndex = require('./getIndex')
const getShow = require('./getShow')

const router = new Router()

router
  .get('/', getIndex)
  .get('/:slug', getShow)

module.exports = router
