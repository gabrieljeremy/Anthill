const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  editors: [{
    type: Schema.Types.ObjectId,
    ref:'account'
  }],
  creationDate: {
    type: Date,
    required: true
  },
  companyName: {
    type: String,
    required: true,
    unique :true
  },
  contactFirstName: {
    type: String,
    require: true
  },
  contactLastName: {
    type: String,
    required: true
  },
  address: {
    address: String,
    zip: String,
    city:String,
    country:String,
    geoLoc: {
      type: [Number],  // [<longitude>, <latitude>]
      index: '2d',      // create the geospatial index
      require: true
    }
  },
  fixedPhone: {
    type: String
  },
  mobilePhone: {
    type: String
  },
  contactEmail: {
    type: String,
    required: true,
    unique :true
  },
  vat: {
    type: String
  },
  webSite: {
    type: String,
    required: true
  },
  sectors: {
    type: String,
    required: true
  },
  activities: {
    type: String,
    required: true
  },
  activityZone:{
    type : Number,
    required : true
  },
  pictures: {
    type: [String]
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('professionalProfile', schema);
