const getAbout = require('../app/home/routes/getAbout')
const getPlaces = require('../app/places/routes/getPlaces')
const createPlace = require('../app/places/routes/createPlace')
const getPlace = require('../app/places/routes/getPlace')
const newPlace = require('../app/places/routes/newPlace')
const editPlace = require('../app/places/routes/editPlace')
const updatePlace = require('../app/places/routes/updatePlace')

module.exports = {
  createPlace,
  getAbout,
  getPlaces,
  getPlace,
  newPlace,
  editPlace,
  updatePlace
}
