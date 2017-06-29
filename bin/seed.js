const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const myCelebrity = require('../models/celebrity-model.js');

const myCelebrityArray = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'You complete me!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tom_Cruise_avp_2014_3.jpg/220px-Tom_Cruise_avp_2014_3.jpg',
  },
  {
    name: 'Matt Damon',
    occupation: 'Actor',
    catchPhrase: 'Who am I!?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Damon_cropped.jpg/168px-Damon_cropped.jpg'

  },
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Actor',
    catchPhrase: "I'll be back!",
    imageUrl: 'http://img.usmagazine.com/social/arnold-schwarzenegger-zoom-755ffc9d-a01c-4216-ba91-86b120f2caae.jpg'
  },
  {
    name: 'Drew Berrymore',
    occupation: 'Actress',
    catchPhrase: "I don't know you!",
    imageUrl: 'http://img2.timeinc.net/people/i/2013/news/131125/drew-barrymore-600x450.jpg'
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
