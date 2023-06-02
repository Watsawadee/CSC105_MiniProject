const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

module.exports = (connection) => {

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
