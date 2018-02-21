const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
  password: {
    type: String,
    require: true
  },
  creationDate: {
    type: Date,
    require: true
  },
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  city:{
      type: String,
      require: true
  },
  zip:{
    type: String,
    require: true
  },
  country:{
    type: String,
    require: true
  },
  fixedPhone: {
    type: String
  },
  mobilePhone: {
    type: String
  },
  email: {
    type: String,
    require: true,
    unique :true
  },
  geoLoc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d',      // create the geospatial index
    require: true
  },
  status: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('privateUser', schema);
