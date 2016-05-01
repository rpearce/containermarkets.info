'use strict'

const layout = require('../../layouts')

module.exports = () => {
  const title = 'About'
  const body = 'This is the about page'
  return layout({ title, body })
}
