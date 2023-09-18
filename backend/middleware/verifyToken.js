const jwt = require("jsonwebtoken");

//With this we can check whether a user is authenticated(logined) or not
//If authenticated they can go for the next() function
//If not authenticated a 401 status code will passes with a message.
//with this we can change the frontend compontent.

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.token;
	console.log(authHeader)

	if (authHeader) {
		const token = authHeader.split(" ")[1];

		jwt.verify(token, process.env.JWT_SEC, async (err, user) => {
			if (err) res.status(403).json("Invalid token");

			req.user = user;
			console.log(user)
			next();
		});
	} else {
		return res.status(401).json("Your are not authenticated");
	}
};

//Authorization functions...
//This Functions checks whether a login user has the authorization to procced with a action.

//Checks if the actual loggined user performing this particular action.
const verifyAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id) {
			next();
		} else {
			res.status(403).json(
				"You are restricted from performing this operation"
			);
		}
	});
};

const verifyByRole = (role) => (req, res, next) => {
	if (req.user.userRole === role) {
		next();
	} else {
		res.status(403).json(
			"You are restricted from performing this operation"
		);
	}
};

module.exports = {
	verifyToken,
	verifyAndAuthorization,
	verifyByRole,
};
