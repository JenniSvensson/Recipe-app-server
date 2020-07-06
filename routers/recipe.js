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

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const result = await Recipe.create(req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

router.get("/diet", async (req, res, next) => {
  const diet = req.query.diet;

  try {
    const Recipes = await Recipe.findAll({
      include: {
        model: Ingredient,
      },
    });

    let validRecipies;
    if (diet === "vegan") {
      validRecipies = Recipes.filter((recipie) => {
        const validingredients = recipie.ingredients.some(
          (ing) =>
            ing.containsMeat ||
            ing.containsMeat ||
            ing.containsDairy ||
            ing.containsEgg ||
            ing.containsSeafood ||
            ing.containsShellfish
        );
        return !validingredients;
      });
    } else if (diet === "vegetarian") {
      validRecipies = Recipes.filter((recipie) => {
        const validingredients = recipie.ingredients.some(
          (ing) =>
            ing.containsMeat || ing.containsSeafood || ing.containsShellfish
        );
        return !validingredients;
      });
    } else if (diet === "glutenFree") {
      validRecipies = Recipes.filter((recipie) => {
        const validingredients = recipie.ingredients.some(
          (ing) => ing.containsGluten
        );
        return !validingredients;
      });
    } else {
      validRecipies = Recipes.filter((recipie) => {
        const validingredients = recipie.ingredients.some((ing) => ing);
        return validingredients;
      });
    }

    if (!validRecipies) {
      res.status(400).send("Ingredients not found");
    } else {
      res.json(validRecipies);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
