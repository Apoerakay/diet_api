import { mealsModel } from "../models/mealsModel.js";

export const  addMeals = async(req,res)=>{
 try {
   const data = req.body
   const postMeals = await mealsModel.create(data)
   res.json(postMeals)
 } catch (error) {
  
  console.log(error)
 }
};

export const getMeals = async (req,res) =>{
 try {
   const data = req.body
   const fetchmeals = await mealsModel.find(data)
   res.json(fetchmeals)
 } catch (error) {
  
  console.log(error)
 }
};


export const getMeal = async (req, res) =>{
 try {
   const id = req.body
   const fetchMeal = await mealsModel.findById(id)
   res.json(fetchMeal)
 } catch (error) {
  
  console.log(error)
 }
};


export const patchMeal = async (req, res) =>{
  try {
    const id = req.body
    const updateMeal = await mealsModel.findByIdAndUpdate(id)
    res.json(updateMeal)
  } catch (error) {
    
    console.log(error)
  }

};

export const deleteMeal = async (req,res) =>{
  try {
    const id = req.body
    const removeMeal = await mealsModel.findByIdAndDelete(id)
    res.json(removeMeal)
  } catch (error) {
    
    console.log(error)
  }

};