const { Router } = require("express");
const Recipe = require("../models/").recipe;
const Ingredient = require("../models/").ingredient;
const router = new Router();

// Gets all the ingredients for each recipe
router.get("/", async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({
      include: [Recipe],
    });

    if (!ingredients) {
      res.status(400).send("Ingredients not found");
    } else {
      res.json(ingredients);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
