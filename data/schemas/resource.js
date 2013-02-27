var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//DEPENDENCIES PLACEHOLDER

var ResourceSchema = new Schema({

  user: { type: Schema.ObjectId,  ref: 'User' },

  //FIELDS PLACEHOLDER

  date: { type: Date, default: Date.now() }
});

module.exports = ResourceSchema;