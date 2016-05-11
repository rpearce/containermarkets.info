const app = require('../../../server/index')
const request = require('supertest').agent(app.listen());

describe('Places', () => {
  describe('GET /', () => {
    it('is successful', (done) => {
      request
        .get('/')
        .expect('Content-Type', /text/)
        .expect(200)
        .end(done)
    })
  })

  describe('GET / JSON', () => {
    it('is successful', (done) => {
      request
        .get('/')
        .accept('application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(done)
    })
  })
})
