import { Schema, model } from "mongoose";

const conditionSchema = new Schema ({
  name:{type: String, required: true},
  description:{type: String, required: true},

})

export const conditionModel = model('condition', conditionSchema, 'Conditions')