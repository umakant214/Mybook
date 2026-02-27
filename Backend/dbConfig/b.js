import mongoose from "mongoose";
const dbConnect =()=>{
    const conn=mongoose.connect("mongodb://localhost:27017/CRUD_with_team");
    if(conn){
        console.log("Database connected successfully.....")
    }
}
export default dbConnect;