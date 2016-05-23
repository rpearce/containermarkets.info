const r = require('./index')
const { dbName } = require('./config')

const createPlace = () => new Promise((resolve, reject) => {
  const place = {
    slug: 'dekalb-market-brooklyn',
    name: 'Dekalb Market',
    created_at: new Date(),
    updated_at: new Date()
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
