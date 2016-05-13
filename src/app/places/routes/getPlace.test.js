const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())
const { dbName } = require('../../../db/config')
const r = require('../../../db/index')

describe('Place', () => {
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
        }).catch(done)
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
              created_at: place.created_at.toISOString(),
              updated_at: place.updated_at.toISOString()
            })
            .expect(200)
            .end(done)
        }).catch(done)
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
