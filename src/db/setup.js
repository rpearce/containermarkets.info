'use strict'

const db = require('./index')()

const loadSchema = () => new Promise((resolve, reject) => {
  return db.schema((err, _) => {
    if (err) reject(err);
    resolve();
  })
})

const loadSeeds = () => new Promise((resolve, reject) => {
  return db.seeds((err, _) => {
    if (err) reject(err);
    resolve();
  })
})

loadSchema().then(loadSeeds)
