import e, { Router } from "express";
import { addCondition, deleteCondition, getCondition, getConditions, patchCondition } from "../controllers/conditionsController.js";
import { addMeals, deleteMeal, getMeal, getMeals, patchMeal } from "../controllers/mealsController.js";
import { addRecipes, deleteRecipe, getRecipes, getrecipe, patchRecipe } from "../controllers/recipesController.js";
import { addUsers, getUser,getUsers,patchUser, deleteUser} from "../controllers/usersController.js";
import { login } from "../controllers/signIn.js";



const router = Router()

router.post('/api/addConditions', addCondition)
router.get('/api/Conditions', getConditions)
router.get('/api/Condition/:id', getCondition)
router.patch('/api/updateCondition/:id', patchCondition)
router.delete('/api/removeCondition/:id', deleteCondition)



router.post('/api/addMeals', addMeals)
router.get('/api/Meals', getMeals)
router.get('/api/Meal/:id',getMeal)
router.patch('/api/updateMeal/:id', patchMeal)
router.delete('/api/removeMeal/:id', deleteMeal)



router.post('/api/addRecipes', addRecipes)
router.get('/api/Recipe', getRecipes)
router.get('/api/Recipe/:id', getrecipe)
router.patch('/api/updateRecipe/:id', patchRecipe)
router.delete('/api/removeRecipe/:id', deleteRecipe)



router.post('/api/signup', addUsers)
router.get('/api/Users', getUser)
router.get('/api/User/:id', getUsers)
router.patch('/api/updateUser/:id', patchUser)
router.delete('/api/removeUser/:id', deleteUser)

router.post('/api/login', login)

export default router