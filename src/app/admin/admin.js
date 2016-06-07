const mailgun = require('mailgun-js')
const { db } = require('../../db')
const { appDomain, protocol } = require('../../server/config')

const reauthorize = ({ id, email }) => new Promise((resolve, reject) => {
  db.auths.remove(id)
    .then(() => db.auths.add(id))
    .then(({ id: token }) => sendAuthEmail({ token, email }))
    .then(resolve)
    .catch(reject)
})

const sendAuthEmail = ({ token, email }) => new Promise((resolve, reject) => {
  const mailer = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  })

  const link = `${protocol}://${appDomain}/login?t=${token}`

  var data = {
    from: 'Container Markets Info - No Reply <noreply@containermarkets.info>',
    to: email,
    subject: 'Sign in to your Container Markets Information account',
    text: `Please use the following link to sign in.\n\n${link}`,
    html: `Please use the following link to sign in.<br><br><a href="${link}">${link}</a>`
  }

  mailer.messages().send(data, (err, body) => {
    if (err) return reject(err)
    resolve()
  })
})

module.exports = {
  reauthorize
}
