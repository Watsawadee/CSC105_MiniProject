const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

module.exports = (connection) => {

    router.delete("/:recipe_id", (req, res) => {
        const recipeId = req.params.recipe_id;

        const sqlDelete = "DELETE FROM recipe WHERE id = ?";
        connection.query(sqlDelete, [recipeId], (err, result) => {
            if (err) {
                console.error("Error executing the SQL query:", err);
                res.sendStatus(500);
            } else {
                if (result.affectedRows === 0) {
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
