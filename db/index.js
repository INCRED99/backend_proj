import mongoose from "mongoose";        
import { DB_NAME } from "../src/constants.js"; 

const connectdb=async()=>{
try {
 const connectioninstance=   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
console.log("mongodb connected: ",connectioninstance.connection.host)
} catch (error) {   
    console.log("error",error)
    
}
}

export default connectdb