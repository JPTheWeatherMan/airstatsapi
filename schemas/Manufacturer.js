const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema({
  _id: String,
  name: String,
  hq: String,
  founded: String,
  currentlyOperating: Boolean,
  type: String,
  typeOfAircraft: String,
  aircraft: Array
});

module.exports = mongoose.model(
  'Manufacturer',
  ManufacturerSchema,
  'AircraftCharacteristics'
);
