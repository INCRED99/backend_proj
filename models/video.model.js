import mongoose from "mongoose"

const videoSchema= new Schema({

    videofile:{
        type: String , // cloudinary url
        required : true
        
    },
    thumbnail: {
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description : {
        type : String, 
        required: true
    },
    duration : {
        type: Number, // cloudinary url
        required: true
    }, 
    views: {
        type: Number, 
        default: 0
    }

},{
    timestamps: true
})

export const Video= mongoose.model("Video",videoSchema)