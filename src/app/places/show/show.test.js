'use strict'

const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())
const { places } = require('../../../db/test_helpers')

describe('Place', () => {
  beforeEach((done) => places.destroy().then(done))

  describe('When Found', () => {
    describe('GET /:slug', () => {
      it('returns 200', (done) => {
        places.create().then(slug => {
          request
            .get(`/${slug}`)
            .expect('Content-Type', /text/)
            .expect(200)
            .end(done)
        }).catch(done)
      })
    })

    describe('GET /:slug JSON', () => {
      it('returns 200', (done) => {
        places.create().then(slug => {
          request
            .get(`/${slug}`)
            .accept('application/json')
            .expect('Content-Type', /json/)
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
