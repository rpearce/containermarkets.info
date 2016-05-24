'use strict'

const layout = require('../../_layouts')
const form = require('./_form')

module.exports = ({ place, csrfToken }) => {
  const title = 'Edit Place'
  const body = buildBody({ title, place, csrfToken })
  return layout({ title, body })
}

const buildBody = ({ title, place, csrfToken }) =>
  `
  <header class="hero section">
    <div class="l--constrained">
      <h1>${title}</h1>
    </div>
  </header>
  <section class="section">
    <div class="l--constrained">
      ${form({ action: '/${place.slug}', place })}
    </div<
  </section>
  `
