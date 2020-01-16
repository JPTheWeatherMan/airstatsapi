const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AircraftSchema = new Schema({
  _id: String,
  model: String,
  family: String,
  manufacturer_id: String,
  typicalSeating: Number,
  flightCrew: Number,
  engines: Array,
  numberOfEngines: Number,
  dimensions: Object,
  weights: Object,
  performance: Object
});

module.exports = mongoose.model(
  'Aircraft',
  AircraftSchema,
  'AircraftCharacteristics'
);
