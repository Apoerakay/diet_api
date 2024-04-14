import { Schema, model } from "mongoose";


const recipesSchema = new Schema({
title:{type: String, required: true},
description:{type: String, required: true}
})

export const recipesModel = model('Recipe', recipesSchema, 'recipes')