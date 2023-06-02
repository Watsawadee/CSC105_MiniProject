const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

module.exports = (connection) => {
    router.put("/:recipe_id", (req, res) => {
      const recipe_id = req.params.recipe_id; // Get the recipe_id from the request params
  
      const {
        recipe_name,
        description,
        cook_time,
        is_favourite,
        rating,
        likes,
        Breakfast,
        lunch,
        Gluten_Free,
        Dinner,
        image_link,
      } = req.body;
  
      // Assuming you have a 'recipes' table in your MySQL database
      const sqlUpdate =
        "UPDATE recipe SET recipe_name = ?, description = ?, cook_time = ?, is_favourite = ?, rating = ?, likes = ?, Breakfast = ?, lunch = ?, Gluten_Free = ?, Dinner = ?, image_link = ? WHERE id = ?";
      connection.query(
        sqlUpdate,
        [
          recipe_name,
          description,
          cook_time,
          is_favourite,
          rating,
          likes,
          Breakfast ? 0:1,
          lunch ? 0:1,
          Gluten_Free ? 0:1,
          Dinner ? 0:1 ,
          image_link,
          recipe_id,
        ],
        (err, result) => {
          if (err) {
            console.error("Error executing the SQL query:", err);
            res.sendStatus(500);
          } else {
            res.json({
              success: true,
              message: "Recipe updated successfully",
            });
          }
        }
      );
    });
  
    return router;
  };
  