import mongoose, { mongo, Schema } from "mongoose";    
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema= new Schema({
    username:{
        unique: true,
        required: true,
        lowercase: true,
        type: String,
        index: true
    },
    id: {
        unique: true,
        required: true,
        type: String

    },
    email: {
        unique: true,
        type: String,
        required: true,
        lowercase: true

    },
    fullname: {
        type: String,
        required: true,
        index: true // to make it searchable.
    },
    avatar: {
        type: String, // image uploaded on cloudinary , it gives back the url of the image 
        required: true,

    },
    coverImage: {
        type: String,
        required: true
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String, 
        required: true
    },
    refreshToken:{
        type: String
    }
},{
timestamps: true   // created at / updated at 
}
)
userSchema.pre("save",async function (next){  // pre hook/middleware

    if(this.isModified("password")) {
        this.password= await bcrypt.hash(this.password,10)  // encrypt the password
        next()
    }
})
userSchema.methods.generateAccessToken=function(){
   return  jwt.sign(
        {
        fullname:this.fullname, // this.fullname is stored in the database, fullname is the name of the payload
        email: this.email,
        username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            id: this.id
        },
        process.env.REFRESH_ACCESS_TOKEN,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User= mongoose.model("User",userSchema)
