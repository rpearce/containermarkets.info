const r = require('./index')
const { dbName } = require('./config')

const createPlace = () => new Promise((resolve, reject) => {
  const place = {
    slug: 'dekalb-market-brooklyn',
    name: 'Dekalb Market',
    address: '123 Main St',
    lat: '0.12345',
    long: '0.12345',
    description: 'A Place',
    content: '### This is some content',
    created_at: '2016-05-25T13:25:24.688Z',
    updated_at: '2016-05-25T13:25:24.688Z'
  }

  r.db(dbName).table('places').insert(place).run().then((res) => {
    const id = res.generated_keys[0]
    r.db(dbName).table('places').get(id).run().then(resolve)
  })
})

const destroyPlaces = () => new Promise((resolve, reject) => {
  r.db(dbName).table('places').delete().run((err, res) => {
    if (err) return reject(err)
    resolve()
  })
})

module.exports = { createPlace, destroyPlaces }
