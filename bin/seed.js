const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const myCelebrity = require('../models/celebrity-model.js');

const myCelebrityArray = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'You complete me!'
  },
  {
    name: 'Matt Damon',
    occupation: 'Actor',
    catchPhrase: 'Who am I!?'
  },
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Actor',
    catchPhrase: "I'll be back!"
  },
  {
    name: 'Drew Berrymore',
    occupation: 'Actress',
    catchPhrase: "I don't know you!"
  },
];

myCelebrity.create(
  myCelebrityArray,
  (err, celebrityResults)=>{
    if(err){
      console.log('ERROR');
      return;
    }
    celebrityResults.forEach((oneCelebrity)=>{
      console.log('New Celeb: '+ oneCelebrity.name);
    });
  }
);
