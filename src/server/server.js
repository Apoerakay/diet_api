import express from "express"
import dotenv from "dotenv"

dotenv.config()


const server = express();

const PORT = 6000


server.listen(PORT, () =>{
  console.log("express app is running")
})