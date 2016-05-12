'use strict'

const layout = require('../../../layouts')

module.exports = (places) => {
  const title = 'Container Markets Information'
  const body = buildBody(places)
  return layout({ title, body })
}

const buildBody = (places) =>
  `<header>
    <h1>Container Markets Information</h1>
  </header>
  <section>
    ${buildPlaces(places)}
  </section>`

const buildPlaces = (places) => {
  if (places.length > 0) {
    return `<ul>${places.map(buildPlace).join('')}</ul>`
  }
}

const buildPlace = (place) => {
  return `<li>
    <a href="/${place.slug}">${place.name}</a>
  </li>`
}
