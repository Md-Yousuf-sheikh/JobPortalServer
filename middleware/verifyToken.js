const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/User");
exports.verifyToken = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")?.[1];

    if (!token) {
      return res.status(401).json({
        status: "Fail",
        message: "You not logged in(401)",
      });
    }

    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      error: "Invalid refresh token",
    });
  }
};
