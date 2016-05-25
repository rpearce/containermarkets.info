const app = require('../../../../server/index')
const request = require('supertest').agent(app.listen());


describe('About', () => {
  describe('GET /about', () => {
    it('is successful', (done) => {
      request
        .get('/about')
        .expect(200)
        .end(done)
    })
  })
})
