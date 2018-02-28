const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const account = new Schema({
  password: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now
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
    street: String,
    zip: String,
    city:String,
    country:String,
    geoLoc: {
      type: [Number],  // [<longitude>, <latitude>]
      index: '2d',      // create the geospatial index
      required: false
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
    required: true,
    unique :true
  },
  status: {
    type: String,
    required: true,
    default: 'new'
  }
});


account.statics.findByEmail= async function (email) {
  return await this.findOne({email})

}
account.pre('save', function(next) {
  var account = this;

  // only hash the password if it has been modified (or is new)
  if (!account.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(account.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          account.password = hash;
          next();
      });
  });
});
module.exports = mongoose.model('account', account);
