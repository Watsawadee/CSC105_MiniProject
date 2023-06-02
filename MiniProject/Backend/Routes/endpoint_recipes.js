const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

module.exports = (connection) => {
    // Route handler for retrieving all recipe information
    router.get("/", (req, res) => {
        const sqlSelect = "SELECT * FROM recipe JOIN user ON user.id = user_id";
        connection.query(sqlSelect, (err, rows) => {
            if (err) {
                res.status(500).json({
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
    });

    router.get("/:recipeId", (req, res) => {
        const recipeId = req.params.recipeId; // Assuming the recipe ID is passed as a query parameter
      
        const sqlSelect = "SELECT * FROM recipe WHERE recipe.id = ?";
        connection.query(sqlSelect, [recipeId], (err, rows) => {
          if (err) {
            res.status(500).json({
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
      });
      

    // Route for All recipe on specific User
    router.get("/user/:user_id", (req, res) => {
        const userId = req.params.user_id;
        const sqlSelect = "SELECT * FROM recipe WHERE user_id = ?";
        connection.query(sqlSelect, [userId], (err, rows) => {
            if (err) {
                res.status(500).json({
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
    });

    // Route for All recipe on specific User
    router.get("/Fav/:user_id/", (req, res) => {
        const userId = req.params.user_id;
        const sqlSelect = "SELECT * FROM recipe WHERE user_id = ? AND is_favourite = 1";
        connection.query(sqlSelect, [userId], (err, rows) => {
            if (err) {
                res.status(500).json({
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
    });

    // //Routes for specific recipe && specific user data
    // router.get("/detail/:recipe_id", (req, res) => {
    //     const user_id = req.params.user_id;
    //     const recipe_id = req.params.recipe_id;
    //     const sqlSelect =
    //         "SELECT * FROM recipe WHERE user_id = ? && recipe.id = ?";
    //     connection.query(sqlSelect, [user_id ,recipe_id], (err, rows) => {
    //         if (err) {
    //             res.status(500).json({
    //                 success: false,
    //                 data: null,
    //                 error: err.message,
    //             });
    //         } else {
    //             // Return data to the client if successful
    //             res.json({
    //                 success: true,
    //                 data: rows,
    //                 error: null,
    //             });
    //         }
    //     });
    // });

    return router;
};
