const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

module.exports = (connection, secretKey) => {
  router.post("/", async (req, res) => {
    try {
      const { email, password } = req.body;

      // Retrieve user from the database
      const query = `SELECT * FROM user WHERE email = ?`;
      connection.query(query, [email], async (err, results) => {
        if (err) {
          console.error("Error logging in:", err);
          res.status(500).json({ error: "Internal server error" });
        } else {
          if (results.length === 0) {
            res.status(401).json({ error: "Invalid credentials" });
          } else {
            const user = results[0];

            // Compare passwords
            const isPasswordValid = await bcrypt.compare(
              password,
              user.password
            );

            if (!isPasswordValid) {
              res.status(401).json({ error: "Invalid credentials" });
            } else {
              // Generate JWT token
              const token = jwt.sign({ userId: user.id }, secretKey, {
                expiresIn: "1h",
              });

              res.cookie("token", token, { httpOnly: true });
              res.status(200).json({ message: "Login sucessful", userId: user.id, token });
            }
          }
        }
      });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return router;
};

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const router = express.Router();

// module.exports = (connection, secretKey) => {
//   router.post("/", (req, res) => {
//     const { email, password } = req.body;

//     const sqlSelect = "SELECT * FROM user WHERE email = ?";
//     connection.query(sqlSelect, [email], (err, results) => {
//       if (err) {
//         console.error("Error executing the SQL query: ", err);
//         res.sendStatus(500);
//       } else {
//         if (results.length === 0) {
//           console.log("User not found.");
//           res.status(401).json({
//             success: false,
//             message: "Invalid email or password",
//           });
//         } else {
//           const user = results[0];
//           bcrypt.compare(password, user.password, (err, isMatch) => {
//             if (err) {
//               console.error("Error comparing passwords: ", err);
//               res.sendStatus(500).json({
//                 success: false,
//                 message: "An error occurred. Please try again.",
//               });
//             } else {
//               if (!isMatch) {
//                 // Incorrect password
//                 console.log("Incorrect password.");
//                 res.status(401).json({
//                   success: false,
//                   message: "Invalid email or password",
//                 });
//               } else {
//                 const token = jwt.sign(
//                   { userId: user.id },
//                   secretKey,
//                   { expiresIn: "1h" }
//                 );
//                 res.cookie("token", token, {
//                   httpOnly: true,
//                 });
//                 res.status(200).json({
//                   success: true,
//                   message: "Logged in successfully",
//                   token: token,
//                 });
//               }
//             }
//           });
//         }
//       }
//     });
//   });

//   return router;
// };
