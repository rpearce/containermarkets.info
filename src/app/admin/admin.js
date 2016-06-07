const { db } = require('../../db')
const mailer = require('../../server/mailer')

const reauthorize = ({ id, email }) => new Promise((resolve, reject) => {
  db.auths.remove(id)
    .then(() => db.auths.add(id))
    .then(({ id: token }) => sendAuthEmail({ token, email }))
    .then(resolve)
    .catch(reject)
})

const sendAuthEmail = ({ token, email }) => new Promise((resolve, reject) => {
  const text = `Please use the following link to sign in.\n\nhttp://containermarkets.info/login?t=${token}`
  const html = `Please use the following link to sign in.<br><br><a href="http://containermarkets.info/login?t=${token}">http://containermarkets.info/login?t=${token}</a>`

  var data = {
    from: 'Container Markets Info - No Reply <noreply@containermarkets.info>',
    to: email,
    subject: 'Sign in to your Container Markets Information account',
    text,
    html
  };

  mailer.messages().send(data, (err, body) => {
    if (err) return reject(err)
    resolve()
  })
})

module.exports = {
  reauthorize
}
