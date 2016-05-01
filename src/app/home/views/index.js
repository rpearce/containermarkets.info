'use strict'

const layout = require('../../layouts')

module.exports = () => {
  const title = 'Home'
  const body = 'This is the home page'
  return layout({ title, body })
}
