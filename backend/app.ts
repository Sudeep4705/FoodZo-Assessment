import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import foodRoute from "./Routes/Food/food"
import userRoute from "./Routes/User/user"
import adminRoute from "./Routes/Admin/admin"
const url = process.env.MONGO_URL as string 
const app =  express()
Main(url)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function Main(url: string) {
  await mongoose.connect(url);
}
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:["http://localhost:5173","https://food-zo.netlify.app/"],credentials:true}))
app.use(cookieParser())

// Routes
app.use("/food",foodRoute)
app.use("/user",userRoute)
app.use("/admin",adminRoute)

app.listen(8080,()=>{
    console.log("server listening");
})