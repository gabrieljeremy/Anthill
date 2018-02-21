const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({

  creationDate: {
    type: Date,
    require: true
  },
  editor: {
    type: professionalUser,
    require: true
  },
  request: {
    type: request,
    require: true
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

module.exports = mongoose.model('privateUser', schema);

