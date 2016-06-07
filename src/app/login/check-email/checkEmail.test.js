'use strict'

const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())

describe('Admin Check Email - GET /login/check-email', () => {
  it('returns 200', (done) => {
    request
      .get('/login/check-email')
      .expect('Content-Type', /text/)
      .expect(200)
      .end(done)
  })
})
