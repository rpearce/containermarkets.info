'use strict'

const layout = require('../../_layouts/admin')
const form = require('../_shared/_form')

module.exports = ({ csrfToken, errors, place }) => {
  const title = 'New Place'
  const formData = { action: '/', csrfToken, errors, place }
  const body = buildBody({ title, formData })
  return layout({ title, body })
}

const buildBody = ({ title, formData }) =>
  `
  <header class="hero section">
    <div class="l--constrained">
      <h1>${title}</h1>
    </div>
  </header>
  <section class="section">
    <div class="l--constrained">
      ${form(formData)}
    </div>
  </section>
  `
