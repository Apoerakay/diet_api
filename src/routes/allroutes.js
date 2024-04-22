import e, { Router } from "express";
import { addCondition, deleteCondition, getCondition, getConditions, patchCondition } from "../controllers/conditionsController.js";
import { addMeals, deleteMeal, getMeal, getMeals, patchMeal } from "../controllers/mealsController.js";
import { addRecipes, deleteRecipe, getRecipes, getrecipe, patchRecipe } from "../controllers/recipesController.js";
import { addUsers, getUser,getUsers,patchUser, deleteUser} from "../controllers/usersController.js";
import { login } from "../controllers/signIn.js";



const router = Router()

router.post('/api/addConditions', addCondition)
router.get('/fetchConditions', getConditions)
router.get('/api/fetchCondition/:id', getCondition)
router.patch('/api/updateCondition/:id', patchCondition)
router.delete('/api/removeCondition/:id', deleteCondition)



router.post('/api/addMeals', addMeals)
router.get('/api/fetchMeals', getMeals)
router.get('/api/fetchMeal/:id',getMeal)
router.patch('/api/updateMeal/:id', patchMeal)
router.delete('/api/removeMeal/:id', deleteMeal)



router.post('/api/addRecipes', addRecipes)
router.get('/api/fetchRecipe', getRecipes)
router.get('/api/fetchRecipe/:id', getrecipe)
router.patch('/api/updateRecipe/:id', patchRecipe)
router.delete('/api/removeRecipe/:id', deleteRecipe)



router.post('/api/signup', addUsers)
router.get('/api/fetchUsers', getUser)
router.get('/api/fetchUser/:id', getUsers)
router.patch('/api/updateUser/:id', patchUser)
router.delete('/api/removeUser/:id', deleteUser)

router.post('/api/login', login)

export default router