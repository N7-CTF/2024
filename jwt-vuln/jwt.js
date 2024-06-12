const jwt = require("jsonwebtoken");

const secret = "J33p3r5cr33p3r5";

const generateToken = (username, password, algorithm = "HS256") => {
	return jwt.sign({ username, password }, secret, {
		expiresIn: "1h",
		algorithm,
	});
};

const verifyToken = (token) => {
	try {
		return jwt.verify(token, secret);
	} catch (err) {
		return false;
	}
};

module.exports = { generateToken, verifyToken };
