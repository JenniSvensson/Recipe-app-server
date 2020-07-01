const { Router } = require("express");
const Recipe = require("../models/").recipe;
const Ingredient = require("../models/").ingredient;
const router = new Router();

router.get("/", async (req, res, next) => {
  console.log("hello", Recipe);
  console.log("Recipeingredients:", Ingredient);
  try {
    const recipes = await Recipe.findAll({ include: [Ingredient] });

    if (!recipes) {
      res.status(400).send("Recipes not found");
    } else {
      res.json(recipes);
    }
  } catch (error) {}
});

module.exports = router;
