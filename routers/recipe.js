const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Recipe = require("../models/").recipe;
const Ingredient = require("../models/").ingredient;
const Recipeingredients = require("../models/").recipeIngredients;
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.findAll({ include: [Ingredient] });

    if (!recipes) {
      res.status(400).send("Recipes not found");
    } else {
      res.json(recipes);
    }
  } catch (error) {}
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);

    req.body.ingredients.forEach(async (ing) => {
      const lowerCaseNameIngredient = ing.ingredient.toLowerCase();

      //Check if the ingrident exist already in the database or not
      const ingredient = await Ingredient.findOne({
        where: { name: lowerCaseNameIngredient },
      });

      let newIngredient;
      //if the ingredient already exists in the database, create join row with the id from that ingredient
      if (ingredient) {
        const recipeIngredients = await Recipeingredients.create({
          amount: ing.amount,
          ingredientId: ingredient.id,
          recipeId: recipe.id,
        });
        //if the ingredient was not found create a new ingredient.
      } else {
        newIngredient = await Ingredient.create({
          name: ing.ingredient,
        });
        const recipeIngredients = await Recipeingredients.create({
          amount: ing.amount,
          ingredientId: newIngredient.id,
          recipeId: recipe.id,
        });
      }
    });

    res.json(recipe);
  } catch (e) {
    console.log(e);
  }
});

router.get("/diet", async (req, res) => {
  const diet = req.query.diet;

  try {
    const Recipes = await Recipe.findAll({
      include: {
        model: Ingredient,
      },
    });

    let validRecipies;
    //filters based on the diet and if no diet is selected send back all
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
