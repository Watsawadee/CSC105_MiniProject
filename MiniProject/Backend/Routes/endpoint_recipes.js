const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

module.exports = (connection) => {
      // Middleware for authentication
    //   const authenticate = (req, res, next) => {
    //     const token = req.cookies.token;

    //     if (token) {
    //       jwt.verify(token, secretKey, (err, decoded) => {
    //         if (err) {
    //           console.error("Error verifying token: ", err);
    //           res.sendStatus(401);
    //         } else {
    //           // Token is valid, proceed to the next middleware/route handler
    //           next();
    //         }
    //       });
    //     } else {
    //       // Token does not exist, authentication failed
    //       res.sendStatus(401);
    //     }
    //   };

    // Route handler for retrieving all recipe information
    router.get("/", (req, res) => {
        if (req.user) {
            const sqlSelect =
                "SELECT * FROM recipe JOIN user ON user.id = user_id";
            connection.query(sqlSelect, (err, rows) => {
                if (err) {
                    res.json({
                        success: false,
                        data: null,
                        error: err.message,
                    });
                } else {
                    // Return data to the client if successful
                    res.json({
                        success: true,
                        data: rows,
                        error: null,
                    });
                }
            });
        }
        // else {
        //     res.status(401).json({
        //         success: false,
        //         message: "Not authorized",
        //     });
        // }
    });
    router.get("/:recipe_id", (req, res) => {
        req.params.recipe_id;
        if (req.user) {
            const sqlSelect =
                "SELECT * FROM recipe JOIN user ON user.id = user_id WHERE id = ?";
            connection.query(sqlSelect, (err, rows) => {
                if (err) {
                    res.json({
                        success: false,
                        data: null,
                        error: err.message,
                    });
                } else {
                    // Return data to the client if successful
                    res.json({
                        success: true,
                        data: rows,
                        error: null,
                    });
                }
            });
        }
        // else {
        //     res.status(401).json({
        //         success: false,
        //         message: "Not authorized",
        //     });
        // }
    });

    return router;
};
