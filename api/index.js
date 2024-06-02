import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("Mongodb is connected");
    }
).catch(()=>{console.log("Error while connecting");})



app.listen(3000,()=>{console.log('Server running on port 3000');})