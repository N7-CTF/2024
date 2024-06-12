const { verifyToken } = require("./jwt");

module.exports.authMiddleware = (req, res, next) => {
  // Get the token from the cookies
	const token = req.cookies.token;
	if (!token) {
		res.redirect("/");
		return;
	}

	// Verify the token
	const user = verifyToken(token);
	if (!user) {
		res.redirect("/");
		return;
	}

  // Set the user in the request
  req.user = user;
  next();
};
