'use strict'

const app = require('../../../../server/index')
const request = require('supertest').agent(app.listen())
const { createPlace, destroyPlaces } = require('../../../../db/test_helpers')

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
              name: place.name,
              slug: place.slug,
              address: place.address,
              lat: place.lat,
              long: place.long,
              description: place.description,
              content: place.content,
              created_at: place.created_at,
              updated_at: place.updated_at
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
