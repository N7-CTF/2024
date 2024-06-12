var express = require('express');
var router = express.Router();
const {PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

/* GET categories listing. */
router.get('/', function(req, res, next) {
  const { take, skip } = req.query; // Extract take and skip from query parameters
  prisma.categorie.findMany({
    take: parseInt(take) || undefined, 
    skip: parseInt(skip) || undefined, 
  }).then(categories => res.send(categories))
});

router.get('/count', function(req, res, next) {
  prisma.categorie.findMany({
    include: {
      articles: true,
    },
  })
    .then(categories => {
      const result = categories.map(category => ({
        id : category.id,
        category: category.nom,
        articleCount: category.articles.length,
      }));
      res.send(result);
    })
    .catch(error => next(error));
});


// get a single categories 
router.get('/:id', function(req, res, next) {

  prisma.categorie.findUnique({where: { id : +req.params.id },})
  .then(categorie => res.send(categorie))
});

//post a new categories

router.post('/', function(req,res,next) {
  prisma.categorie.create({data : req.body})
  .then(categorie => res.send(categorie))

})


// delete a categories
router.delete('/:id', function(req,res,next) {
  prisma.categorie.delete({where: { id : +req.params.id },})
  .then(categorie => res.send(categorie))
});

//modify a acticles
router.patch('/', function(req,res,next) {
  prisma.categorie.update({
    where: { 
      id : parseInt(req.body.id) 
    },
    data : req.body })
  .then(categorie => res.send(categorie))
});




module.exports = router;
