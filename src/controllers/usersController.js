import { usersModel } from "../models/UsersModel.js";


export const addUsers = async(req, res) =>{
  try {
    const data = req.body
    const postUsers = await usersModel.create(data)
    res.json(postUsers)
  } catch (error) {
    console.log(error)
  }
};


export const getUsers = async (req, res) =>{
 try {
   const data = req.body
   const fetchUsers = await usersModel.find(data)
   res.json(fetchUsers)
 } catch (error) {
  
  console.log(error)
 }

};

export const getUser = async (req, res) =>{
  try {
    const id = req.params.id
    const fetchUser = await usersModel.findById(id)
    res.json(fetchUser)
  } catch (error) {
    
    console.log(error)

  }
};



export const deleteUser = async (req,res) =>{
 try {
   const id = req.params.id
   const removeUser = await usersModel.findByIdAndDelete(id)
   res.json(removeUser)
 } catch (error) {
  
  console.log(error)
 }
};