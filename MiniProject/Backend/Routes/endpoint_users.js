const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

module.exports = (connection) => {
  
    //Get all user
    router.get("/", (req, res) => {
        const sqlSelect = "SELECT * FROM user";
        connection.query(sqlSelect, (err, results) => {
            if (err) {
                console.error("Error executing the SQL query:", err);
                res.sendStatus(500);
            } else {
                res.json(results);
            }
        });
    });

    //GET Specific User
    router.get("/:user_id", (req, res) => {
        const user_id = req.params.user_id;

        const sqlSelect = "SELECT * FROM user WHERE id = ?";
        connection.query(sqlSelect, [user_id], (err, results) => {
            if (err) {
                console.error("Error executing the SQL query:", err);
                res.sendStatus(500);
            } else {
                if (results.length === 0) {
                    res.status(404).json({
                        success: false,
                        message: "User not found",
                    });
                } else {
                    res.json(results[0]);
                }
            }
        });
    });

    return router;
};
