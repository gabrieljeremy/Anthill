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
  companyName: {
    type: String,
    require: true,
    unique :true
  },
  contactFirstName: {
    type: String,
    require: true
  },
  contactLastName: {
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
  vat: {
    type: String
  },
  webSite: {
    type: String,
    require: true
  },
  sectors: {
    type: String,
    require: true
  },
  activities: {
    type: String,
    require: true
  },
  pictures: {
    type: [String]
  },
  status: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('professionalUser', schema);
