const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myCelebritySchema = new Schema({
  name: {type: String},
  occupation: {type: String},
  catchPhrase: {type: String}
});

const myCelebrity = mongoose.model('Celebrity', myCelebritySchema);

module.exports = myCelebrity;
