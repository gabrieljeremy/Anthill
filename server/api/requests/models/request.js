const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({

  creationDate: {
    type: Date,
    require: true
  },
  requester: {
    type: account,
    require: true
  },
  needs: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  deadline:{
      type: Date,
      require: true
  },
  proximity:{
    type: String,
    require: true
  },
  status:{
    type: String,
    require: true
  }
});

module.exports = mongoose.model('request', schema);
