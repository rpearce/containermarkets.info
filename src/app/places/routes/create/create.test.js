'use strict'

const app = require('../../../../server/index')
const request = require('supertest').agent(app.listen())
const { dbName } = require('../../../../db/config')

describe('Place Create - POST /', () => {
  describe('with valid attributes', () => {
    it('creates place and redirects to place', (done) => {
      request
        .post('/')
        .send({
          place: {
            name: 'BoxPark XYZ',
            slug: 'boxpark-xyz',
            address: '123 Main Street',
            lat: '92.12444',
            long: '-0.23455',
            description: 'Great Place',
            content: '### a heading'
          }
        })
        .expect(302)
        .expect('Location', '/boxpark-xyz')
        .end(done)
    })
  })

  describe('with invalid attributes', () => {
    it('does not create and renders new', (done) => {
      request
        .post('/')
        .send({ place: {} })
        .expect(422)
        .end(done)
    })
  })
})
