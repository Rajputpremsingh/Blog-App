import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js";   // We can import by different name as well like here we have imported "router" as "userRoutes"
import authRoutes from "./routes/auth.route.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use(userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statuscode).json({
        success : false,
        statuscode,
        message
    })
})

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("Mongodb is connected");
    }
).catch(()=>{console.log("Error while connecting");})



app.listen(3000,()=>{console.log('Server running on port 3000');})