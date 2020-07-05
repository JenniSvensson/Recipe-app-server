const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Recipe = require("../models/").recipe;
const Ingredient = require("../models/").ingredient;
const router = new Router();

router.get("/", async (req, res, next) => {
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

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const result = await Recipe.create(req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});
