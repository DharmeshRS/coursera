const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.get("/login", function (req, res) {
 return res.render("login") 
  
});

router.post("/login",function (req,res){
  return res.render("/")
})
 
router.get("/register", function (req,res){
  return res.render("register");
});

// router.get("/home", function (req, res) {
//   return res.render("products/homePage");
// });

// router.get("", async function (req, res) {
//   const users = await User.find().lean().exec();
//   const pageTitle = "Welcome to Users page";

//   // return res.send(users);
//   return res.render("users/allUsers", {
//     users: users,
//     pageTitle,
//   });
// });

 {/* <a href="/users/create?first_name=mmm&last_name=mmm&email=mmm@gmail.com">Dharmesh</a> */}
// router.get("/create", function (req, res) {
//   res.render("users/addUser", {
//     first_name: req.query.first_name,
//     last_name: req.query.last_name,
//     email: req.query.email,
//   });
// });


router.post("", async function (req, res) {
    const user=await User.create(req.body)
//   const user = await User.create({
    
    // "name": req.body.name,
    // "email": req.body.email,
    // "password": req.body.password,
//   });
 
  res.render("users/login");
  return res.send(user);
});

router.get("", async function (req, res) {
  const user = await User.find().lean().exec();
  return res.send(user);
});

module.exports = router;
