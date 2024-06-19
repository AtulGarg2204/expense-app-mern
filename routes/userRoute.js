const express=require("express");
const { loginController, registerController } = require("../controllers/userController");
const router=express.Router();

//Router ||login
router.post('/login',loginController)

//Router|| Register

router.post('/register',registerController)

module.exports=router;