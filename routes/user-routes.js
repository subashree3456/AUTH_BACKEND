const express = require("express");
const { signup ,
     login , 
      verifyToken,
     getUser,  
     refreshToken, logout,} = require("../controllers/user-controller");
const router = express.Router();

// router.get('/',(req, res, next)=>{
// res.send("Hello World")
// });

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
// verify token
router.post("/logout", verifyToken, logout);
module.exports = router;