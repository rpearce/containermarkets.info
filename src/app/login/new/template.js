'use strict'

const layout = require('../../_layouts')
const form = require('../_shared/_form')

module.exports = ({ csrfToken, errors, place }) => {
  const title = 'Admin Login'
  const formData = { action: '/login', csrfToken, errors }
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
