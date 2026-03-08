  import { Router } from "express"; 
  import { registerUser } from "../controllers/user.controllers.js";

  const router= Router() // mini express app that groups related routes in a separate file.

  router.route("/register").post(registerUser)

  // router.route("/login").post(login)


  export default router