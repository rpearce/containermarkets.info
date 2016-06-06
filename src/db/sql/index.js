'use strict'

const QueryFile = require('pg-promise').QueryFile

const sql = (file) => {
  const path = `./src/db/sql/${file}`

  const options = {
    minify: true,
    params: {
      schema: 'public'
    }
  }

  return new QueryFile(path, options)
}

module.exports = {
  // External queries for places
  places: {
    add: sql('places/add.sql'),
    all: sql('places/all.sql'),
    create: sql('places/create.sql'),
    drop: sql('places/drop.sql'),
    empty: sql('places/empty.sql'),
    find: sql('places/find.sql'),
    init: sql('places/init.sql'),
    remove: sql('places/remove.sql'),
    update: sql('places/update.sql')
  }
}
