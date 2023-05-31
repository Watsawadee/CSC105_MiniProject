const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

module.exports = (secretKey) => {
  // Authentication middleware
  const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, msg: "Not authorized" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ success: false, message: "Invalid token" });
      }
      // Store the decoded token in the request object for later use
      req.user = decoded;
      next();
    });
  };

  router.get("/", authenticateToken, (req, res) => {
    // Access granted, return protected data
    res.json({
      success: true,
      message: "Protected data",
    });
  });

  return router;
};
