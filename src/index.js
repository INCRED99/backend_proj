import dotenv from 'dotenv'  

import connectdb from "../db/index.js";  

dotenv.config({
    path: './env'
})




connectdb().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("server listening at port:",process.env.PORT);
        
    }) // database to connect hogaya par hamari express app database ka use karte huye listen karna shuru nhi kiya abhi tk
}).catch((error)=>{
console.log("mongodb connection failed",error);

}

)











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