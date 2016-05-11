'use strict'

const db = require('./index')()

const loadSchema = () => new Promise((resolve, reject) => {
  db.schema((err, _) => {
    if (err) return reject(err);
    resolve();
  })
})

const loadSeeds = () => new Promise((resolve, reject) => {
  db.seeds((err, _) => {
    if (err) return reject(err);
    resolve();
  })
})

if (process.env.NODE_ENV === 'test') {
  loadSchema().then(process.exit)
} else {
  loadSchema().then(loadSeeds).then(process.exit)
}
