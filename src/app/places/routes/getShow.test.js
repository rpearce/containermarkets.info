const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())
const db = require('../../../db')()

describe('Places', () => {
  beforeEach((done) => destroyPlaces().then(done))

  describe('When Found', () => {
    describe('GET /:slug', () => {
      it('returns 200', (done) => {
        createPlace().then((place) => {
          request
            .get(`/${place.slug}`)
            .expect('Content-Type', /text/)
            .expect(200)
            .end(done)
        })
      })
    })

    describe('GET /:slug JSON', () => {
      it('returns 200', (done) => {
        createPlace().then((place) => {
          request
            .get(`/${place.slug}`)
            .accept('application/json')
            .expect('Content-Type', /json/)
            .expect({
              id: place.id,
              slug: place.slug,
              name: place.name,
              image: place.image,
              created_at: place.created_at.toISOString(),
              updated_at: place.updated_at.toISOString()
            })
            .expect(200)
            .end(done)
        })
      })
    })
  })

  describe('When not found', () => {
    describe('GET /:slug', () => {
      it('returns 404', (done) => {
        request
          .get('/random')
          .expect('Content-Type', /text/)
          .expect(404)
          .end(done)
      })
    })

    describe('GET /:slug JSON', () => {
      it('returns 404 and error JSON', (done) => {
        request
          .get('/random')
          .accept('application/json')
          .expect('Content-Type', /json/)
          .expect(404)
          .expect({ error: 'not_found' })
          .end(done)
      })
    })
  })
})

const createPlace = () => new Promise((resolve, reject) => {
  db.places.save({ slug: 'dekalb-market-brooklyn', name: 'Dekalb Market' }, (err, place) => {
    if (err) return reject(err)
    resolve(place)
  })
})

const destroyPlaces = () => new Promise((resolve, reject) => {
  db.places.destroy({}, (err) => {
    if (err) return reject(err)
    resolve()
  })
})
