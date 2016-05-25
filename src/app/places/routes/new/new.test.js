'use strict'

const app = require('../../../../server/index')
const request = require('supertest').agent(app.listen())
const { dbName } = require('../../../../db/config')
const { createPlace, destroyPlaces } = require('../../../../db/test_helpers')

describe('Place New', () => {
  beforeEach((done) => destroyPlaces().then(done))

  describe('When admin', () => {
    describe('GET /new', () => {
      it('returns 200', (done) => {
        createPlace().then((place) => {
          request
            .get('/new')
            .expect('Content-Type', /text/)
            .expect(200)
            .end(done)
        }).catch(done)
      })
    })
  })
})
