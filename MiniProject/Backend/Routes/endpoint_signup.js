const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

const router = express.Router();

module.exports = (connection) => {
  router.post("/", (req, res) => {
    const { name, email, password } = req.body;

    // Check if the user with the given email already exists
    const sqlSelect = "SELECT * FROM user WHERE email = ?";
    connection.query(sqlSelect, [email], (err, results) => {
      if (err) {
        console.error("Error executing the SQL query: ", err);
        return res.sendStatus(500);
      }

      if (results.length > 0) {
        // User with the given email already exists
        return res.status(409).json({ error: "User with the given email already exists" });
      }

      // Validate password
      if (!password) {
        console.error("Error: Password is required");
        return res.status(400).json({ error: "Password is required" });
      }

      // Generate salt
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          console.error("Error generating salt: ", err);
          return res.sendStatus(500);
        }

        // Hash the password with the generated salt
        bcrypt.hash(password, salt, (err, hashedPassword) => {
          if (err) {
            console.error("Error hashing password: ", err);
            return res.sendStatus(500);
          }

          // Insert the new user into the database
          const sqlInsert = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
          connection.query(sqlInsert, [name, email, hashedPassword], (err) => {
            if (err) {
              console.error("Error executing the SQL query: ", err);
              return res.sendStatus(500);
            }

            // Registration successful
            res.sendStatus(200);
          });
        });
      });
    });
  });

  return router;
};

// const express = require("express");
// const bcrypt = require("bcrypt");
// const mysql = require("mysql2");

// const router = express.Router();

// module.exports = (connection) => {
//   router.post("/", async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
  
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       // Insert user into the database
//       const query = `INSERT INTO user (name, email, password) VALUES (?, ?, ?)`;
//       connection.query(query, [name, email, hashedPassword], (err, result) => {
//         if (err) {
//           console.error('Error signing up:', err);
//           res.status(500).json({ error: 'Internal server error' });
//         } else {
//           res.status(200).json({ message: 'Signup successful' });
//         }
//       });
//     } catch (error) {
//       console.error('Error signing up:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }

//   });

//   return router;
// };