const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Account = require(`${process.cwd()}/models/account`);
const schema = new Schema({

  creationDate: {
    type: Date,
    require: true
  },
  requester: {
    type: Schema.Types.ObjectId,
    ref:'account'
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
      required: true
  },
  maxBudget:{
    type: String

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
