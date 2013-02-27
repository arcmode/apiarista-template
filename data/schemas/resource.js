var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//DEPENDENCIES PLACEHOLDER

var ResourceSchema = new Schema({

  user: { type: ObjectId,  ref: 'User' },

  //FIELDS PLACEHOLDER

  date: { type: Date, default: Date.now() }
});

module.exports = ResourceSchema;