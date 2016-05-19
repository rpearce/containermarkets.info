'use strict'

const layout = require('../../../layouts')

module.exports = (places) => {
  const title = 'Container Markets Information'
  const body = buildBody(places)
  return layout({ title, body })
}

const buildBody = (places) =>
  `<header class="hero section">
    <div class="l--constrained">
      <h1>Container Markets Information</h1>
      <h2>Your guide to container markets around the world</h2>
    </div>
  </header>
  <section class="section">
    <div class="l--constrained">
      <h3>What are container markets?</h3>
      <p>Container markets, also known as container malls, are indoor/outdoor markets made predominantly from repurposed shipping containers. They typically house food and drink vendors, artisanal craftspeople, independent retailers and even name brands.</p>
      <p>There are a number of container markets found all over the globe, and we will be listing, mapping and discovering them here.</p>
    </div>
  </section>
  <section class="places section">
    <div class="l--constrained">
      <h3>Container Markets</h3>
      ${buildPlaces(places)}
    </div>
  </section>`

const buildPlaces = (places) => {
  if (places.length > 0) {
    return `<ul class="places__list">${places.map(buildPlace).join('')}</ul>`
  }
}

const buildPlace = (place) => {
  return `<li>
    <a href="/${place.slug}">${place.name}</a>
  </li>`
}
