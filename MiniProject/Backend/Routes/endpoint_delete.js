const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

module.exports = (connection) => {
    // function authenticateToken(req, res, next) {
    //     const token = req.cookies.token;

    //     if (!token) {
    //         return res
    //             .status(401)
    //             .json({ success: false, message: "Not authorized" });
    //     }

    //     jwt.verify(token, secretKey, (err, decoded) => {
    //         if (err) {
    //             return res
    //                 .status(403)
    //                 .json({ success: false, message: "Invalid token" });
    //         }

    //         // Store the decoded token in the request object for later use
    //         req.user = decoded;
    //         next();
    //     });
    // }

    router.delete("/:recipe_id", (req, res) => {
        const recipeId = req.params.recipe_id;

        // Check if the user is authorized to delete the recipe
        // Implement your authorization logic here

        // Delete the recipe from the database
        const sqlDelete = "DELETE FROM recipe WHERE id = ?";
        connection.query(sqlDelete, [recipeId], (err, result) => {
            if (err) {
                console.error("Error executing the SQL query:", err);
                res.sendStatus(500);
            } else {
                if (result.affectedRows === 0) {
                    // No rows were affected, recipe does not exist
                    res.status(404).json({
                        success: false,
                        message: "Recipe not found",
                    });
                } else {
                    res.json({
                        success: true,
                        message: "Recipe deleted successfully",
                    });
                }
            }
        });
    });

    return router;
};
