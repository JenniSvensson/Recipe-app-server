const { Router } = require("express");
const Recipe = require("../models/").recipe;
const Ingredient = require("../models/").ingredient;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({ include: [Recipe] });
    if (!ingredients) {
      res.status(400).send("Ingredients not found");
    } else {
      res.json(ingredients);
    }
  } catch (error) {}
});

module.exports = router;
