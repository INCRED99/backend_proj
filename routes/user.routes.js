  import { Router } from "express"; 
  import { registerUser } from "../controllers/user.controllers.js";
import {uploads} from "../middlewares/multer.middlewares.js"
  const router= Router() // mini express app that groups related routes in a separate file.

  router.route("/register").post(
    uploads.fields([{
      name: "avatar", 
      maxCount: 1
    },                              // file handling using multer middleware.
  {
    name: "coverImage", 
    maxCount: 1
  }]),registerUser)

  // router.route("/login").post(login)


  export default router