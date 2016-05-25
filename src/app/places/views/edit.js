'use strict'

const layout = require('../../_layouts')
const form = require('./_form')

module.exports = ({ place, csrfToken }) => {
  const title = 'Edit Place'
  const formData = { action: `/${place.slug}`, place, csrfToken }
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
    </div<
  </section>
  `
