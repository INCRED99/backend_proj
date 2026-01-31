import express from "express";  

import cors from 'cors'

import cookieParser from "cookie-parser";   

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,   // app.use: used in middlewares and backend configurations
    credentials:true
}))

app.use(express.json({limit:"10kb"})) // agar data in the form of json hai to uske liye app ko configure karna padega ( set limit of json file : 10kb)
app.use(express.urlencoded({extended:true,limit:"16kb"})) // url configurations

app.use(express.static("public"))  //storing files, folders, etc on our server.( public folder)

app.use(cookieParser()) // server se hi user ke browser ke cookies par CRUD operations kr paayun
export {app}