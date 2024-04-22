import { Schema, model } from "mongoose";


const userSchema = new Schema ({
  userName :{type: String, required: true},
  age: {type: Number, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  height: {type: String, required: true},
  weight: {type: String, required: true},
  condition:{type: String},
  previousMedicalConditions:{type: String},
  onMedication:{type: Boolean},
  allergies:{type:String}

});

export const usersModel = model('User', userSchema, 'users')
