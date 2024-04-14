import { recipesModel } from "../models/recipesModel.js";


export const addRecipes = async (res,req) =>{
  try {
    const data = req.body
    const postRecipes = await recipesModel.create(data)
    res.json(postRecipes)
  } catch (error) {
    console.log(error)
  }
};

export const getRecipes = async(res,req) =>{
 try {
   const data = req.body
   const fetchRecipes = await recipesModel.find(data)
   res.json(fetchRecipes)
 } catch (error) {
  
  console.log(error)
 }
};


export const getrecipe = async(res,req) =>{
  try {
    const id = req.params.id
    const fetchRecipe = await recipesModel.findById(id)
    res.json(fetchRecipe)
  } catch (error) {
    
    console.log(error)
  }
};

export const patchRecipe = async (res, req) => {
 try {
   const id = req.params.id
   const updaterecipe = await recipesModel.findByIdAndUpdate(id)
   res.json(updaterecipe)
 } catch (error) {
  
  console.log(error)
 }

};

export const deleteRecipe = async (res,req) =>{
 try {
   const id = req.params.id
   const removeRecipe = await recipesModel.findByIdAndDelete(id)
   res.json(removeRecipe)
 } catch (error) {
  
  console.log(error)
 }
};