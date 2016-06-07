const mailgun = require('mailgun-js')
const apiKey = 'key-XXXXXXXXXXXXXXXXXXXXXXX'
const domain = 'mydomain.mailgun.org'
const mailer = mailgun({ apiKey, domain })

module.exports = mailer
