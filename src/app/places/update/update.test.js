'use strict'

const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())
const { createPlace, destroyPlaces } = require('../../../db/test_helpers')

describe('Place UPDATE - POST /', () => {
  beforeEach((done) => destroyPlaces().then(done))

  describe('with valid attributes', () => {
    it('updates place and redirects to place', (done) => {
      createPlace().then(slug => {
        request
          .post(`/${slug}`)
          .send({
            place: {
              name: 'new name',
              slug: 'new-slug',
              address: '123 main st',
              latitude: '1.223223',
              longitude: '-1.2323',
              description: 'new description',
              content: '### SOMETHING NEW'
            }
          })
          .expect(302)
          .expect('Location', `/new-slug`)
          .end(done)
      }).catch(done)
    })
  })

  describe('with invalid attributes', () => {
    it('does not update and renders edit', (done) => {
      createPlace().then(slug => {
        request
          .post(`/${slug}`)
          .send({ place: {} })
          .expect(422)
          .end(done)
      }).catch(done)
    })
  })
})
