import mongoose from "mongoose";
const userScherma=mongoose.Schema({
    name:String,
    emial:String,
    password:String,
    consfirmPassword:String,
})
export const userModel=mongoose.model("user",userScherma)