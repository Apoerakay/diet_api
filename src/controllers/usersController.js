import { usersModel } from "../models/UsersModel.js";
import bcrypt from 'bcrypt'



async function hashPassword(password) {
    const res = await bcrypt.hash(password, 10)
    return res
}

async function compare(userPassword, hashedPassword) {
    const res = await bcrypt.compare(userPassword, hashedPassword)
    return res
}


export const addUsers= async(req,res,next)=>{
  try {
    const data = req.body
  
    const hashedPassword = await hashPassword(data.password)
  
    const user= await usersModel.findOne({email: data.email})
    if(!user){
      const {firstName, lastName, email,height,weight} = await usersModel.create({...data, 
        password: hashedPassword
      })
      res.status(201).json({
        firstName,
        lastName,
        email,
        height,
        weight
      })
    } else{res.send('Authentication failed')}
  
  } catch (error) {
    
    next(error)
        res.status(500).send({ error });
  }
}

export const getUsers = async (req, res, next) => {
  try {
    const data = req.body
      const findAccounts = await usersModel.find(data)
      res.json(findAccounts)
  } catch (error) {
      next(error)
  }
}

export const getUser= async (req, res, next) => {
  try {
      const findAccount = await usersModel.findById(req.params.id)
      if (findAccount === null) {
          return res.status(404).json({ message: `Account with id ${findAccount} not found` })
      } else {
          res.json(findAccount)
      }
  } catch (error) {
      next(error)
  }
}

export const patchUser = async (req, res, next) => {
  try {
      const accountUpdate = await usersModel.findByIdAndUpdate(req.params.id)
      res.json({ message: `Your account with id ${accountUpdate} has been updated` })
  } catch (error) {
 next(error)
  }
}


export const deleteUser = async (req, res, next) => {
  try {

      const id = req.params.id
      const accountDelete = await usersModel.findByIdAndDelete(id)
      res.status(201).json({ message: `Your account ${accountDelete} has been deleted successfully` })
  } catch (error) {
      next(error)
  }
}

