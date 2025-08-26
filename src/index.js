// require('dotenv').config({path:"./env"})
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path:'./env'
})


connectDB();















/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}` / `${DB_NAME}`);
    app.on("Error", (err) => {
      console.log("Error: ", err);
      throw err;
    });

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on the port ${process.env.PORT}` );
    })
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();
*/