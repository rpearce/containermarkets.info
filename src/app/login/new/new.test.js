'use strict'

const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())

describe('Admin Login', () => {
  describe('GET /login', () => {
    it('returns 200', (done) => {
      request
        .get('/login')
        .expect('Content-Type', /text/)
        .expect(200)
        .end(done)
    })
  })
})
