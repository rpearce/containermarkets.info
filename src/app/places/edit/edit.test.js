'use strict'

const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())
const { places } = require('../../../db/test_helpers')

describe('Place Edit', () => {
  beforeEach((done) => places.destroy().then(done))

  describe('When Found', () => {
    describe('GET /:slug/edit', () => {
      it('returns 200', (done) => {
        places.create().then(slug => {
          request
            .get(`/${slug}/edit`)
            .expect('Content-Type', /text/)
            .expect(200)
            .end(done)
        }).catch(done)
      })
    })
  })

  describe('When not found', () => {
    describe('GET /:slug/edit', () => {
      it('returns 404', (done) => {
        request
          .get('/random')
          .expect('Content-Type', /text/)
          .expect(404)
          .end(done)
      })
    })
  })
})
