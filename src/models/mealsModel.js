import { Schema, model } from "mongoose";


const mealsSchema = new Schema({
  meals: new Array(),
  condition: {type: String, requred: true},
  timeOfDay: {type: String, required: true},
  image: {type: String},
  

})

export const mealsModel = model('Meals', mealsSchema, 'meals')