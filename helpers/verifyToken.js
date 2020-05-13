const jwt = require("jsonwebtoken");
const config = require("../config");

const verifyToken = () => (req, res, next) => {
  const token = req.headers["user-token"];
  if (!token)
    return res.status(403).json({ auth: false, message: "No token provided." });

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });
    }

    req.userId = decoded.id;

    next();
  });
};

module.exports = verifyToken;
