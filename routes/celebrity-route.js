const express = require('express');

const Celebrity = require('../models/celebrity.model.js');

const router = express.Router();

router.get('/celebrity',(req, res, next)=>{
  Celebrity.find((err, celebrityResults)=>{
    if(err){
      next(err);
      return;
    }
    res.render('views/celebrities/index.ejs',{
      celebrityResults:celebrityResults
    });
  });
});
