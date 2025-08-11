import express, { json } from 'express'
import dotenv from 'dotenv'
import dbConnection from './Database/dbConnection.js';



const app=express();
dotenv.config({});


app.use(json())

dbConnection();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})
