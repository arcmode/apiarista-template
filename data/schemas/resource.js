
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//DEPENDENCIES PLACEHOLDER

module.exports = new Schema({

    timestamp: { type: Date, default: Date.now }

  //FIELDS PLACEHOLDER

  //IF_OWNER , owner: { type: Schema.ObjectId, ref: '$Owner', required: true }

  //IF_AUTH , secret: { 
    //IF_AUTH type: String,
    //IF_AUTH default: require('../utils/tokenize'),
    //IF_AUTH unique: true,
    //IF_AUTH required: true }
});