const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

module.exports = (connection, secretKey) => {
  router.post("/", (req, res) => {
    const { emailOrName, password } = req.body;

    const sqlSelect = "SELECT * FROM user WHERE email = ? OR name = ?";
    connection.query(sqlSelect, [emailOrName, emailOrName], (err, results) => {
      if (err) {
        console.error("Error executing the SQL query: ", err);
        res.sendStatus(500);
      } else {
        if (results.length === 0) {
          // User with the given email or name not found
          console.log("User not found.");
          res.status(401).json({
            success: false,
            message: "Invalid email or password",
          });
        } else {
          const user = results[0];
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              console.error("Error comparing passwords: ", err);
              res.sendStatus(500);
            } else {
              if (!isMatch) {
                // Incorrect password
                console.log("Incorrect password.");
                res.status(401).json({
                  success: false,
                  message: "Invalid email or password",
                });
              } else {
                // Generate JWT token
                const token = jwt.sign(
                  { email: user.email },
                  secretKey,
                  { expiresIn: "1h" }
                );
                // Set the token as a cookie in the response
                res.cookie("token", token, {
                  httpOnly: true,
                  secure: true, // Enable this if using HTTPS
                  sameSite: "strict", // Adjust this according to your needs
                });
                // console.log(token);
                res.status(200).json({
                  success: true,
                  message: "Login successful",
                });
              }
            }
          });
        }
      }
    });
  });

  return router;
};
