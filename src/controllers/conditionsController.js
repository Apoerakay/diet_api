import { conditionModel } from "../models/conditionsModel.js";


export const addCondition = async (req, res) => {
  try {
    const data = req.body
    const postCondition = await conditionModel.create(data)
    res.json(postCondition)
    
  } catch (error) {
    console.log(error)
  }
};

export const getConditions = async (req, res)=>{
  try {
    const data = req.body
    const fetchConditions= await conditionModel.find(data)
    res.json(fetchConditions)
  } catch (error) {
    
    console.log(error)
  }
};

export const getCondition = async (req, res) =>{
 try {
   const id = req.params.id
   const fetchCondition = await conditionModel.findById(id)
   res.json(fetchCondition)
 } catch (error) {
  
  console.log(error)
 }
};


export const patchCondition = async (req,res) =>{
  try {
    const id = req.params.id
    const updateCondition = await conditionModel.findByIdAndDelete(id)
    res.json(updateCondition)
  } catch (error) {
    
    console.log(error)
  }

};



export const deleteCondition = async (req, res) =>{
try {
  const id = req.params.id
  const removecondition = await conditionModel.findByIdAndDelete(id)
  res.json(removecondition)
} catch (error) {
  console.log(error)
}
};