const getAbout = require('../app/home/routes/getAbout')
const getPlaces = require('../app/places/routes/getPlaces')
const createPlace = require('../app/places/routes/createPlace')
const getPlace = require('../app/places/routes/getPlace')
const getPlaceNew = require('../app/places/routes/getPlaceNew')
const getPlaceEdit = require('../app/places/routes/getPlaceEdit')
const updatePlace = require('../app/places/routes/updatePlace')

module.exports = {
  createPlace,
  getAbout,
  getPlaces,
  getPlace,
  getPlaceNew,
  getPlaceEdit,
  updatePlace
}
