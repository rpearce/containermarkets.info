'use strict'

const app = require('../../../server/index')
const request = require('supertest').agent(app.listen())
const { admins } = require('../../../db/test_helpers')

describe('Login Create - POST /login', () => {
  beforeEach((done) => admins.destroy().then(done).catch(done))

  describe('with valid attributes', () => {
    it('sends login email and redirects to check-email', (done) => {
      const email = 'me@robertwpearce.com'
      admins.create(email).then(() => {
        request
          .post('/login')
          .send({ admin: { email } })
          .expect(302)
          .expect('Location', '/login/check-email')
          .end(done)
      }).catch(done)
    })
  })

  describe('with invalid attributes', () => {
    it('does not send login email and gives 422', (done) => {
      request
        .post('/login')
        .send({ admin: { email: 'abc@xyz.com' } })
        .expect(422)
        .end(done)
    })
  })
})
