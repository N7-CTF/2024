var express = require('express');
var router = express.Router();
const {PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient
const jwt = require("jsonwebtoken");


router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database for a user with the provided email and password
    const user = await prisma.utilisateur.findFirst({
      where: {
        email,
        password,
      },
    });

    if (user) {
      const token = jwt.sign({id:user.id,name : user.name, email:user.email, password : user.password, role: user.role}, process.env.JWT_KEY);
      // User found, return success response
        res.json({success : true , token, user})
    } else {
      // User not found or invalid credentials, return error response
      res.json({ success: false });
    }
  } catch (error) {
    // Handle any error that occurred during the database query
    console.error(error);
    res.status(500).json({ error: 'An error occurred. Please try again later.' });
  }
});

module.exports = router;
