var passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const account = new Schema({
  password: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
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
  email: {
    type: String,
    require: true,
    unique :true
  },
  status: {
    type: String,
    require: true
  }
});
account.statics.hello = function() {
  return 'hello';
}
account.plugin(passportLocalMongoose,{usernameField:'email'})
module.exports = mongoose.model('account', account);
