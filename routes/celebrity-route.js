const express = require('express');

const Celebrity = require('../models/celebrity-model.js');

const router = express.Router();

router.get('/celebrities',(req, res, next)=>{
  Celebrity.find((err, celebrityResults)=>{
    if(err){
      next(err);
      return;
    }
    res.render('celebrities/celebrities-list-view.ejs',{
      celebrityResults:celebrityResults
    });
  });
});

router.get('/celebrities/:myId/details', (req, res, next)=>{
  Celebrity.findById(
    req.params.myId,
    (err, theCelebrity)=>{
      if(err){
        next(err);
        return;
      }
      res.render('celebrities/celebrity-detail.ejs',{
        theCelebrity:theCelebrity
      });
    }
  );
});

router.get('/celebrities/new',(req, res, next)=>{
  res.render('celebrities/celebrities-new-view.ejs');
});

router.post('/celebrities',(req, res, next)=>{
  const theCelebrity = new Celebrity ({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityCatchPhrase,
    imageUrl: req.body.celebrityImageUrl,
  });

  theCelebrity.save((err)=>{
    if(err){
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});

router.post('/celebrities/:myId/delete', (req, res, next)=>{
  Celebrity.findByIdAndRemove(
    req.params.myId,
    (err, celebrityFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.redirect('/celebrities');
    }
  );
});

router.get('/celebrities/:myId/edit', (req, res, next)=>{
  Celebrity.findById(
    req.params.myId,
    (err, celebrityFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.render('celebrities/celebrities-edit-view.ejs',{
        celebrityFromDb:celebrityFromDb
      });
    }
  );
});

router.post('/celebrities/:myId/update', (req, res, next)=>{
  Celebrity.findByIdAndUpdate(
    req.params.myId,
    {
      name: req.body.celebrityName,
      occupation: req.body.celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase,
      imageUrl: req.body.celebrityImageUrl,
    },
    (err, celebrityFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.redirect('/celebrities/'+ celebrityFromDb._id +'/details');
    }
  );
});

module.exports = router;
