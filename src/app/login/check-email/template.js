'use strict'

const layout = require('../../_layouts')

module.exports = () => {
  const title = 'Check Email'
  const body = buildBody({ title })
  return layout({ title, body })
}

const buildBody = ({ title }) =>
  `
  <header class="hero section">
    <div class="l--constrained">
      <h1>${title}</h1>
    </div>
  </header>
  <section class="section">
    <div class="l--constrained">
      <p>We've emailed you a link for you to access your account. Please check your inbox.</p>
    </div>
  </section>
  `
