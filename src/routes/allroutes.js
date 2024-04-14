import e, { Router } from "express";
import { addCondition, deleteCondition, getCondition, getConditions, patchCondition } from "../controllers/conditionsController.js";
import { addMeals, deleteMeal, getMeal, getMeals, patchMeal } from "../controllers/mealsController.js";
import { addRecipes, deleteRecipe, getRecipes, getrecipe, patchRecipe } from "../controllers/recipesController";
import { addUsers, deleteUser, getUser, getUsers } from "../controllers/usersController.js";



const router = Router()

router.post('/addCoditions', addCondition)
router.get('fetchConditions', getConditions)
router.get('/fetchCondition/:id', getCondition)
router.patch('/updateCondition/:id', patchCondition)
router.delete('/removeCondition/:id', deleteCondition)



router.post('/addMeals', addMeals)
router.get('/fetchMeals', getMeals)
router.get('/fetchMeal/:id',getMeal)
router.patch('/updateMeal/:id', patchMeal)
router.delete('/removeMeal/:id', deleteMeal)



router.post('/addRecipes', addRecipes)
router.get('/fetchRecipe', getRecipes)
router.get('/fetchRecipe/:id', getrecipe)
router.patch('/updateRecipe/:id', patchRecipe)
router.delete('/removeRecipe/:id', deleteRecipe)



router.post('/addUsers', addUsers)
router.get('/fetchUsers', getUsers)
router.get('/fetchUser/:id', getUser)
router.delete('/removeUser/:id', deleteUser)
