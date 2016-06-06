'use strict'

const marked = require('marked')
const layout = require('../../_layouts')

module.exports = (place) => {
  const title = place.name
  const description = place.description
  const content = marked(place.content)
  const body = buildBody({ title, description, content })
  const type = 'article'
  return layout({ title, description, type, body })
}

const buildBody = ({ title, description, content }) =>
  `<article>
    <header class="hero section">
      <div class="l--constrained">
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </header>
    <section class="section">
      <div class="l--constrained">
        ${content}
      </div<
    </section>
  </article>`
