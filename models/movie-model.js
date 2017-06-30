const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myMovieSchema = new Schema({
  title: {type: String},
  genre: {type: String},
  plot: {type: String},
  imageUrl: {type: String},
});

myMovie = mongoose.model('Movie', myMovieSchema);

module.exports = myMovie;
