const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

module.exports = (connection) => {
  router.post("/:user_id", (req, res) => {
    const user_id = req.params; // Get the user_id from the request params
    console.log(user_id.user_id);
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
    const sqlInsert =
      "INSERT INTO recipe (recipe_name, description, cook_time, is_favourite, rating, likes, user_id, Breakfast, lunch, Gluten_Free, Dinner, image_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(
      sqlInsert,
      [
        recipe_name,
        description,
        cook_time,
        is_favourite,
        rating,
        likes,
        user_id.user_id,
        Breakfast,
        lunch,
        Gluten_Free,
        Dinner,
        image_link,
      ],
      (err, result) => {
        if (err) {
          console.error("Error executing the SQL query:", err);
          res.sendStatus(500);
        } else {
          res.json({
            success: true,
            message: "Recipe created successfully",
          });
        }
      }
    );
  });

  return router;
};

// const express = require("express");
// const router = express.Router();

// module.exports = (connection) => {
//   router.post("/", (req, res) => {
//     const {
//       recipe_name,
//       description,
//       cook_time,
//       is_favourite,
//       rating,
//       likes,
//       user_id,
//       Breakfast,
//       lunch,
//       Gluten_Free,
//       Dinner,
//       image_link,
//     } = req.body;

//     const sqlInsert =
//       "INSERT INTO recipes (recipe_name, description, cook_time, is_favourite, rating, likes, user_id, Breakfast, lunch, Gluten_Free, Dinner, image_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     connection.query(
//       sqlInsert,
//       [
//         recipe_name,
//         description,
//         cook_time,
//         is_favourite,
//         rating,
//         likes,
//         user_id,
//         Breakfast,
//         lunch,
//         Gluten_Free,
//         Dinner,
//         image_link,
//       ],
//       (err, result) => {
//         if (err) {
//           console.error("Error executing the SQL query:", err);
//           res.sendStatus(500);
//         } else {
//           res.json({
//             success: true,
//             message: "Recipe created successfully",
//           });
//         }
//       }
//     );
//   });

//   return router;
// };
