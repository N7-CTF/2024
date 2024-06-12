var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const { take, skip } = req.query; // Extract take and skip from query parameters
  prisma.utilisateur
    .findMany({
      take: parseInt(take) || undefined,
      skip: parseInt(skip) || undefined,
    })
    .then((utilisateurs) => res.send(utilisateurs))
    .catch((err) => res.send(err));
});

// get a single user
router.get("/:id", function (req, res, next) {
  console.log("ggg");

  prisma.utilisateur
    .findUnique({ where: { id: +req.params.id } })
    .then((utilisateur) => res.send(utilisateur))
    .catch((err) => res.send(err));
});

//post a new user

router.post("/", function (req, res, next) {
  prisma.utilisateur
    .create({ data: req.body })
    .then((utilisateur) => res.send(utilisateur))
    .catch((err) => res.send(err));
});

// delete a user
router.delete("/:id", function (req, res, next) {
  prisma.utilisateur
    .delete({ where: { id: +req.params.id } })
    .then((utilisateur) => res.send(utilisateur))
    .catch((err) => res.send(err));
});

//modify a user
router.patch("/", function (req, res, next) {
  const { id, ...userData } = req.body;
  prisma.utilisateur
    .update({
      where: {
        id: +id,
      },
      data: userData,
    })
    .then((utilisateur) => res.send(utilisateur))
    .catch((err) => res.send(err));
});
module.exports = router;
