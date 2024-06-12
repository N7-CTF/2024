var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET articles listing. */
// router.get('/', function(req, res, next) {
//   const { take, skip } = req.query; // Extract take and skip from query parameters
//   prisma.article.findMany({
//     take: parseInt(take) || undefined,
//     skip: parseInt(skip) || undefined,
//   }).then(articles => res.send(articles))
// });

// router.get('/', function(req, res, next) {
//   const utilisateurId = parseInt(req.query.userId);
//   prisma.article.findMany({
//     where: {
//       utilisateurId: utilisateurId,
//     },
//     include: {
//       categories: true,
//     },
//   })
//     .then(articles => res.send(articles))
//     .catch(error => next(error));
// });

router.get("/", function (req, res, next) {
  const { take, skip, userId } = req.query;

  if (userId) {
    // Handle fetching articles by user ID
    const utilisateurId = parseInt(userId);
    prisma.article
      .findMany({
        where: {
          utilisateurId: utilisateurId,
        },
        include: {
          categories: true,
        },
      })
      .then((articles) => res.send(articles))
      .catch((error) => next(error));
  } else {
    // Handle fetching all articles
    const takeValue = parseInt(take) || undefined;
    const skipValue = parseInt(skip) || undefined;
    prisma.article
      .findMany({
        take: takeValue,
        skip: skipValue,
      })
      .then((articles) => res.send(articles))
      .catch((error) => next(error));
  }
});

router.get("/latest", function (req, res, next) {
  prisma.article
    .findMany({
      skip: 0,
      take: 9,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        categories: true,
      },
    })
    .then((articles) => res.send(articles));
});
// get a single articles
router.get("/:id", async function (req, res, next) {
  const article = await prisma.article.findUnique({
    where: { id: +req.params.id },
  });
  const author = await prisma.utilisateur.findUnique({
    where: { id: article.utilisateurId },
  });
  article.auteur = author.name;
  res.send(article);
});

//post a new articles
// assign the articles to categories
router.post("/", function (req, res, next) {
  const { titre, contenu, image, published, categories } = req.body;
  const utilisateurId = req.body.utilisateurId;

  prisma.article
    .create({
      data: {
        titre,
        contenu,
        image,
        published,
        utilisateurId,
        categories: {
          connect: categories.map((categoryId) => ({ id: categoryId })),
        },
      },
      include: {
        categories: true,
      },
    })
    .then((article) => res.send(article))
    .catch((err) => res.send(err));
});

// delete a articles
router.delete("/:id", function (req, res, next) {
  prisma.article
    .delete({ where: { id: +req.params.id } })
    .then((article) => res.send(article));
});

//modify a acticles
router.patch("/", function (req, res, next) {
  prisma.article
    .update({
      where: {
        id: parseInt(req.body.id),
      },
      data: req.body,
    })
    .then((article) => res.send(article));
});

module.exports = router;
