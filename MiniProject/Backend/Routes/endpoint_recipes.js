const express = require("express");
const router = express.Router();

module.exports = (connection) => {

    // Route handler for retrieving all recipe information
    router.get("/", (req, res) => {
        const sqlSelect = "SELECT * FROM recipe JOIN user ON user.id = user_id";
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
    });

    return router;
};
