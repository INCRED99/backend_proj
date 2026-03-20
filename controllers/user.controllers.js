import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser= asyncHandler( async(req , res)=>{
    // get details from frontend
    // check for validation (whether empty or no)
    // check for user already existing (email/username)
    // get image / avatar and upload on cloudinary
    // create a user object on db
    // remove password and refresh token from response 
    // check from the response whether user created or not
    // return res

    const {fullname, email,password, username}=req.body
    console.log("email is: ", email)
    res.status(200).json({
        message: "ok"
    })
})
export {registerUser}