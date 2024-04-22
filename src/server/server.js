import express from "express"
import dotenv from "dotenv"
import router from "../routes/allroutes.js";
import mongoose from "mongoose";
import cors from "cors" 
 

dotenv.config()


const server = express();

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({extended:false}))

server.use(router)
 
const PORT = process.env.PORT || 7070

 await mongoose.connect(process.env.MongoUri)
console.log("database connected")

server.listen(PORT, () =>{
  console.log(`server is running ${PORT}`)
})