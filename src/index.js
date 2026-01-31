import dotenv from 'dotenv'  

import connectdb from "../db/index.js";  

dotenv.config({
    path: './env'
})




connectdb()













// import mongoose from "mongoose";    

// const app=express();
// ( async ()=>{
// try {
    
//    await mongoose.connect(`${process.env.MONGODB_URl}`)
//    app.on("error",(error)=>{    database connected but our express app has a problem
//     console.log("error:",error);
//     throw error
//    })

//    app.listen(process.env.PORT,()=>{
//     console.log(`app is listening on port :${process.env.PORT}`)
//    })

// } catch (error) {
    
//     console.error("error:",error)
// }
    
// })()