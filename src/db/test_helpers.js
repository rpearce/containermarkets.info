const r = require('./index')
const { db } = require('./index')

const createPlace = () => {
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

  return db.places.add(place)
}
const destroyPlaces = () => db.places.empty()

const createAdmin = (email) => db.none('INSERT INTO admins (email) VALUES ($1);', email)
const destroyAdmins = () => db.none('TRUNCATE TABLE admins CASCADE;')

module.exports = {
  admins: {
    create: createAdmin,
    destroy: destroyAdmins
  },
  places: {
    create: createPlace,
    destroy: destroyPlaces
  }
}
