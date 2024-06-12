var express = require('express');
var router = express.Router();
const {PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

/* GET commentaires listing. */
router.get('/', function(req, res, next) {
  const { take, skip } = req.query; // Extract take and skip from query parameters
  prisma.commentaire.findMany({
    take: parseInt(take) || undefined, 
    skip: parseInt(skip) || undefined, 
  }).then(commentaires => res.send(commentaires))
});

// get a single commentaires 
router.get('/:id', function(req, res, next) {

  prisma.commentaire.findMany({where: { articleId : +req.params.id },})
  .then(commentaire => res.send(commentaire))
});

//post a new commentaires

router.post('/', function(req,res,next) {
  prisma.commentaire.create({data : req.body})
  .then(commentaire => res.send(commentaire))
  
})


// delete a commentaires
router.delete('/:id', function(req,res,next) {
  prisma.commentaire.delete({where: { id : +req.params.id },})
  .then(commentaire => res.send(commentaire))
  .catch(error => {
    // Handle error
    console.error(error);
  });
});

//modify a acticles
router.patch('/', function(req,res,next) {
  prisma.commentaire.update({
    where: { 
      id : parseInt(req.body.id) 
    },
    data : req.body })
  .then(commentaire => res.send(commentaire))
});
module.exports = router;
