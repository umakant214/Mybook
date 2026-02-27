import express from 'express'
import dotenv from "dotenv";
import dbConnect from './dbConfig/b.js';
import router from './router/router.js';
dotenv.config();
const app =express()
const PORT = process.env.PORT || 5000;
app.use(express.json())
dbConnect()
app.use("/api",router)
app.listen(PORT,()=>{
    console.log("Server is running.........")
})
