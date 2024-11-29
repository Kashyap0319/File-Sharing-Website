import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// const DB_URL = process.env.DB_URL;
const DB_URL ="mongodb+srv://onlyforcoding0319:mongodb@cluster0.ud7io.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DBConnection =async () =>{
    try {
       await mongoose.connect(DB_URL)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error while connecting MongoDB',error.message );
    }
}

export default DBConnection;