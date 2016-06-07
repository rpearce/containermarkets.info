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
  // External queries

  admins: {
    create: sql('admins/create.sql'),
    drop: sql('admins/drop.sql'),
    find: sql('admins/find.sql'),
    init: sql('admins/init.sql')
  },

  auths: {
    add: sql('auths/add.sql'),
    create: sql('auths/create.sql'),
    drop: sql('auths/drop.sql'),
    find: sql('auths/find.sql'),
    remove: sql('auths/remove.sql')
  },

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
