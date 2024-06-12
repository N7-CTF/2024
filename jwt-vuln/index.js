const express = require("express");
const cookieParser = require("cookie-parser");
const mustacheExpress = require("mustache-express");
const { generateToken } = require("./jwt");
const { authMiddleware } = require("./auth");

const app = express();
const port = 3000;
const admin_username = "admin"; // In case we need to change it later

app.set("views", `${__dirname}/views`);
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());

app.use(cookieParser());

app.get("/", (req, res) => {
	const username = req.query.username;
	const password = req.query.password;

	if (username && password) {
		if (username == admin_username) {
			res.render("index", { error: "You can't use this username!" });
			return;
		}

		if (username.length < 20) {
			res.render("index", { error: "Username too short!" });
			return;
		}

		// Generate & set the token
		const token = generateToken(username, password);
		res.cookie("token", token, {
			expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
			httpOnly: true,
			path: "/",
		});

		res.redirect("/admin");
		return;
	}

	res.render("index");
});

app.get("/admin", authMiddleware, (req, res) => {
	const user = req.user;

	// Handle add user form
	if (req.query.action && req.query.action === "addUser") {
		const username = req.query.username;
		const email = req.query.email;
		const password = req.query.password;

		if (!username || !email || !password) {
			res.render("admin", {
				username: user.username,
				isAdmin: user.username === admin_username,
				error: "Please fill all the fields!",
			});
		} else {
			res.render("admin", {
				username: user.username,
				isAdmin: user.username === admin_username,
				success: "User added successfully! The password is sent to the email.",
			});
		}

		return;
	}

	// Render the admin page
	res.render("admin", {
		username: user.username,
		isAdmin: user.username === admin_username,
	});
});

app.get("/flag", authMiddleware, (req, res) => {
	const user = req.user;

	// Check if the user is admin
	if (user.username !== admin_username) {
		res.render("flag", { flag: "Hmmmm! No hay entrada." });
		return;
	}

	// Render the flag
	res.render("flag", { flag: "N7-CTF{u53_57r0ng_4nd_l0ng_53cr373_f0r_51gn1ng_jw7}" });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
