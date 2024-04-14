import { mealsModel } from "../models/mealsModel.js";

export const addMeals = async(res,req)=>{
 try {
   const data = req.body
   const postMeals = await mealsModel.create(data)
   res.json(postMeals)
 } catch (error) {
  
  console.log(error)
 }
};

export const getMeals = async (res,req) =>{
 try {
   const data = req.body
   const fetchmeals = await mealsModel.find(data)
   res.json(fetchmeals)
 } catch (error) {
  
  console.log(error)
 }
};


export const getMeal = async (res, req) =>{
 try {
   const id = req.body
   const fetchMeal = await mealsModel.findById(id)
   res.json(fetchMeal)
 } catch (error) {
  
  console.log(error)
 }
};


export const patchMeal = async (res, req) =>{
  try {
    const id = req.body
    const updateMeal = await mealsModel.findByIdAndUpdate(id)
    res.json(updateMeal)
  } catch (error) {
    
    console.log(error)
  }

};

export const deleteMeal = async (res,req) =>{
  try {
    const id = req.body
    const removeMeal = await mealsModel.findByIdAndDelete(id)
    res.json(removeMeal)
  } catch (error) {
    
    console.log(error)
  }

};