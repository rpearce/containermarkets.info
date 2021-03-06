'use strict'

const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())
const { createPlace, destroyPlaces } = require('../../../db/test_helpers')

describe('Place New', () => {
  beforeEach((done) => destroyPlaces().then(done))

  describe('When admin', () => {
    describe('GET /places/new', () => {
      it('returns 200', (done) => {
        createPlace().then(place => {
          request
            .get('/places/new')
            .expect('Content-Type', /text/)
            .expect(200)
            .end(done)
        }).catch(done)
      })
    })
  })
})
