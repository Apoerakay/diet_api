import { Schema, model } from "mongoose";


const mealsSchema = new Schema({
  title: {type: String, required: true},
  timeOfDay: {type: String, required: true},
  images: {type: String}

})

export const mealsModel = model('Meals', mealsSchema, 'meals')