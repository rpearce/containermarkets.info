'use strict'

const app = require('../../../../server/index')
const request = require('supertest').agent(app.listen())
const { dbName } = require('../../../../db/config')
const { createPlace, destroyPlaces } = require('../../../../db/test_helpers')

describe('Place UPDATE - POST /', () => {
  beforeEach((done) => destroyPlaces().then(done))

  describe('with valid attributes', () => {
    it('updates place and redirects to place', (done) => {
      createPlace().then((place) => {
        request
          .post(`/${place.slug}`)
          .send({
            place: {
              name: place.name,
              slug: place.slug,
              address: place.address,
              lat: place.lat,
              long: place.long,
              description: place.description,
              content: '### SOMETHING NEW'
            }
          })
          .expect(302)
          .expect('Location', `/${place.slug}`)
          .end(done)
      }).catch(done)
    })
  })

  describe('with invalid attributes', () => {
    it('does not update and renders edit', (done) => {
      request
        .post('/')
        .send({ place: {} })
        .expect(422)
        .end(done)
    })
  })
})
