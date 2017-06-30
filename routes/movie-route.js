const express = require('express');

const Movie = require('../models/movie-model.js');

const router = express.Router();

router.get('/movies', (req, res, next)=>{
  Movie.find((err, movieResults)=>{
    if(err){
      next(err);
      return;
    }
    res.render('movies/movies-list-view.ejs',{
      movieResults:movieResults
    });
  });
});

router.get('/movies/:myId/details', (req, res, next)=>{
  Movie.findById(
    req.params.myId,
    (err, theMovie)=>{
      if(err){
        next(err);
        return;
      }
      res.render('movies/movies-detail.ejs',{
        theMovie:theMovie
      });
    }
  );
});

router.get('/movies/new',(req, res, next)=>{
  res.render('movies/movies-new-view.ejs');
});

router.post('/movies', (req, res, next)=>{
  const theMovie = new Movie ({
    title: req.body.movieTitle,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot,
    imageUrl: req.body.movieImageUrl,
  });
  theMovie.save((err)=>{
    if(err){
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

router.post('/movies/:myId/delete', (req, res, next)=>{
  Movie.findByIdAndRemove(
    req.params.myId,
    (err, movieFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.redirect('/movies');
    }
  );
});


module.exports = router;
