const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfessionalProfile=require(`${process.cwd()}/models/professionalProfile`)
const Request = require(`${process.cwd()}/models/request`)
const schema = new Schema({

  creationDate: {
    type: Date,
    require: true
  },
  editor:{
    type: Schema.Types.ObjectId,
    ref:'account'
  },
  request: {
    type: Schema.Types.ObjectId,
    ref:'request'
  },
  content: [{
    description: String,
    quantity: Number,
    price: Number,
    vatRate: Number,
  }],
  deadline:{
      type: Date,
      require: true
  },
  status:{
    type: String,
    require: true
  }
});

module.exports = mongoose.model('offer', schema);

