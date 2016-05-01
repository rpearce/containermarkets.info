'use strict'

const layout = require('../../../layouts')

module.exports = ({ name, slug }) => {
  const title = name
  const body = `This is the page for ${name}`
  return layout({ title, body })
}
