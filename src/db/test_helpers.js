const r = require('./index')
const { db } = require('./index')

const createPlace = () => new Promise((resolve, reject) => {
  const place = {
    slug: 'dekalb-market-brooklyn',
    name: 'Dekalb Market',
    address: '123 Main St',
    latitude: '0.12345',
    longitude: '0.12345',
    description: 'A Place',
    content: '### This is some content',
    created_at: '2016-05-25T13:25:24.688Z',
    updated_at: '2016-05-25T13:25:24.688Z'
  }

  db.places.add(place)
    .then(resolve)
    .catch(reject)
})

const destroyPlaces = () => new Promise((resolve, reject) => {
  db.places.empty()
    .then(resolve)
    .catch(reject)
})

module.exports = { createPlace, destroyPlaces }
